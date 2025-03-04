// import React from 'react'
// import { useState,useEffect,useRef} from 'react'
// import {FaSimCard,FaCaretDown,FaCaretRight,FaCarSide,FaUser,FaTimes, FaWallet,FaUnlockAlt} from 'react-icons/fa'
// import { io } from 'socket.io-client'
// import { pricesss } from '../../features/logslice'
// import mobile from '../../assets/images/9mobile.jpeg'
// import glo from '../../assets/images/glo.jpeg'
// import Airtel from '../../assets/images/Airtel.jpeg'
// import mtn from '../../assets/images/mtn.jpeg'
// import Usebuy from '../../hooks/Usebuy'
// import Transaction_con from '../../hooks/transaction_con'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { display } from '../../features/logslice'
// import { Balance } from '../../features/logslice'
// import { account } from '../../features/logslice'
// import swal from 'sweetalert'
// import S from '../../s'
// import Air_p from './Air_p'
// import { useGetpostQuery } from '../../features/appslice'
// import UseAuth from '../../hooks/UseAuth'
// import getUser from '../../hooks/getUser'
// import { accounts as acct } from '../../features/logslice'
// import { id } from '../../features/logslice'



// const airtime = () => {
//   const socket=io("http://localhost:4000")
  
//   const {isLoading,isSuccess}=useGetpostQuery("post",{
//     pollingInterval:1500,
//     refetchOnFocus:true,
//     refetchOnMountOrArgChange:true

//   })
//   let contentss;

//   const {id:idss}=UseAuth()

//   const ids=useSelector(id)
//   const selects=useSelector(display)
//   const disp=useDispatch()
//   const {credit,setcredit,values}=Usebuy()
//   const [open,setopen]=useState(false)
//     const accounts=useSelector(account)

//   const [opens,setopens]=useState(true)

//   const [sims,setsims]=useState([
//     {
//       id:0,
//       name:"MTN",
//       icon:mtn,
//       checked:true
//     },
//     {
//       id:1,
//       name:"Airtel",
//       icon:Airtel,
//       checked:false

//     },
//     {
//       id:2,
//       name:"Glo",
//       icon:glo,
//       checked:false

//     },
//     {
//       id:3,
//       name:"9mobile",
//       icon:mobile,
//       checked:false

//     },
//   ])
  

//     const [contents,setcontents]=useState('')
//     const [phone,setphone]=useState('')

//     const arr=[glo,mtn,mobile]

//   const show=()=>{
//     setopen(prev=>!prev)
//   }
//   const [all,setall]=useState(false)
    
//   const change=(cards)=>{
//     setopens(prev=>!prev)
//     setcredit(cards)
    

//   }
//   const mans=(
//     accounts.reduce((sum,prices)=>{
//         return sum +prices
//     })
// )
//   const [details,setdetails]=useState('')
//   const pay=()=>{
//     if(mans<credit.airtime||mans<price) {
//       return swal({
//           text:`Insufficient balance in the selected accout to proceed.\n You need NGN ${credit.airtime||price} in your account`,
//           title:"No enough balance",
//           icon:"error"
//       })}
//       //  a

//     setcontents( <main className='credit_alert2' >
//       <div className="close">
//         <FaTimes className='fatimes' onClick={close}/>
//         </div>
     
//         <div className="locks">
//      <div className="do">
//      <FaUnlockAlt/>
//      </div>
//      <br />
//      <h5>Authentication </h5>

//       {/* <span style={{fontSize:17}}>Pin</span> */}
//         </div>

//      <div  className="simm sl2">
//       <S/>
     
//      </div>

//   </main>)
  
//   }

//   const[price,setprice]=useState('')   
//   const close=()=>setopens(prev=>!prev)
//     const click=()=>{
//     setopens(prev=>!prev)

//       setcredit({airtime:price,phone:phone})
//       disp(pricesss({price,phone}))
//     }

//     useEffect(()=>{


//         if(credit){
//           disp(pricesss({credit:credit.airtime,phone}))
//                         disp(Balance(credit.airtime))
          
//       setcontents( opens?
//         <main className='credit_alert' >
//         <div className="close">
//         <FaTimes className='fatimes' onClick={close}/>
//         </div>
//         <h1>NGN{credit.airtime}</h1>
//         <div  className="simm sl">
//           <p>Product Name</p>
//           <p>Airtime</p>
//           {/* <img src={name.icon} width={30} height={30} className='sims_ra' />
//           <p>{name.name}</p>    */}
//           </div>
//         <div  className="simm sl">
//           <p>Receipient Mobile</p>
//           <p>{phone}</p>
//           {/* <img src={name.icon} width={30} height={30} className='sims_ra' />
//           <p>{name.name}</p>    */}
//           </div>
//         <div  className="simm sl">
//           <p>Amount </p>
//           <p>{credit.airtime}</p>
//           {/* <img src={name.icon} width={30} height={30} className='sims_ra' />
//           <p>{name.name}</p>    */}
//           </div>

//             <hr />
//           <br />
//           <div className="payment_met">
//           <h3>payment method</h3>
//           <div className="box_pay">
//            <FaWallet className='fa_wa'/><p> Wallet (&#8358;{Number(mans).toLocaleString()})
//             </p> 
//             </div>
//           </div>
//             <button className='btns_pay' onClick={pay}>pay</button>
//     </main>:
//     <></>)
//         }
      
//     },[credit,opens])
//     let ismounted=true;
//     useEffect(()=>{
//       console.log(ids)
//       if(ismounted){

//         if(selects){
          
//           setcontents(selects)
//         }
//         console.log(1000000)
//       }
//       return()=>{

//         ismounted=false
//         setcontents('')
      
//       }
//     },[selects])
 


//   const [name,setname]=useState('')
//   const [index,setindex]=useState(0)

//   useEffect(()=>{
//     console.log(id)

//     setname(sims[0])
//   },[])
    
//   useEffect(()=>{
//   console.log(name)
//   },[name])
    
//   useEffect(()=>{
//     const clear=setInterval(() => {
       
//       setindex((prevIndex) => (prevIndex + 1) % arr.length);
        
//     }, 2000);

//     return ()=>{
//         clearInterval(clear)
//     }

// },[])

// const prevSlide = () => {
// setindex((prevIndex) => (prevIndex - 1 + arr.length) % arr.length);
// };

// //     const [transaction,setTransactions]=useState([])

// // useEffect(() => {
// //   // Fetch Initial Transactions
// //   socket.on("message", (data) => {
// //     console.log(data)
// //       setTransactions(data);
// //   });

// //   // Listen for New Transactions
// //   socket.on("transactionUpdate", (newTransaction) => {
// //       setTransactions(prev => [newTransaction, ...prev]);
// //   });

// //   return () => {
// //       // socket.disconnect();
// //   };
// // }, []);


// // const [user,setuser]=useState([])

//   // let ismount=true;


// let mounted=true;
// // useEffect(()=>{

// //     if(mounted){

// //       // console.log(id)
// //       // socket.on("connection",(user)=>{
// //       //   console.log(user.id)
// //       // })

// //       socket.on("message",async(data)=>{
// //         setuser(data)
        
        
        
// //       })
// //     }

// //     return()=>{
      
// //       mounted=false
// //     }

// //     },[])

// // useEffect(()=>{

// //     if(mounted){
  

// //   const man=async()=>{

// //     if(transaction){
// //       const find=await transaction.find(id=>{return id._id===idss})
// //       // console.log(find)
// //       // console.log(pr)
// //       const all=find.transaction.map(async(pr)=>{

// //           await disp(acct(pr.amount))
// //       })

// //       // await console.log(find.transaction)
// //     }
// //   } 
// //   man()
// // }
// //   return ()=>{
// //     mounted=false

// //   }

// // },[transaction])
// const socketRef = useRef(null); 
// const [transactions, setTransactions] = useState([]);


// useEffect(() => {
//   if (!socketRef.current) {
//     socketRef.current = io("http://localhost:4000");
//   }

//   const socket = socketRef.current;

//   // ✅ Remove existing listeners before adding new ones
//   socket.off("message").on("message", (data) => {
//     console.log("Received Transactions:", data);
//     setTransactions(data);
//   });

//   socket.off("transactionUpdate").on("transactionUpdate", (newTransaction) => {
//     console.log("New Transaction Received:", newTransaction);
//     setTransactions((prev) => [newTransaction, ...prev]);
//   });

//   return () => {
//     socket.off("message");
//     socket.off("transactionUpdate");
//   };
// }, []);

// // ✅ Ensure transactions update state only once
// useEffect(() => {
//   if (!transactions.length) return;

//   const processTransactions = async () => {
//     const userTransactions = transactions.find((t) => t._id === idss);
//     if (userTransactions) {
//       for (let tx of userTransactions.transaction) {
//         disp(acct(tx.amount)); // ✅ Ensures Redux updates properly
//       }
//     }
//   };

//   processTransactions();
// }, [transactions, idss, disp]);


// // const [user, setUser] = useState([]);
// // const mountedRef = useRef(true);

// // useEffect(() => {
// //   mountedRef.current = true;

// //   socket.on("message", (data) => {
// //     setUser((prev) => [...prev, data]); // Append new data instead of replacing
// //   });

// //   return () => {
// //     mountedRef.current = false;
// //     socket.off("message"); // Remove the event listener on cleanup
// //   };
// // }, []);

// // useEffect(() => {
// //   if (!mountedRef.current) return;

// //   const fetchTransactions = async () => {
// //     if (user.length > 0) {
// //       const findUser = user.find((item) => item._id === idss);
// //       if (findUser) {
// //     console.log(findUser)

// //         await Promise.all(
// //           findUser.transaction.map(async (pr) => {
// //             await disp(acct(pr.amount));
// //           })
// //         );
// //       }
// //     }
// //   };

// //   fetchTransactions();

// //   return () => {
// //     mountedRef.current = false;
// //   };
// // }, [user]);



// const nextSlide=()=>{
// setindex((prevIndex) => (prevIndex + 1) % arr.length);

// }
//     const [airtime,setairtime]=useState([
//       {
//       id:0,
//       airtime:50
//     },
//       {
//       id:1,
//       airtime:100
//     },
//       {
//       id:2,
//       airtime:200
//     },
//       {
//       id:3,
//       airtime:500
//     },
//       {
//       id:4,
//       airtime:1000
//     },
//       {
//       id:5,
//       airtime:2000
//     },
//   ])

//   if(isLoading){
//     contentss= <div className="loader_cen"> <div className='loader'></div></div>
//    }else if(isSuccess){
//     contentss=<Air_p index={index} phone={phone} change={change} contents={contents} arr={arr} price={price} click={click} airtime={airtime} mans={mans} name={name} open={open} show={show} sims={sims} setname={setname} />
//    }

//   return contentss
// }

// export default airtime

import React, { useState, useEffect, useRef } from 'react';
import { FaSimCard, FaCaretDown, FaCaretRight, FaCarSide, FaUser, FaTimes, FaWallet, FaUnlockAlt } from 'react-icons/fa';
import { io } from 'socket.io-client';
import { pricesss } from '../../features/logslice';
import mobile from '../../assets/images/9mobile.jpeg';
import glo from '../../assets/images/glo.jpeg';
import Airtel from '../../assets/images/Airtel.jpeg';
import mtn from '../../assets/images/mtn.jpeg';
import Usebuy from '../../hooks/Usebuy';
import Transaction_con from '../../hooks/transaction_con';
import { useSelector, useDispatch } from 'react-redux';
import { display, Balance, account } from '../../features/logslice';
import swal from 'sweetalert';
import S from '../../s';
import Air_p from './Air_p';
import { useGetpostQuery } from '../../features/appslice';
import UseAuth from '../../hooks/UseAuth';
import { accounts as acct,Accno } from '../../features/logslice';
import { id } from '../../features/logslice';
import a from '../transfer/note.mp3'


const airtime = () => {
  const socketRef = useRef(null); // ✅ Store the socket instance
  const { isLoading, isSuccess } = useGetpostQuery("post", {
    pollingInterval: 1500,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  const { id: idss } = UseAuth();
  let contentss;
  const ids = useSelector(id);
  const selects = useSelector(display);
  const disp = useDispatch();
  const { credit, setcredit, values } = Usebuy();
  const [open, setopen] = useState(false);
  const accounts = useSelector(account);
  const [opens, setopens] = useState(true);
  const audio=useRef(null)
  const [sims, setsims] = useState([
    { id: 0, name: "MTN", icon: mtn, checked: true },
    { id: 1, name: "Airtel", icon: Airtel, checked: false },
    { id: 2, name: "Glo", icon: glo, checked: false },
    { id: 3, name: "9mobile", icon: mobile, checked: false }
  ]);

  const [contents, setcontents] = useState('');
  const [phone, setphone] = useState('');
  const arr = [glo, mtn, mobile];

  const show = () => {
    setopen(prev => !prev);
  };

  const [all, setall] = useState(false);

  const change = (cards) => {
    setopens(prev => !prev);
    setcredit(cards);
  };

  const mans = accounts.reduce((sum, prices) => sum + prices, 0);
  const [details, setdetails] = useState('');
  const pay = () => {
    if (mans < credit.airtime || mans < price) {
      return swal({
        text: `Insufficient balance. You need NGN ${credit.airtime || price}.`,
        title: "No enough balance",
        icon: "error"
      });
    }

    setcontents(
      <main className='credit_alert2'>
        <div className="close">
          <FaTimes className='fatimes' onClick={close} />
        </div>
        <div className="locks">
          <div className="do"><FaUnlockAlt /></div>
          <br />
          <h5>Authentication</h5>
        </div>
        <div className="simm sl2"><S /></div>
      </main>
    );
  };

  const [price, setprice] = useState('');
  // const close = () => setopens(prev => !prev);
  const close = () => {
    setopens(false); // Explicitly set opens to false to close the modal
    setcontents(null); // Clear the contents
  };
  const click = () => {
    setopens(prev => !prev);
    setcredit({ airtime: price, phone });
    disp(pricesss({ price, phone }));
  };

  useEffect(() => {
    if (credit) {
            disp(Accno(credit.price||price));
      
      disp(pricesss({ credit: credit.airtime, phone:`${phone} ` }));
      disp(Balance(-credit.airtime));

      setcontents(opens ? (
        <main className='credit_alert'>
          <div className="close"><FaTimes className='fatimes' onClick={close} /></div>
          <h1>NGN{credit.airtime}</h1>
          <div className="simm sl"><p>Product Name</p><p>Airtime</p></div>
          <div className="simm sl"><p>Receipient Mobile</p><p>{phone}</p></div>
          <div className="simm sl"><p>Amount</p><p>{credit.airtime}</p></div>
          <hr />
          <div className="payment_met">
            <h3>Payment Method</h3>
            <div className="box_pay"><FaWallet className='fa_wa' /><p> Wallet (&#8358;{mans.toLocaleString()})</p></div>
          </div>
          <button className='btns_pay' onClick={pay}>Pay</button>
        </main>
      ) : <></>);
    }
  }, [credit, opens]);

  let ismounted = true;
  useEffect(() => {
    if (ismounted) {
      if (selects) setcontents(selects);
    }
    return () => {
      ismounted = false;
      setcontents('');
    };
  }, [selects]);

  const [name, setname] = useState('');
  const [index, setindex] = useState(0);

  useEffect(() => {
    setname(sims[0]);
  }, []);

  useEffect(() => {
  }, [name]);

  useEffect(() => {
    const clear = setInterval(() => {
      setindex(prevIndex => (prevIndex + 1) % arr.length);
    }, 2000);

    return () => clearInterval(clear);
  }, []);

  const prevSlide = () => {
    setindex(prevIndex => (prevIndex - 1 + arr.length) % arr.length);
  };

  const socket = useRef(null);
  const [transactions, setTransactions] = useState([]);
  let isMounted=true
     useEffect(() => {
        if(isMounted){
  
        const man=async()=>{
  
          if (!socket.current&&!audio.current) {
             audio.current=new Audio(a)
                  socket.current = io("http://localhost:4000");
                }
            
                const sock = socket.current;
            
                // ✅ Remove existing listeners before adding new ones
                socket.current.off("message").on("message", (data) => {
                  setTransactions(data);
                  // setfind(data)
                });
                socket.current.off("transactionUpdates").on("transactionUpdates",(datas)=>{
                  // toast(datas)
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
                  setTransactions(prev => {
                    const exists = prev.find(tx => tx._id === newTransaction._id);
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
        }, [idss]);
  useEffect(() => {
    if (!transactions.length) return;

    const processTransactions = async () => {
      const userTransactions = transactions.find(t => t._id === idss);
      if (userTransactions) {
        for (let tx of userTransactions.transaction) {
          disp(acct(tx.amount));
        }
      }
    };

    processTransactions();
  }, [transactions, idss, disp]);

  const nextSlide = () => {
    setindex(prevIndex => (prevIndex + 1) % arr.length);
  };

  const [airtime, setairtime] = useState([
    { id: 0, airtime: 50 }, { id: 1, airtime: 100 },
    { id: 2, airtime: 200 }, { id: 3, airtime: 500 },
    { id: 4, airtime: 1000 }, { id: 5, airtime: 2000 }
  ]);

  if (isLoading) {
    contentss = <div className="loader_cen"><div className='loader'></div></div>;
  } else if (isSuccess) {
    contentss = <Air_p {...{ index, phone, setphone, change, contents, arr, price, click, airtime, mans, name, open, show, sims, setname,setprice }} />;
  }

  return contentss;
};

export default airtime;
