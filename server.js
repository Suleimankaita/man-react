require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Port = process.env.PORT || 3500;
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const options = require("./config/config");
const connectDb = require("./config/connectDB");
const multer = require("multer");
const { Server } = require("socket.io");
const user = require("./model/user_reg");

connectDb();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public/images'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require('./routes/root'));
app.use("/regs", require('./routes/regs'));
app.use("/auth", require('./routes/auth'));
app.use("/get", require('./routes/get'));
app.use("/user_set", require('./routes/user_set'));
app.use("/patch", upload.single("file"), require('./routes/patch'));
app.use("/refresh", require('./routes/refresh'));
app.use("/img", require('./routes/img'));
app.use("/settings", require('./routes/user_settings'));
app.use("/search", require('./routes/search'));
app.use("/add_room", upload.array('file'), require('./routes/add_rooms'));
app.use("/update", require('./routes/update'));

const server = app.listen(Port, () => console.log("Running on " + Port));

const io = new Server(server, {
    cors: { origin: "http://localhost:3000" }
});

mongoose.connection.once("open", () => {
    io.on("connection", async (socket) => {
        const data = await user.find().lean();
        
        setInterval(() => {
            socket.emit("data", data);
        }, 1000);

        socket.on('ups', async ({ id, active }) => {
            await user.findByIdAndUpdate(id, { active });
            socket.emit("data", data);
        });
    });
    console.log("Connected to MongoDB");
});