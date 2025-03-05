// import React from 'react'
// import { useState,useEffect,useRef } from 'react'
// import {FaSimCard,FaCaretDown,FaCaretRight,FaCarSide,FaUser,FaTimes, FaWallet,FaUnlockAlt, FaNotEqual} from 'react-icons/fa'
// import { pricesss } from '../../features/logslice'
// import mobile from '../../assets/images/9mobile.jpeg'
// import glo from '../../assets/images/glo.jpeg'
// import Airtel from '../../assets/images/Airtel.jpeg'
// import mtn from '../../assets/images/mtn.jpeg'
// import Usebuy from '../../hooks/Usebuy'
// import Transaction_con from '../../hooks/transaction_con'
// import { useSelector } from 'react-redux'
// import { display } from '../../features/logslice'
// import { useDispatch } from 'react-redux'
// import { Balance } from '../../features/logslice'
// import { account as acc } from '../../features/logslice'
// import swal from 'sweetalert'
// import { useNavigate } from 'react-router-dom'
// import { disp } from '../../features/logslice'
// import { useGetpostQuery } from '../../features/appslice';
// import UseAuth from '../../hooks/UseAuth';
// import { io } from 'socket.io-client';
// import { accounts as acct,Accno } from '../../features/logslice';
// import S from '../../s'
// import { ToastContainer, toast } from 'react-toastify'
// import { act_nos } from '../../features/logslice'
// import { setide,ide } from '../../features/logslice'
// import a from "./note.mp3"

// const transfer = () => {
  
//   const noti=new Audio(a)

//   const socketRef = useRef(null); // ✅ Store the socket instance
//   const { data,isLoading, isSuccess } = useGetpostQuery("post", {
//     pollingInterval: 1500,
//     refetchOnFocus: true,
//     refetchOnMountOrArgChange: true
//   });


//   const { id: idss,username,account} = UseAuth();
//   const selects=useSelector(display)
//   const actm=useSelector(act_nos)
//   const si=useSelector(ide)
//   const accounts=useSelector(acc)
//   const {credit,setcredit,values}=Usebuy()
//   const [add,setadd]=useState('')
//   const [find,setfind]=useState([])
//   const [open,setopen]=useState(false)
//   const [open2,setopen2]=useState(true)
//   const [opens,setopens]=useState(true)
//   const dispatch=useDispatch()
  
//   const navigate=useNavigate()
// //   const [account,setaccount]=useState([100,200])
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
  
// //   const mans=(
// //     accounts.reduce((sum,prices)=>{
// //         return sum +prices
// //     })
// // )
// const [amount,setamount]=useState('')


// const mans = accounts.reduce((sum, prices) => sum + prices, 0);


// const man=()=>{
//   if(amount===""){
//     return toast({
//       text:`all field are required`,
//       title:"Error",
//       icon:"error"
//     })
// }
//   if(amount){
//     // setcredit("")
//     setadd(amount)
//     setcredit(Number(amount))
//   } 
// }


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
//   const [amt,setamt]=useState('')
//   const close2=()=>setopen2(prev=>!prev)
//   const close=()=>setopens(prev=>!prev)
  
  
//   const pay = () => {
//     if (mans < amount ) {
//       return swal({
//         text: `Insufficient balance. You need NGN ${amount}.`,
//         title: "No enough balance",
//         icon: "error"
//       });
//     }

//     setcontents( <main className='credit_alert22' >
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

//       setamount("")
//       setamt("")
//   } 

  
    
  

//   // reset the content of the alert Box
//   let ismounted=true
//       useEffect(()=>{
//         console.log(mans)
//         // dispatch(Balance(amount))
//         // dispatch(disp([]))
//         if(ismounted){

  
//           if(selects){
            
//             setcontents(selects)
//           }


//           console.log(1000000)
//         }
//         return()=>{
  
//           ismounted=false
//           setTimeout(() => {
//             // setamount('')
            
//             setcontents(null)
//           }, 10);
//           dispatch(disp(''))

//             // close2()
//             // setopen2(true)
//             // setinp(false)
//             // close()
          


        
//         }
//       },[selects,navigate])
   
//   const check=(e)=>setamount(e)

  
//   // const close=()=>setopen(prev=>!prev)

//   useEffect(()=>{
//     // man
//           // disp(pricesss({Data:credit.Data,credit:`${credit.Data} MB`,phone}))
//           if(amount.length){
//             console.log(actm)
//                   // disp(pricesss({ credit: amount, phone }));
                  
//                   dispatch(Accno(amt))
//             dispatch(pricesss({credit:`${amount}`,phone:amt}))
 
//             dispatch(Balance(amount))
 
            
//             // setaccount([...account,-credit.Data])
//           // setopens(prev=>!prev)
//       setcontents( opens?
//        <main className='credit_alert22' >
//                <div className="close"><FaTimes className='fatimes' onClick={close} /></div>
//                <h1>NGN{amount}</h1>
//                <div className="simm sl"><p>Product Name</p><p>Airtime</p></div>
//                <div className="simm sl"><p>Receipient Mobile</p><p>{amt}</p></div>
//                <div className="simm sl"><p>Amount</p><p>{amount}</p></div>
//                <hr />
//                <div className="payment_met">
//                  <h3>Payment Method</h3>
//                  <div className="box_pay"><FaWallet className='fa_wa' /><p> Wallet (&#8358;{mans.toLocaleString()})</p></div>
//                </div>
//                <button className='btns_pay' onClick={pay}>Pay</button>
//              </main>:
//     <></>)
//         }
      
//     },[credit,opens])
   

//   const [status,setstatus]=useState('')
//   const [name,setname]=useState('')
//   const [index,setindex]=useState(0)

//     const [inp,setinp]=useState(false);




// // const check_user=()=>{
// //   useEffect(()=>{
// //   if(amt.length){
// //     close2()
// //     const all_con=(
// //       inp?
// //         <div className='trans_re' >
// //       <div className="receipt_box" >
// //           <div className="refs">
// //             <h3 >Beneficiary account:</h3>
// //           </div>
// //           {/* <p className='h3'>suleiman kaita Yusuf</p>
// //           <p className='h3'>savings Account : 2212443212</p> */}

// //             <div className="transers_ac">

// //             <input type="number"
// //             className='transfer_inp'
// //             placeholder=''
// //             value={amount}
// //             onInput={(e)=>check(e.target.value)}
// //             id='Beneficiary account number'
// //             />
// //             <label className='labe' htmlFor="Beneficiary account number">Amounts</label>
// //             </div>


// //         </div>
// //           <button onClick={man}>Transfer</button>
// //           </div>:<></>
// //     )
    
// //     setname(all_con)
// //   }
// // },[inp,amount])

// // }


//   const shows=(
//     open2? 
//     (
//       <div className="confirm_rec">
//      <button onClick={() => {
//         if (amt.length > 9) {
//           setinp(prev => !prev);
//           close2();
//         } else {
//           toast('This field should be greater than 10 digits');
//         }
//       }} className='Confirm'>Confirm Receiver</button>
//     </div>
//     ):(<></>)
//   )

  
//   useEffect(()=>{

//     console.log(account)
//     setstatus('')

//   },[amt]) 

   
//     const socket = useRef(null);
//     const [transactions, setTransactions] = useState([]);
//     const [idee,setidee]=useState('')
    
//     let isMounted=true


//     useEffect(() => {
//       if( isMounted){
//         const man=async()=>{


//       if (!socket.current) {
//         socket.current = io("http://localhost:4000");
//       }
  
//       const sock = socket.current;
  
//       // ✅ Remove existing listeners before adding new ones
//       socket.current.off("message").on("message", (data) => {
//         console.log("Received Transactions:", data);
//         setTransactions(data);
//         setfind(data)
//       });
//       socket.current.off("transactionUpdates").on("transactionUpdates",(datas)=>{
//         // toast(datas)
//         console.log("pos"+datas)
//       })
      
//       socket.current.off("notify").on("notify",(datas)=>{
//         if(datas.id1===idss){
//           noti.play().catch((err) => console.log("Sound error:", err));
//           let man=`${datas.name} \n\r NGN${datas.amount} ${datas.time}`
//           toast(man)
//           // if (Notification.permission === "granted") {
//             new Notification("New Notification", { body: datas.amount});
//           // }
//         }
//         toast(null)
//       })

//       socket.current.off("transactionUpdate").on("transactionUpdate", (newTransaction) => {
//         console.log("New Transaction Received:", newTransaction);
//        setTransactions(prev => {
//   const exists = prev.some(tx => tx._id === newTransaction._id);
//   return exists ? prev : [newTransaction, ...prev];
// });

//         });
//       });
//     }
//     man()
//   }

  
//       return () => {
//         isMounted=false
//         console.log("mouted")
//         socket.current.off("message");
//         socket.current.off("transactionUpdate");
//         socket.current.off("transactionUpdates");
//         socket.current.off("notify");
//       };
//     }, [idss,data]);
// let ms;
  

  

// if (Notification.permission !== "granted") {
//   Notification.requestPermission();
// }
//     useEffect(() => {
//       if(isMounted){

//         if (!transactions.length) return;
        
//       const processTransactions = async () => {
//         const userTransactions = transactions.find(t => t._id === idss);
      

//         if (userTransactions) {
//           for (let tx of userTransactions.transaction) {
//             dispatch(acct(tx.amount));
//           }
//         }
//       };
      
//       processTransactions();
//     }
//     }, [transactions, idss, dispatch]);
    

 
// let search
// if(find){
//   search=find.filter(user=>{
//     return user.account_no===Number(amt)
// })
// }
//       useEffect(()=>{
//         if(search){
//           setidee(ms)
//           console.log("mans")
//         }
//   },[amt,search])
//     let mp;
//     let mp2;
//     if(search){

//       const al=search.map(user=> {
//         dispatch(setide(user._id))
        
//         mp2=user.account_no
//         mp=user.email?user.email.slice(0,user.email.indexOf("@")):<p>Not found</p>
//       })
//     }

//     useEffect(()=>{


//     //   if(amount=){
//     //     return toast({
//     //       text:`all field are required`,
//     //       title:"Error",
//     //       icon:"error"
//     //     })
//     // }

//     },[amount])

//   return (

// <section className="main">
//     <main className='all'>
      
//       <div className="transfers">
// <ToastContainer/>
//         <h1>Free Transfer for 3days</h1>

//           <div className="receipt_box">
//             <div className="refs">
//               <h3 >Transfer from:</h3>
//             </div>
//             <p className='h3'>{username.slice(0,username.indexOf("@"))}</p>
//             <p className='h3'>savings Account : {account}</p>

// {/* <div className="mas"> */}

//             {contents} 
// {/* </div> */}


//           </div>

//           <div className="receipt_box">
//             <div className="refs">
//               <h3 >Transfer To:</h3>
             
//             </div>
//             <div className="transers_ac">

//          <input type="number"
//           className='transfer_inp'
//           placeholder=''
//           value={amt}
//           onChange={(e)=>setamt(e.target.value)}
//           id='Beneficiary account number'
//           />
//           <label className='labe' htmlFor="Beneficiary account number">Beneficiary account number</label>
//             </div>

//       <p style={{textAlign:"center"}}>{status}</p>
//           </div>

//           {shows}

//             {
//               inp&&amt&&
//               <>
//               <div className='trans_re' >
//             <div className="receipt_box" >
//                 <div className="refs">
//                   <h3 >Beneficiary account:{mp2}</h3>
//                   <br />
//               <p className='h3'>{mp}</p>
//               <p className='h3'>savings Account</p>
//               <br />
//               <br />

//                 </div>
//                 {/* <p className='h3'>suleiman kaita Yusuf</p>
//                 <p className='h3'>savings Account : 2212443212</p> */}
      
//                   <div className="transers_ac" style={{transform:'translateY(18px)'}}>
      
//                   <input type="number"
//                   className='transfer_inp'
//                   placeholder=''
//                   value={amount}
//                   onInput={(e)=>check(e.target.value)}
//                   id='Beneficiary account number'
//                   />
//                   <label className='labe' htmlFor="Beneficiary account number">Amounts</label>
//                   </div>
      
      
//               </div>
//                 <button onClick={()=>{
//                      setadd(amount);
//                 setcredit(Number(amount));
//                 setopens(true);
//                 }}>Transfer</button>
//                 </div>
//                 </>
//             }
//       </div>
//             {/* {name} */}
// {/* 
//         <br /><br />
//           <div className="mn">
//                <img src={name.icon} width={60} height={50} className='sims_ra' /> 
//           <div style={{width:"20%",marginRight:30,height:"10px"}}>
//               {content} *
//           </div> 
//           {mans}


//          </div>
//            */}


//     </main>
//     </section>
//   )
// }

// export default transfer

// // import React, { useState, useEffect, useRef } from 'react';
// // import { FaSimCard, FaCaretDown, FaCaretRight, FaCarSide, FaUser, FaTimes, FaWallet, FaUnlockAlt, FaNotEqual } from 'react-icons/fa';
// // import { pricesss } from '../../features/logslice';
// // import mobile from '../../assets/images/9mobile.jpeg';
// // import glo from '../../assets/images/glo.jpeg';
// // import Airtel from '../../assets/images/Airtel.jpeg';
// // import mtn from '../../assets/images/mtn.jpeg';
// // import Usebuy from '../../hooks/Usebuy';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { display, Balance, account as acc, disp, accounts as acct, Accno, act_nos, setide, ide } from '../../features/logslice';
// // import swal from 'sweetalert';
// // import { useNavigate } from 'react-router-dom';
// // import { useGetpostQuery } from '../../features/appslice';
// // import UseAuth from '../../hooks/UseAuth';
// // import { io } from 'socket.io-client';
// // import S from '../../s';
// // import { ToastContainer, toast } from 'react-toastify';
// // import a from "./note.mp3";

// // const transfer = () => {
// //   const noti = new Audio(a);
// //   const socketRef = useRef(null);
// //   const { isLoading, isSuccess } = useGetpostQuery("post", {
// //     pollingInterval: 1500,
// //     refetchOnFocus: true,
// //     refetchOnMountOrArgChange: true
// //   });

// //   const { id: idss, username, account } = UseAuth();
// //   const selects = useSelector(display);
// //   const actm = useSelector(act_nos);
// //   const si = useSelector(ide);
// //   const accounts = useSelector(acc);
// //   const { credit, setcredit, values } = Usebuy();
// //   const [add, setadd] = useState('');
// //   const [find, setfind] = useState([]);
// //   const [open, setopen] = useState(false);
// //   const [open2, setopen2] = useState(true);
// //   const [opens, setopens] = useState(false); 
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [amount, setamount] = useState('');
// //   const mans = accounts.reduce((sum, prices) => sum + prices, 0);
// //   const [contents, setcontents] = useState('');
// //   const [phone, setphone] = useState('');
// //   const [all, setall] = useState(false);
// //   const [amt, setamt] = useState('');
// //   const [status, setstatus] = useState('');
// //   const [inp, setinp] = useState(false);
// //   const [transactions, setTransactions] = useState([]);
// //   const [idee, setidee] = useState('');

// //   const show = () => setopen(prev => !prev);
// //   const close2 = () => setopen2(prev => !prev);
// //   const close = () => setopens(false); 

// //   const pay = () => {
// //     if (mans < amount) {
// //       return swal({
// //         text: `Insufficient balance. You need NGN ${amount}.`,
// //         title: "No enough balance",
// //         icon: "error"
// //       });
// //     }

// //     setcontents(
// //       <main className='credit_alert22'>
// //         <div className="close">
// //           <FaTimes className='fatimes' onClick={close} />
// //         </div>
// //         <div className="locks">
// //           <div className="do">
// //             <FaUnlockAlt />
// //           </div>
// //           <br />
// //           <h5>Authentication </h5>
// //         </div>
// //         <div className="simm sl2">
// //           <S />
// //         </div>
// //       </main>
// //     );

// //     setamount('');
// //     setamt('');
// //   };

// //   const check = (e) => setamount(e);

// //   useEffect(() => {
// //     if (amount.length) {
// //       dispatch(Accno(amt));
// //       dispatch(pricesss({ credit: `${amount}`, phone: amt }));
// //       dispatch(Balance(amount));

// //       setcontents(
// //         opens ? (
// //           <main className='credit_alert22'>
// //             <div className="close">
// //               <FaTimes className='fatimes' onClick={close} />
// //             </div>
// //             <h1>NGN{amount}</h1>
// //             <div className="simm sl"><p>Product Name</p><p>Airtime</p></div>
// //             <div className="simm sl"><p>Recipient Mobile</p><p>{amt}</p></div>
// //             <div className="simm sl"><p>Amount</p><p>{amount}</p></div>
// //             <hr />
// //             <div className="payment_met">
// //               <h3>Payment Method</h3>
// //               <div className="box_pay">
// //                 <FaWallet className='fa_wa' /><p> Wallet (&#8358;{mans.toLocaleString()})</p>
// //               </div>
// //             </div>
// //             <button className='btns_pay' onClick={pay}>Pay</button>
// //           </main>
// //         ) : <></>
// //       );
// //     }
// //   }, [credit, opens]);

// //   const shows = open2 ? (
// //     <div className="confirm_rec">
// //       <button onClick={() => {
// //         if (amt.length > 9) {
// //           setinp(prev => !prev);
// //           close2();
// //         } else {
// //           toast('This field should be greater than 10 digits');
// //         }
// //       }} className='Confirm'>Confirm Receiver</button>
// //     </div>
// //   ) : <></>;

// //   useEffect(() => {
// //     console.log(account);
// //     setstatus('');
// //   }, [amt]);

// //   return (
// //     <section className="main">
// //       <main className='all'>
// //         <div className="transfers">
// //           <ToastContainer />
// //           <h1>Free Transfer for 3 days</h1>

// //           <div className="receipt_box">
// //             <div className="refs">
// //               <h3>Transfer from:</h3>
// //             </div>
// //             <p className='h3'>{username.slice(0, username.indexOf("@"))}</p>
// //             <p className='h3'>Savings Account: {account}</p>
// //             {contents}
// //           </div>

// //           <div className="receipt_box">
// //             <div className="refs">
// //               <h3>Transfer To:</h3>
// //             </div>
// //             <div className="transers_ac">
// //               <input type="number"
// //                 className='transfer_inp'
// //                 placeholder=''
// //                 value={amt}
// //                 onChange={(e) => setamt(e.target.value)}
// //                 id='Beneficiary account number'
// //               />
// //               <label className='labe' htmlFor="Beneficiary account number">Beneficiary account number</label>
// //             </div>
// //             <p style={{ textAlign: "center" }}>{status}</p>
// //           </div>

// //           {shows}

// //           {inp && amt && (
// //             <div className='trans_re'>
// //               <div className="receipt_box">
// //                 <div className="refs">
// //                   <h3>Beneficiary Account:</h3>
// //                   <br />
// //                   <p className='h3'>{amt}</p>
// //                   <p className='h3'>Savings Account</p>
// //                 </div>
// //                 <div className="transers_ac">
// //                   <input type="number"
// //                     className='transfer_inp'
// //                     placeholder=''
// //                     value={amount}
// //                     onInput={(e) => check(e.target.value)}
// //                     id='Beneficiary account number'
// //                   />
// //                   <label className='labe' htmlFor="Beneficiary account number">Amount</label>
// //                 </div>
// //               </div>
// //               <button onClick={() => {
// //                 setadd(amount);
// //                 setcredit(Number(amount));
// //                 setopens(true);
// //               }}>Transfer</button>
// //             </div>
// //           )}
// //         </div>
// //       </main>
// //     </section>
// //   );
// // }

// // export default transfer;


import { useState, useEffect, useRef } from 'react';
import { FaSimCard, FaCaretDown, FaCaretRight, FaCarSide, FaUser, FaTimes, FaWallet, FaUnlockAlt, FaNotEqual } from 'react-icons/fa';
import { pricesss } from '../../features/logslice';
import mobile from '../../assets/images/9mobile.jpeg';
import glo from '../../assets/images/glo.jpeg';
import Airtel from '../../assets/images/Airtel.jpeg';
import mtn from '../../assets/images/mtn.jpeg';
import Usebuy from '../../hooks/Usebuy';
import Transaction_con from '../../hooks/transaction_con';
import { useSelector } from 'react-redux';
import { display } from '../../features/logslice';
import { useDispatch } from 'react-redux';
import { Balance } from '../../features/logslice';
import { account as acc } from '../../features/logslice';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { disp } from '../../features/logslice';
import { useGetpostQuery } from '../../features/appslice';
import UseAuth from '../../hooks/UseAuth';
import { io } from 'socket.io-client';
import { accounts as acct, Accno } from '../../features/logslice';
import S from '../../s';
import { ToastContainer, toast } from 'react-toastify';
import { act_nos } from '../../features/logslice';
import { setide, ide } from '../../features/logslice';
import a from './note.mp3';

const Transfer = () => {
  const noti = new Audio(a);

  const { data, isLoading, isSuccess } = useGetpostQuery('post', {
    pollingInterval: 1500,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  const { id: idss, username, account } = UseAuth();
  const selects = useSelector(display);
  const actm = useSelector(act_nos);
  const si = useSelector(ide);
  const accounts = useSelector(acc);
  const { credit, setcredit, values } = Usebuy();
  const [add, setadd] = useState('');
  const [find, setfind] = useState([]);
  const [open, setopen] = useState(false);
  const [open2, setopen2] = useState(true);
  const [opens, setopens] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  //   const [account,setaccount]=useState([100,200])
  const [sims, setsims] = useState([
    {
      id: 0,
      name: 'MTN',
      icon: mtn,
      checked: true,
    },
    {
      id: 1,
      name: 'Airtel',
      icon: Airtel,
      checked: false,
    },
    {
      id: 2,
      name: 'Glo',
      icon: glo,
      checked: false,
    },
    {
      id: 3,
      name: '9mobile',
      icon: mobile,
      checked: false,
    },
  ]);

  //   const mans=(
  //     accounts.reduce((sum,prices)=>{
  //         return sum +prices
  //     })
  // )
  const [amount, setamount] = useState('');

  const mans = accounts.reduce((sum, prices) => sum + prices, 0);

  const man = () => {
    if (amount === '') {
      return toast({
        text: `all field are required`,
        title: 'Error',
        icon: 'error',
      });
    }
    if (amount) {
      // setcredit("")
      setadd(amount);
      setcredit(Number(amount));
    }
  };

  const [contents, setcontents] = useState('');
  const [phone, setphone] = useState('');

  const arr = [glo, mtn, mobile];

  const show = () => {
    setopen((prev) => !prev);
  };
  const [all, setall] = useState(false);

  const change = (cards) => {
    setopens((prev) => !prev);
    setcredit(cards);
  };
  const [amt, setamt] = useState('');
  const close2 = () => setopen2((prev) => !prev);
  const close = () => {
    setopens(false); // Explicitly set opens to false to close the modal
    setcontents(null); // Clear the contents
  };

  const pay = () => {
    if (mans < amount) {
      return swal({
        text: `Insufficient balance. You need NGN ${amount}.`,
        title: 'No enough balance',
        icon: 'error',
      });
    }

    setcontents(
      <main className="credit_alert22">
        <div className="close">
          <FaTimes className="fatimes" onClick={close} />
        </div>

        <div className="locks">
          <div className="do">
            <FaUnlockAlt />
          </div>
          <br />
          <h5>Authentication </h5>

          {/* <span style={{fontSize:17}}>Pin</span> */}
        </div>

        <div className="simm sl2">
          <S />
        </div>
      </main>
    );

    setamount('');
    setamt('');
  };

  // reset the content of the alert Box
  let ismounted = true;
  useEffect(() => {
    // dispatch(Balance(amount))
    // dispatch(disp([]))
    if (ismounted) {
      if (selects) {
        setcontents(selects);
      }

    }
    return () => {
      ismounted = false;
      setTimeout(() => {
        // setamount('')

        setcontents(null);
      }, 10);
      dispatch(disp(''));

      // close2()
      // setopen2(true)
      // setinp(false)
      // close()
    };
  }, [selects, navigate]);

  const check = (e) => setamount(e);

  // const close=()=>setopen(prev=>!prev)

  useEffect(() => {
    // man
    // disp(pricesss({Data:credit.Data,credit:`${credit.Data} MB`,phone}))
    if (amount.length) {
      // disp(pricesss({ credit: amount, phone }));

      dispatch(Accno(amt));

      dispatch(pricesss({ credit: `${amount}`, phone: `${amt}` }));

      dispatch(Balance(amount));

      // setaccount([...account,-credit.Data])
      // setopens(prev=>!prev)
      setcontents(
        opens ? (
          <main className="credit_alert22">
            <div className="close">
              <FaTimes className="fatimes" onClick={close} />
            </div>
            <h1>NGN{amount}</h1>
            <div className="simm sl">
              <p>Product Name</p>
              <p>Airtime</p>
            </div>
            <div className="simm sl">
              <p>Receipient Mobile</p>
              <p>{amt}</p>
            </div>
            <div className="simm sl">
              <p>Amount</p>
              <p>{amount}</p>
            </div>
            <hr />
            <div className="payment_met">
              <h3>Payment Method</h3>
              <div className="box_pay">
                <FaWallet className="fa_wa" />
                <p> Wallet (&#8358;{mans.toLocaleString()})</p>
              </div>
            </div>
            <button className="btns_pay" onClick={pay}>
              Pay
            </button>
          </main>
        ) : (
          <></>
        )
      );
    }
  }, [credit, opens,dispatch]);

  const [status, setstatus] = useState('');
  const [name, setname] = useState('');
  const [index, setindex] = useState(0);

  const [inp, setinp] = useState(false);

  // const check_user=()=>{
  //   useEffect(()=>{
  //   if(amt.length){
  //     close2()
  //     const all_con=(
  //       inp?
  //         <div className='trans_re' >
  //       <div className="receipt_box" >
  //           <div className="refs">
  //             <h3 >Beneficiary account:</h3>
  //           </div>
  //           {/* <p className='h3'>suleiman kaita Yusuf</p>
  //           <p className='h3'>savings Account : 2212443212</p> */}

  //             <div className="transers_ac">

  //             <input type="number"
  //             className='transfer_inp'
  //             placeholder=''
  //             value={amount}
  //             onInput={(e)=>check(e.target.value)}
  //             id='Beneficiary account number'
  //             />
  //             <label className='labe' htmlFor="Beneficiary account number">Amounts</label>
  //             </div>

  //         </div>
  //           <button onClick={man}>Transfer</button>
  //           </div>:<></>
  //     )

  //     setname(all_con)
  //   }
  // },[inp,amount])

  // }

  const shows = open2 ? (
    <div className="confirm_rec">
      <button
        onClick={() => {
          if (amt.length > 9) {
            setinp((prev) => !prev);
            close2();
          } else {
            toast('This field should be greater than 10 digits');
          }
        }}
        className="Confirm"
      >
        Confirm Receiver
      </button>
    </div>
  ) : (
    <></>
  );

  useEffect(() => {
    setstatus('');
  }, [amt]);

  const socket = useRef(null);
  const [transactions, setTransactions] = useState([]);
  const [idee, setidee] = useState('');

  let isMounted = true;

  useEffect(() => {
    if (isMounted) {
      const man = async () => {
        if (!socket.current) {
          socket.current = io('https://ict-tr8s.onrender.com');
        }

        const sock = socket.current;

        // ✅ Remove existing listeners before adding new ones
        socket.current.off('message').on('message', (data) => {
          setTransactions(data);
          setfind(data);
        });
        socket.current.off('transactionUpdates').on('transactionUpdates', (datas) => {
          toast(datas)
        });

        socket.current.off('notify').on('notify', (datas) => {
          if (datas.id1 === idss) {
            noti.play().catch((err) => console.log('Sound error:', err));
            let man = `${datas.name} \n\r NGN${datas.amount} ${datas.time}`;
            toast(man);
            // if (Notification.permission === "granted") {
            new Notification('New Notification', { body: datas.amount });
            // }
          }
          toast(null);
        });

        socket.current.off('transactionUpdate').on('transactionUpdate', (newTransaction) => {
          setTransactions((prev) => {
            const exists = prev.some((tx) => tx._id === newTransaction._id);
            return exists ? prev : [newTransaction, ...prev];
          });
        });
      };
      man();
    }

    return () => {
      isMounted = false;
      socket.current.off('message');
      socket.current.off('transactionUpdate');
      socket.current.off('transactionUpdates');
      socket.current.off('notify');
    };
  }, [idss, data]);
  let ms;

  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
  useEffect(() => {
    if (isMounted) {
      if (!transactions.length) return;

      const processTransactions = async () => {
        const userTransactions = transactions.find((t) => t._id === idss);

        if (userTransactions) {
          for (let tx of userTransactions.transaction) {
            dispatch(acct(tx.amount));
          }
        }
      };

      processTransactions();
    }
  }, [transactions, idss, dispatch]);

  let search;
  if (find) {
    search = find.filter((user) => {
      return user.account_no === Number(amt);
    });
  }
  useEffect(() => {
    if (search) {
      setidee(ms);
    }
  }, [amt, search]);
  let mp;
  let mp2;
  if (search) {
    const al = search.map((user) => {
      dispatch(setide(user._id));

      mp2 = user.account_no;
      mp = user.email ? user.email.slice(0, user.email.indexOf('@')) : <p>Not found</p>;
    });
  }

  useEffect(() => {
    //   if(amount=){
    //     return toast({
    //       text:`all field are required`,
    //       title:"Error",
    //       icon:"error"
    //     })
    // }
  }, [amount]);

  return (
    <section className="main">
      <main className="all">
        <div className="transfers">
          <ToastContainer />
          <h1>Free Transfer for 3days</h1>

          <div className="receipt_box">
            <div className="refs">
              <h3>Transfer from:</h3>
            </div>
            <p className="h3">{username.slice(0, username.indexOf('@'))}</p>
            <p className="h3">savings Account : {account}</p>

            {/* <div className="mas"> */}

            {contents}
            {/* </div> */}
          </div>

          <div className="receipt_box">
            <div className="refs">
              <h3>Transfer To:</h3>
            </div>
            <div className="transers_ac">
              <input
                type="number"
                className="transfer_inp"
                placeholder=""
                value={amt}
                onChange={(e) => setamt(e.target.value)}
                id="Beneficiary account number"
              />
              <label className="labe" htmlFor="Beneficiary account number">
                Beneficiary account number
              </label>
            </div>

            <p style={{ textAlign: 'center' }}>{status}</p>
          </div>

          {shows}

          {inp && amt && (
            <>
              <div className="trans_re">
                <div className="receipt_box">
                  <div className="refs">
                    <h3>Beneficiary account:{mp2}</h3>
                    <br />
                    <p className="h3">{mp}</p>
                    <p className="h3">savings Account</p>
                    <br />
                    <br />
                  </div>
                  {/* <p className='h3'>suleiman kaita Yusuf</p>
                <p className='h3'>savings Account : 2212443212</p> */}

                  <div className="transers_ac" style={{ transform: 'translateY(18px)' }}>
                    <input
                      type="number"
                      className="transfer_inp"
                      placeholder=""
                      value={amount}
                      onInput={(e) => check(e.target.value)}
                      id="Beneficiary account number"
                    />
                    <label className="labe" htmlFor="Beneficiary account number">
                      Amounts
                    </label>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setadd(amount);
                    setcredit(Number(amount));
                    setopens(true);
                  }}
                >
                  Transfer
                </button>
              </div>
            </>
          )}
        </div>
        {/* {name} */}
        {/* 
        <br /><br />
          <div className="mn">
               <img src={name.icon} width={60} height={50} className='sims_ra' /> 
          <div style={{width:"20%",marginRight:30,height:"10px"}}>
              {content} *
          </div> 
          {mans}


         </div>
           */}
      </main>
    </section>
  );
};

export default Transfer;