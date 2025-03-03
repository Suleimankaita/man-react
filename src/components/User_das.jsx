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

  const {update}=UseAuth()
  
  const socketRef=useRef(null)
       const audio=useRef(null)
       const socket=useRef(null)
       const {id}=UseAuth()
       const [finds,setfinds]=useState([])
      //  const [find,setfind]=useState([])
      const [transactions,setTransactions]=useState([])
      const dispatch=useDispatch()
      let isMounted=true

    useEffect(() => {
      
      if(isMounted){
        const man=async()=>{


        if(!audio.current){

          audio.current=new Audio(a)
        }
         if (!socket.current) {
                socket.current = io("http://localhost:4000");
              }
          
              const sock = socket.current;
              
              // ✅ Remove existing listeners before adding new ones
              socket.current.off("message").on("message", (data) => {
                console.log("reuns")
                console.log("Received Transactions:", data);
                setTransactions(data);
                setfinds(data);
                // setfind(data)
              });
              socket.current.off("transactionUpdates").on("transactionUpdates",(datas)=>{
                // toast(datas)
                console.log("pos"+datas)
              })
              
              socket.current.off("notify").on("notify",(datas)=>{
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
        
              socket.current.off("transactionUpdate").on("transactionUpdate", (newTransaction) => {
                console.log("New Transaction Received:", newTransaction);
                setTransactions(prev => {
                  const exists = prev.some(tx => tx._id === newTransaction._id);
                  return exists ? prev : [newTransaction, ...prev];
                });
              });
      }
          man()
      }

              return () => {
                isMounted=false
                socket.current.off("message");
                socket.current.off("transactionUpdate");
                socket.current.off("transactionUpdates");
                socket.current.off("notify");

              };
      }, [id,isMounted]);
  let ms;
    
  
    
  
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
   useEffect(() => {
        if (!transactions.length) return;
    
        const processTransactions = async () => {
          const userTransactions = transactions.find(t => t._id === id);
        
  
          if (userTransactions) {
            for (let tx of userTransactions.transaction) {
              dispatch(acct(tx.amount));
            }
          }
        };
    
        processTransactions();

        return()=>{

        }
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
    
            <div className="pay_box">
                <div className="mx">
                {
                    secound.map(user=>(
                    <>
                      <Link to={`/${user.url}`} className="con_pay">
                        <div  key={user.id}>
                            <div className="radius">
                            <h1 style={{color:"rgba(69, 176, 243, 0.88)",fontSize:"50px",width:"100px",textAlign:"center"}}>{user.img}</h1>
    
                            {/* <img src={user.img} alt="" width={100} height={60} /> */}
                            </div>
                            <p style={{textAlign:"center"}}>{user.name}</p>
                        </div>
                            </Link>
                        </>
    
                    ))
                }
                </div>
            </div>
    
            <div className="pay_box">
    
    
            <div className="mx">
                {
                    cons.slice(3,9).map(user=>(
                    <>
                    <Link to={user.name}>
                        <div className="con_pay" key={user.id}>
                            <div className="radius">
                                <h1 className='icons_1' style={{color:"rgba(69, 176, 243, 0.88)",width:"100px",textAlign:"center"}}>{user.img}</h1>
                            {/* <img src={user.img} alt="" width={100} height={60} /> */}
                            </div>
                            <p>{user.name}</p>
                        </div>
                        </Link>
                        </>
    
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