import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import a from './transfer/note.mp3'
import { useRef,useEffect,useState } from 'react'
import { io } from 'socket.io-client'
import UseAuth from '../hooks/UseAuth'
// import { accounts as acct,Accno } from '../../features/';
import { accounts as acct } from '../features/logslice'
import { useGetpostQuery } from '../features/appslice'
import { useDispatch } from 'react-redux'
const User_das = ({account,secound,setsecound, cons, con1, content, setcons, open, setopen }) => {
  
  const {data}=useGetpostQuery('',{
    refetchOnFocus:true,
    pollingInterval:1000
  })
  // ssjijdij

  const {update}=UseAuth()
  
  const socketRef=useRef(null)
       const audio=useRef(null)
       const socket=useRef(null)
       const {id}=UseAuth()
       const [finds,setfinds]=useState([])
      //  const [find,setfind]=useState([])
      const [transactions,setTransactions]=useState([])
      const dispatch=useDispatch()
      // const isMounted =useRef( true);
      const noti = useRef(new Audio(a)); 
      let isMounted = false;
      
      useEffect(() => {
        if(!isMounted){

        const man = async () => {
          if (!socket.current) {
            socket.current = io("http://localhost:4000", {
              transports: ["websocket"],
              secure: true,
            });
          }
    
          const sock = socket.current;
    
          // ✅ Remove existing listeners before adding new ones
          sock.off("message").on("message", (data) => {
            setTransactions(data);
          });
    
          sock.off("transactionUpdates").on("transactionUpdates", (datas) => {
            toast(datas);
          });
    
          sock.off("notify").on("notify", (datas) => {
            if (datas.id1 === id) {
              // ✅ FIXED: Play sound only after user clicks
              document.addEventListener(
                "click",
                () => {
                  noti.current.play().catch((err) => console.log("Sound error:", err));
                },
                { once: true }
              );
    
              let man = `${datas.name} \n NGN${datas.amount} ${datas.time}`;
              toast(man);
    
              // ✅ FIXED: Handle Notifications properly
              if ("Notification" in window) {
                if (Notification.permission === "granted") {
                  new Notification("New Notification", { body: datas.amount });
                } else if (Notification.permission !== "denied") {
                  Notification.requestPermission().then((permission) => {
                    if (permission === "granted") {
                      new Notification("New Notification", { body: datas.amount });
                    }
                  });
                }
              }
            }
          });
    
          sock.off("transactionUpdate").on("transactionUpdate", (newTransaction) => {
            setTransactions((prev) => {
              const exists = prev.some((tx) => tx._id === newTransaction._id);
              return exists ? prev : [newTransaction, ...prev];
            });
          });
        };
    
        man();
      }
    
        return () => {
          isMounted = true; // ✅ FIXED: Correct cleanup
          if (socket.current) {
            socket.current.off("message");
            socket.current.off("transactionUpdate");
            socket.current.off("transactionUpdates");
            socket.current.off("notify");
          }
        };
      }, [id, data]);
    
      useEffect(() => {
        if (!transactions.length) return;
    
        const processTransactions = async () => {
          const userTransactions = transactions.find((t) => t._id === id);
    
          if (userTransactions) {
            for (let tx of userTransactions.transaction) {
              dispatch(acct(tx.amount));
            }
          }
        };
    
        processTransactions();
      }, [transactions, id, dispatch]);
    
    return (
      <section className="main">
    <ToastContainer/>
            <div className="all">
            <br /><br /><br />
            <div className="con_1">
                <div className="available">
            <h1>Available Balance <span className='eye'>{con1}</span></h1>
           <Link style={{color:"whitesmoke"}} to={'/History'}>Transaction history</Link>
            </div>
                <div className='flex'>
            {content}
            </div>
    <h3 style={{textAlign:"center",fontSize:"22"}}>account number {account}</h3>
                <div className='flex2'>
           <p> Balance updated at {update?update.split("T")[0]:null}</p>
            </div>
    
            </div>
            
            <div className="banner">
                {/* <div className="max"> */}
            {/* < FaUniversity className='icon'/> */}
            {
                    cons.slice(0,3).map(user=>(
    
                        <div className="max" key={user.id}>
                                {/* <div>{user.img}</div> */}
                            <img src={user.img} alt="" width={100} height={60} />
                        <br />            
                                <p>{user.body}</p>
                        </div>
                    ))
                }
            </div>
            {/* <div className="max">
            {/* < FaMoneyBillAlt className='icon'/> */}
            {/* <img src={svg2} alt="" width={100} height={60} />
    
            </div>
            <img src={svg1} alt="" width={100} height={60} />
            < FaAssistiveListeningSystems className='icon'/> 
            </div>  */}
            <br />
            <br />
    
            <div className="pay_box" style={{display:"flex",justifyContent:"center"}}>
                <div className="mx" style={{display:"flex",justifyContent:"center"}}>
                {
                    secound.map(user=>(
                      <Link key={user.id} to={`/${user.url}`} className="con_pay">
                        <div  >
                            <div className="radius">
                            <div style={{color:"rgba(69, 176, 243, 0.88)",fontSize:"50px",width:"100px",textAlign:"center"}}>{user.img}</div>
    
                            {/* <img src={user.img} alt="" width={100} height={60} /> */}
                            </div>
                            <p style={{textAlign:"center"}}>{user.name}</p>
                        </div>
                            </Link>
    
                    ))
                }
                </div>
            </div>
    
            <div className="pay_box">
    
    
            <div className="mx" style={{display:"flex",justifyContent:"center"}}>
                {
                    cons.slice(3,9).map(user=>(
                    <Link to={user.name}  key={user.id}>
                        <div className="con_pay">
                            <div className="radius">
                                <div className='icons_1' style={{color:"rgba(69, 176, 243, 0.88)",width:"100px",textAlign:"center"}}>{user.img}</div>
                            {/* <img src={user.img} alt="" width={100} height={60} /> */}
                            </div>
                            <p>{user.name}</p>
                        </div>
                        </Link>
    
                    ))
                }
                </div>
    
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </div>
        </section>
  )
}

export default User_das