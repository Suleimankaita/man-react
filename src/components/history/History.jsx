import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Notification from '../notifications/notification'

const History = () => {
// const [users,setusers]=useState([
//     {
//         id:0,
//         name:"transfer to suleiman",
//         amount:200,
//         transaction_status:"sucessful"
// ,        date:new Date().toDateString(),
//         time:new Date().toLocaleTimeString(),
//         type:"credit",
//         seen:false

//     },
//     {
//         id:1,
//         name:"transfer to yusuf",
//         amount:200,
//         date:new Date().toDateString(),
//         transaction_status:"pending",
//         seen:false,
//          time:new Date().toLocaleTimeString(),
//         type:"credit"
//     },
//     {
//         id:2,
//         name:"transfer to yusuf",
//         amount:200,
//         date:new Date().toDateString(),
//         transaction_status:"fail",
//         time:new Date().toLocaleTimeString(),
//         type:"credit",
//         seen:false
//     },
// ])

//     let ismounted=true

//     const arr=[]
//         const [me,setme]=useState([])
//     useEffect(()=>{
//         if(ismounted){

//             const find=users.filter(use=>{
//                 const all=use.seen===false
//                 arr.push(all)
//             })
//             setme(arr.length)
//         }
//         return()=>{
//             ismounted=false
//         }
//     },[])



    return <Notification/>
}

export default History