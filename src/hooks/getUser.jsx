import React from 'react'
import UseAuth from './UseAuth'
import { io } from 'socket.io-client'
import { useState,useEffect } from 'react'

const getUser = () => {

    const {id}=UseAuth()
    const [user,setuser]=useState([])


    const socket=io("http://localhost:4000")

    useEffect(()=>{

        console.log(id)
        socket.on("message",(data)=>{
            const find=data.find(id=>{console.log(id._id)})
            
            
        })
    },[])


    return (

        <div>getUser</div>

    )
}

export default getUser