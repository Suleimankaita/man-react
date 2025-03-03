import React from 'react'
import obj from '../../hooks/obj'
import { Link } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useRef,useEffect,useState } from 'react'
import UseAuth from '../../hooks/UseAuth'
import { useGetpostQuery } from '../../features/appslice'
import a from '../transfer/note.mp3'
import { useRefMutation } from '../../features/appslice'
import { ToastContainer,toast } from 'react-toastify'
import { FaExclamationCircle } from 'react-icons/fa'

const notification = () => {
     
    const {}=useGetpostQuery('',{
        pollingInterval:1500,
        refetchOnFocus:true
    })
    const [ups]=useRefMutation()
    // const {users,setusers}=obj()
    const {id}=UseAuth()
    const socketRef=useRef(null)
    const audio=useRef(null)
    const socket=useRef(null)
    const dateNow=new Date().toISOString().split("T")[0];

    const [users,setusers]=useState([])
    const [dates,setdate]=useState(dateNow)
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


        useEffect(() => {
          if (!socket.current) {
            socket.current = io("http://localhost:4000");
          }
      
          const sock = socket.current;
      
        
          
          sock.off("notify").on("notify",(datas)=>{
            
            if(!audio.current){
    
                 audio.current=new Audio(a)
            }

            if(datas.id1===id){
              audio.current.play().catch((err) => console.log("Sound error:", err));
              let man=`${datas.name} \n\r NGN${datas.amount} ${datas.time}`
              toast(man)
              // if (Notification.permission === "granted") {
                new Notification("New Notification", { body: datas.amount});
              // }
            }
            toast(null)
          })
    
        
      
          return () => {
        
            sock.off("notify");
          };
        }, [id,audio]);
    let ms;
      

    
      
    
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    useEffect(()=>{

        const man=async()=>{

            if(!users.length)return
            
            const finds=users.find(user=>user._id===id)
            console.log(finds)

            setfind(finds.transaction)


    }
    man()

    },[id,users])



     const [mans,setmans]=useState([])
      useEffect(()=>{


        if(find.length){
          
          const al= find.filter(date=>{return date.date===dates})
          console.log(al)
          setmans(al)
        }
      },[dates,find])     

  


return (
<section className='history_con'>
<div style={{display:"flex",justifyContent:"flex-end",width:"90%",margin:"20px"}}>

  <input type="date" name="" value={dates} onChange={(e)=>setdate(e.target.value.split('T')[0])} id="" />
</div>
    <ToastContainer/>
        {
          find.length&&mans.length?(
          mans.sort((a, b) => b.transaction_id - a.transaction_id).map((user) => (
    <div style={{ position: "relative" }} className="transaction" key={user._id}>
      <div className={user.seen === false ? "seenss" : "noe"}></div>
      <Link to={`/History/${user._id}`}>
        <div className="pay">
          <p>{user.name ? user.name.slice(0, user.name.indexOf("@")) : ""}</p>
          <p className={user.status === "successful" ? "sucess" : user.status === "pending" ? "pending" : "fail"}>
            {user.status}
          </p>
        </div>
        <br />
        <p>{user.date}</p>
      </Link>
    </div>
  ))
):(<div style={{textAlign:"center",margin:10,height:"60vh",display:"flex",justifyContent:"center",alignItems:"center"}}><FaExclamationCircle style={{color:"tomato",fontSize:"25px"}}/><h1>Transaction not found</h1></div>)
        }
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </section>  
)
}

export default notification