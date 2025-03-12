import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import a from './transfer/note.mp3'
import { useRef, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import UseAuth from '../hooks/UseAuth'
import { accounts as acct } from '../features/logslice'
import { useGetpostQuery } from '../features/appslice'
import { useDispatch } from 'react-redux'

const User_das = ({ account, secound, setsecound, cons, con1, content, setcons, open, setopen }) => {
  const { data } = useGetpostQuery('', {
    refetchOnFocus: true,
    pollingInterval: 1000
  })

  const { update } = UseAuth()
  const socketRef = useRef(null)
  const audio = useRef(null)
  const socket = useRef(null)
  const { id } = UseAuth()
  const [finds, setfinds] = useState([])
  const [transactions, setTransactions] = useState([])
  const dispatch = useDispatch()
  const noti = useRef(new Audio(a))
  const SOCKET_URL = "http://localhost:4000";
  const [alerts,setalert]=useState()
  let isMounted = true

  let arr=[]

  useEffect(() => {
    if (!socket.current && !audio.current) {
      audio.current = new Audio(a);
      socket.current = io(SOCKET_URL, {
        transports: ["websocket"],
        secure: true,
      });
    }

    if (isMounted) {
      console.log("mounting");

      const sock = socket.current;

      sock.off("message").on("message", (data) => {
        console.log("Received message:", data);
        setTransactions(data);
      });

      sock.off("transactionUpdates").on("transactionUpdates", (datas) => {
        console.log("Received transactionUpdates:", datas);
        toast(datas);
      });

      sock.off("notify").on("notify", (datas) => {
        console.log("Received notify:", datas);
        if (datas.id1 === id) {
          document.addEventListener(
            "click",
            () => {
              noti.current.play().catch((err) => console.log("Sound error:", err));
            },
            { once: true }
          );
          
          // setTransactions((prev) => [...prev, datas.amount]);

          let message = `${datas.name} \n NGN${datas.amount} ${datas.time}`;
          toast(message);

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
        console.log("Received transactionUpdate:", newTransaction);
        setTransactions((prev) => {
          const exists = prev.some((tx) => tx._id === newTransaction._id);
          return exists ? prev : [newTransaction, ...prev];
        });
      });
    }

    return () => {
      isMounted = false;
      console.log("unmounting");

      if (socket.current) {
        socket.current.off("message");
        socket.current.off("transactionUpdate");
        socket.current.off("transactionUpdates");
        socket.current.off("notify");
      }
    };
  }, [id]);

  useEffect(() => {
    if (!transactions.length) return;

    const processTransactions = async () => {
      const userTransactions = transactions.find((t) => t._id === id);
      console.log("Processing transactions:", userTransactions);

      if (userTransactions || transactions.length) {
        console.log("Processing transactions:");
        userTransactions.transaction.forEach((tx) => {
          dispatch((dispatch, getState) => {
            const existingTransactions = getState().auth.account;
            const exists = existingTransactions.some((existingTx) => existingTx._id === tx._id);
            if (!exists) {
              dispatch(acct(tx.amount));
            }
          });
        });
      }
    };

    processTransactions();

    return () => {
      console.log("Cleaning up transactions effect");
      isMounted = false;
    };
  }, [transactions, id, dispatch]);


  const [arrs,setarrs]=useState([]);
  let moute=true;

  useEffect(()=>{

    if(moute){

      const mans=async()=>{

        const {ids,entities}=data;

          const all=entities[id].transaction
          const ms=all.map(res=>{
            return setarrs(prev=>[...prev,res.amount])
          })

          if(arrs.length){
            console.log(arrs)
          }

      }
      mans()

    }
    return()=>{
      moute=false;
    }

  },[data])

useEffect(()=>{
  if(arrs.length){
    console.log(arrs)
}
},[arrs])


  return (
    <section className="main">
      <ToastContainer />
      <div className="all">
        <br /><br /><br />
        <div className="con_1">
          <div className="available">
            <h1>Available Balance <span className='eye'>{con1}</span></h1>
            <Link style={{ color: "whitesmoke" }} to={'/History'}>Transaction history</Link>
          </div>
          <div className='flex'>
            {content}
          </div>
          <h3 style={{ textAlign: "center", fontSize: "22" }}>account number {account}</h3>
          <div className='flex2'>
            <p> Balance updated at {update ? update.split("T")[0] : null}</p>
          </div>
        </div>

        <div className="banner">
          {
            cons.slice(0, 3).map(user => (
              <div className="max" key={user.id}>
                <img src={user.img} alt="" width={100} height={60} />
                <br />
                <p>{user.body}</p>
              </div>
            ))
          }
        </div>
        <br />
        <br />

        <div className="pay_box" style={{ display: "flex", justifyContent: "center" }}>
          <div className="mx" style={{ display: "flex", justifyContent: "center" }}>
            {
              secound.map(user => (
                <Link key={user.id} to={`/${user.url}`} className="con_pay">
                  <div>
                    <div className="radius">
                      <div style={{ color: "rgba(69, 176, 243, 0.88)", fontSize: "50px", width: "100px", textAlign: "center" }}>{user.img}</div>
                    </div>
                    <p style={{ textAlign: "center" }}>{user.name}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>

        <div className="pay_box">
          <div className="mx" style={{ display: "flex", justifyContent: "center" }}>
            {
              cons.slice(3, 9).map(user => (
                <Link to={user.name} key={user.id}>
                  <div className="con_pay">
                    <div className="radius">
                      <div className='icons_1' style={{ color: "rgba(69, 176, 243, 0.88)", width: "100px", textAlign: "center" }}>{user.img}</div>
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