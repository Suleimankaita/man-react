import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useGetpostQuery } from '../../features/appslice';
import a from '../transfer/note.mp3';
import { useRefMutation } from '../../features/appslice';
import { ToastContainer, toast } from 'react-toastify';
import { FaExclamationCircle } from 'react-icons/fa';
import UseAuth from '../../hooks/UseAuth';

const Notification = () => {
    useGetpostQuery('', {
        pollingInterval: 1500,
        refetchOnFocus: true,
    });

    const [ups] = useRefMutation ? useRefMutation() : [];
    const { id } = UseAuth();
    const socketRef = useRef(null);
    const audioRef = useRef(null);
    const dateNow = new Date().toISOString().split("T")[0];

    const [users, setUsers] = useState([]);
    const [dates, setDate] = useState(dateNow);
    const [find, setFind] = useState([]);
    const [mans, setMans] = useState([]);

    // ✅ Establish WebSocket Connection
    useEffect(() => {
        if (!socketRef.current) {
            socketRef.current = io("https://ict-tr8s.onrender.com", {
                transports: ["websocket"],
                reconnection: true,
            });
        }
        const sock = socketRef.current;

        sock.off("message").on("message", (data) => {
            setUsers(data);
        });

        return () => {
            sock.off("message");
        };
    }, []);

    // ✅ Handle Notifications & Audio
    useEffect(() => {
        if (!socketRef.current) return;

        const sock = socketRef.current;

        if (!audioRef.current) {
            audioRef.current = new Audio(a);
            audioRef.current.preload = "auto"; // Ensures it is loaded before playing
        }

        sock.off("notify").on("notify", (datas) => {
            if (datas.id1 === id) {
                const playAudio = async () => {
                    try {
                        await audioRef.current.play();
                    } catch (err) {
                        console.log("Sound error:", err);
                    }
                };
                playAudio();

                let message = `${datas.name} \n NGN${datas.amount} ${datas.time}`;
                toast(message);

                if ("Notification" in window) {
                    if (Notification.permission === "granted") {
                        new Notification("New Notification", { body: `NGN${datas.amount}` });
                    } else if (Notification.permission !== "denied") {
                        Notification.requestPermission().then((permission) => {
                            if (permission === "granted") {
                                new Notification("New Notification", { body: `NGN${datas.amount}` });
                            }
                        });
                    }
                }
            }
        });

        return () => {
            sock.off("notify");
        };
    }, [id]);

    // ✅ Fetch Transactions
    useEffect(() => {
        if (!users.length) return;

        const user = users.find(user => user._id === id);
        if (user) {
            setFind(user.transaction || []);
        }
    }, [id, users]);

    // ✅ Filter Transactions by Date
    useEffect(() => {
        if (find.length) {
            const filtered = find.filter(txn => txn.date === dates);
            setMans(filtered);
        }
    }, [dates, find]);

    return (
        <section className='history_con'>
            <div style={{ display: "flex", justifyContent: "flex-end", width: "90%", margin: "20px" }}>
                <input type="date" value={dates} onChange={(e) => setDate(e.target.value.split('T')[0])} />
            </div>
            <ToastContainer />
            {find.length && mans.length ? (
                mans.sort((a, b) => b.transaction_id - a.transaction_id).map((user) => (
                    <div key={user._id} style={{ position: "relative" }} className="transaction">
                        <div className={user.seen === false ? "seenss" : "noe"}></div>
                        <Link to={`/History/${user._id}`}>
                            <div className="pay">
                                <p>{user.name ? user.name.split("@")[0] : ""}</p>
                                <p className={user.status === "successful" ? "sucess" : user.status === "pending" ? "pending" : "fail"}>
                                    {user.status}
                                </p>
                            </div>
                            <br />
                            <p>{user.date}</p>
                        </Link>
                    </div>
                ))
            ) : (
                <div style={{ textAlign: "center", margin: 10, height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <FaExclamationCircle style={{ color: "tomato", fontSize: "25px" }} />
                    <h1>Transaction not found</h1>
                </div>
            )}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </section>
    );
};

export default Notification;
