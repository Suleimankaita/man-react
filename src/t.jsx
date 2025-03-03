// // import React, { useEffect } from 'react';

// // const NotificationComponent = () => {
  
// //   useEffect(() => {
// //     // Ensure Cordova is ready before using `navigator.notification`
// //     document.addEventListener('deviceready', () => {
// //       console.log("Cordova is ready!");
// //     }, false);
// //   }, []);

// //   // ✅ Show Alert
// //   const showAlert = () => {
// //     if (navigator.notification) {
// //       navigator.notification.alert(
// //         'This is an alert message!',
// //         () => console.log('Alert dismissed'), // Callback function
// //         'Alert Title', // Title
// //         'OK' // Button text
// //       );
// //     } else {
// //       alert("Cordova not available!"); // Fallback for web browsers
// //     }
// //   };

// //   // ✅ Show Confirm Dialog
// //   const showConfirm = () => {
// //     if (navigator.notification) {
// //       navigator.notification.confirm(
// //         'Are you sure?',
// //         (buttonIndex) => console.log(`Button ${buttonIndex} clicked`),
// //         'Confirm Action',
// //         ['Yes', 'No']
// //       );
// //     } else {
// //       if (window.confirm('Are you sure?')) console.log('User clicked Yes');
// //     }
// //   };

// //   // ✅ Show Prompt Dialog
// //   const showPrompt = () => {
// //     if (navigator.notification) {
// //       navigator.notification.prompt(
// //         'Enter your name:',
// //         (results) => console.log(`User input: ${results.input1}, Button: ${results.buttonIndex}`),
// //         'User Input',
// //         ['OK', 'Cancel'],
// //         'Default text'
// //       );
// //     } else {
// //       const name = window.prompt('Enter your name:');
// //       console.log(`User input: ${name}`);
// //     }
// //   };

// //   return (
// //     <div style={{ textAlign: "center", padding: "20px" }}>
// //       <h2>Cordova Notification Example</h2>
// //       <button onClick={showAlert}>Show Alert</button>
// //       <button onClick={showConfirm} style={{ margin: "10px" }}>Show Confirm</button>
// //       <button onClick={showPrompt}>Show Prompt</button>
// //     </div>
// //   );
// // };

// // export default NotificationComponent;
// import React from 'react'
// import { useEffect } from 'react'
// import { ToastContainer,toast } from 'react-toastify';
// const t = () => {


//   const arr=[12,3,4,2,23,5];
//   useEffect(()=>{
//     toast(arr.at(-1))
//     // console.log(arr)
//   },[])

//   return (
//     <div><ToastContainer/>
//     <ref>suleiman</ref>
//     </div>
//   )
// }

// export default timport React from "react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter
} from "@mui/material";
// import {Link }from "@mui/material";
import { Link } from "react-router-dom";
const HoverTable = () => {
  const rows = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            component={Link} 
            to={"/"}
              key={row.id}
              sx={{
                "&:hover": {
                  backgroundColor: "#f0f0f0", // Light gray on hover
                  cursor: "pointer",
                },
              }}

  //           key={row.id}
  // component="a"
  // href="/"
  // // target="_blank"
  // // rel="noopener noreferrer"
  // sx={{
  //   textDecoration: "none",
  //   color: "inherit",
  //   "&:hover": { backgroundColor: "#f0f0f0", cursor: "pointer" },
  // }}
            >
            {/* <Link to={'/'}> */}
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              {/* </Link> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HoverTable;
