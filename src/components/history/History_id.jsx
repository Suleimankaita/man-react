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

    //         console.log(find)
    //     // }
        
    // },[find])

    
    const [users,setusers]=useState([])
    const [find,setfind]=useState([])

    useEffect(()=>{
        if(!socketRef.current){
            socketRef.current=io("http://localhost:4000")
        }
        const sock=socketRef.current;
        
        sock.off("message").on("message",(data)=>{
            // console.log(data)
            setusers(data)

        })
            return()=>{
                sock.off("message")
            }
    },[])

    useEffect(()=>{

        const man=async()=>{
            
            if(!users.length)return
            // if(users){
                const finds=users.map(user=>{
                    const findd=user.transaction.find(use=>use._id===id)
                    
                    if(findd){
                        setfind(findd)
                        console.log(find)

                    }

                })



    }
    man()

    },[users,find])


    
        useEffect(()=>{
    
            const man=async()=>{
    
                if(!users.length)return
                
                const finds=users.find(user=>user._id===id)
                console.log(finds)
    
                setfind(finds.transaction)
    
        }
        man()
    
        },[id,users])
    
    
        const mn=async()=>{
          const m=await  ups({id}).unwrap()
          console.log("sa"+m)
        }
        useEffect(()=>{
          
        console.log(Number(1000).toString())
          mn()
    
        },[])

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
                <button  onClick={()=>window.print()}>download</button>
                <button  onClick={()=>nav(-1)}>close</button>
            </div>
            </>
        }
       </div>
        </section>
  )
}

export default History_id