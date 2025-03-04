import React from 'react'
import UseAuth from './UseAuth'
import { io } from 'socket.io-client'
import { useState,useEffect } from 'react'

const getUser = () => {

    const {id}=UseAuth()
    const [user,setuser]=useState([])


    const socket=io("https://ict-tr8s.onrender.com")

    useEffect(()=>{

        socket.on("message",(data)=>{
            
            
        })
    },[])


    return (

        <div>getUser</div>

    )
}

export default getUser