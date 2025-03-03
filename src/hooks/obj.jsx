import React from 'react'
import { useState ,useEffect} from 'react'
import { useGetpostQuery } from '../features/appslice'

const obj = () => {


    const [users,setusers]=useState([
        {
            id:0,
            name:"transfer to suleiman",
            amount:200,
            transaction_status:"sucessful"
    ,        date:new Date().toDateString(),
            time:new Date().toLocaleTimeString(),
            type:"credit",
            seen:false
    
        },
        {
            id:1,
            name:"transfer to yusuf",
            amount:200,
            date:new Date().toDateString(),
            transaction_status:"pending",
            seen:false,
             time:new Date().toLocaleTimeString(),
            type:"credit"
        },
        {
            id:2,
            name:"transfer to yusuf",
            amount:200,
            date:new Date().toDateString(),
            transaction_status:"fail",
            time:new Date().toLocaleTimeString(),
            type:"credit",
            seen:true},
    ])

     useEffect(()=>{
            localStorage.setItem("arr",JSON.stringify(users))
    
            
        },[users])

    return {users,setusers}
}

export default obj