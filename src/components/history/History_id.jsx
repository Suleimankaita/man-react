import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState,useEffect,useRef } from 'react'
import nav from '../../app/nav'
import { useNavigate } from 'react-router-dom'
import obj from '../../hooks/obj'
import { useSelector } from 'react-redux'
import { selectById } from '../../features/appslice'
import { io } from 'socket.io-client'
import UseAuth from '../../hooks/UseAuth'
import { useGetpostQuery } from '../../features/appslice'
import { useRefMutation } from '../../features/appslice'

const History_id = () => {

        const [ups]=useRefMutation()
    
    const nav=useNavigate()
    const {id}=useParams()
        const socketRef=useRef(null)
    
    // const find=useSelector(state=>selectById(state,id))
    
    
    // const [users,setusers]=useState([
    //     {
    //         id:0,
    //         name:"transfer to suleiman",
    //         amount:200,
    //         transaction_status:"sucessful"
    // ,        date:new Date().toDateString(),
    //         time:new Date().toLocaleTimeString(),
    //         type:"credit"
    //     },
    //     {
    //         id:1,
    //         name:"transfer to yusuf",
    //         amount:200,
    //         date:new Date().toDateString(),
    //         transaction_status:"pending",
    //          time:new Date().toLocaleTimeString(),
    //         type:"credit"
    //     },
    //     {
    //         id:2,
    //         name:"transfer to yusuf",
    //         amount:200,
    //         date:new Date().toDateString(),
    //         transaction_status:"fail",
    //          time:new Date().toLocaleTimeString(),
    //         type:"credit"
    //     },
    // ])
    // const find=users.find(user=>user.id===Number(id))
    // const find=
    // useEffect(()=>{
    //     // setusers(users,!find.seen)
    //     // localStorage.setItem("arr",JSON.stringify(users))
    //     // if(find){

    //     // }
        
    // },[find])

    
    const [users,setusers]=useState([])
    const [find,setfind]=useState([])

    useEffect(() => {
        if (!socketRef.current) {
            socketRef.current = io("https://ict-tr8s.onrender.com", {
                transports: ["websocket"],
                reconnection: true,
            });
        }
        const sock = socketRef.current;

        sock.off("message").on("message", (data) => {
            setusers(data);
        });

        return () => {
            sock.off("message");
        };
    }, []);

    useEffect(() => {
        if (!users.length) return;
        const finds = users.map(user => {
          const findd = user.transaction.find(use => use._id === id);
          return findd;
        }).filter(Boolean); // Filter out undefined values
      
        if (finds.length) {
          setfind(finds[0]); // Set only the first found transaction
        }
      }, [users, id]); // Remove `find` from dependency
      


    
        useEffect(()=>{
    
            const man=async()=>{
    
                if(!users.length)return
                
                const finds=users.find(user=>user._id===id)
    
                setfind(finds.transaction)
    
        }
        man()
    
        },[id,users])
    
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    await ups({ id }).unwrap();
                } catch (error) {
                    console.error("API call failed:", error);
                }
            };
            fetchData();
        }, [id]); 


        const handlePrint = () => {
            setTimeout(() => {
                window.print();
            }, 500);
        };
    

  return (
    <section className='User_id'>
       
       <div className="tans_his">
        {find&&
        <>
        <div className="receipt"><h1>Transaction Receipt</h1></div>
        <div className="row1">
        <h1>Transaction Details:-</h1>
        <hr />
            <p>Date: {find.date}</p>
            <p>Time: {find.time}</p>
            <p>amount: {find.amount}</p>
            <p>status: {find.status}</p>
            <p>Type: {Number(find.amount)
            .toString().startsWith("-")?"Debit":"credit"}</p>
            <h1>Accounts Details</h1>
            <hr />
            <p>Name: {find.name}</p>
            </div>
            <div className="button_print">
                <button  onClick={()=>handlePrint()}>download</button>
                <button  onClick={()=>nav(-1)}>close</button>
            </div>
            </>
        }
       </div>
        </section>
  )
}

export default History_id