
import React, { useState, useEffect, useRef } from 'react';
import a from '../transfer/note.mp3';
import { id, accounts as acct, Accno, display,pricesss, Balance, account } from '../../features/logslice';
import S from '../../s';
import swal from 'sweetalert';
import { useSelector, useDispatch } from 'react-redux';
import UseAuth from '../../hooks/UseAuth';
import { FaMoneyBillAlt, FaCoins, FaShieldAlt, FaTimes, FaWallet, FaUnlockAlt } from 'react-icons/fa';
import { io } from 'socket.io-client';
import Usebuy from '../../hooks/Usebuy';
import { toast } from 'react-toastify';
const card = () => {


      const { id: userId, } = UseAuth();
      const ids = useSelector(id);
      const selects = useSelector(display);
          const disp=useDispatch()
          const dispatch=useDispatch()
      
      const { credit, setcredit, values } = Usebuy();
      const [open, setopen] = useState(false);
      const accounts = useSelector(account);
      const [opens, setopens] = useState(true);
      const audio = useRef(new Audio(a));
      const socket = useRef(null);
    
      const [contents, setcontents] = useState('');
      const [phone, setphone] = useState('');
      const [transactions, setTransactions] = useState([]);
    
      const show = () => setopen(prev => !prev);
      
      const change = (cards) => {
        setopens(prev => !prev);
        setcredit(cards);
      };
    
      const totalBalance = accounts.reduce((sum, prices) => sum + prices, 0);
    
      const pay = () => {

        if (totalBalance < 1000) {
          return swal({
            text: `Insufficient balance. You need NGN ${credit.Data}.`,
            title: "No enough balance",
            icon: "error"
          });
        }
        setcontents(
          <main className='credit_alert23' >
            <div className="close"><FaTimes className='fatimes' onClick={close} /></div>
            <div className="locks">
              <div className="do"><FaUnlockAlt /></div>
              <br />
              <h5>Authentication</h5>
            </div>
            <div className="simm sl2"><S /></div>
          </main>
        );
      };
    
      useEffect(() => {
        if (credit) {
          //  disp(Balance(-credit.Data))
                            disp(pricesss({ credit: 1000, phone:`You requested new card and You will receive it soon ` }));
                      
          setcontents(opens ? (
            <main className='credit_alert'>
              <div className="close"><FaTimes className='fatimes' onClick={close} /></div>
              <h1>NGN{credit.airtime}</h1>
              <div className="simm sl"><p>Product Name</p><p>Card</p></div>
              <div className="simm sl"><p>Recipient Mobile</p><p>{phone}</p></div>
              <div className="simm sl"><p>Amount</p><p>{credit.airtime}</p></div>
              <hr />
              <div className="payment_met">
                <h3>Payment Method</h3>
                <div className="box_pay"><FaWallet className='fa_wa' /><p> Wallet (&#8358;{totalBalance.toLocaleString()})</p></div>
              </div>
              <button className='btns_pay' onClick={pay}>Pay</button>
            </main>
          ) : null);
        }
      }, [credit, opens]);
    
      const close = () => {
        setopens(false);
        setcontents(null);
        setcredit("");
      };
      let ismounted;

        useEffect(()=>{
            if(ismounted){
      
              if(selects){
                
                setcontents(selects)
              }
            }
            return()=>{
      
              ismounted=false
              setcontents('')
            
            }
          },[selects])
       
 let isMounted=true
      
    
      useEffect(() => {
        if(isMounted){

        if (!socket.current) {
          socket.current = io("https://ict-tr8s.onrender.com");
          
      
        }
        socket.current.on("message", (data) => {
          setTransactions(data);
        });
  
        socket.current.on("transactionUpdates", (datas) => {
        });
  
        socket.current.on("notify", (datas) => {
          if (datas.id1 === ids) {
            audio.current.play().catch((err) => console.log("Sound error:", err));
            let message = `${datas.name}\n\r NGN${datas.amount} ${datas.time}`;
            toast(message);
            new Notification("New Notification", { body: datas.amount });
          }
        });
  
        socket.current.on("transactionUpdate", (newTransaction) => {
          setTransactions(prev => {
            const exists = prev.find(tx => tx._id === newTransaction._id);
            return exists ? prev : [newTransaction, ...prev];
          });
        });
      }
        return () => {
          isMounted=false

          if (socket.current) {
            socket.current.off("message");
            socket.current.off("transactionUpdate");
            socket.current.off("transactionUpdates");
            socket.current.off("notify");
          }
        };
      }, [userId]);
    
      useEffect(() => {
        if (!transactions.length) return;
    
        const processTransactions = async () => {
          const userTransactions = transactions.find(t => t._id === userId);
          if (userTransactions) {
            userTransactions.transaction.forEach(tx => {
              dispatch(acct(tx.amount));
            });
          }
        };
    
        processTransactions();
      }, [transactions, userId, dispatch]);
    
  return (
    <div className="main">
    <main className='all card_sec'>
        <div className="cards" >
            <div className="card_head">
                <h2>debit</h2>
                <h1>KS <span className="dot">.</span></h1>
            </div>
            {/* <div className="k" >
    <div className="k2" style={{backgroundImage:`url(${K})`}}> */}

    {/* </div> */}
            {/* </div> */}
            {/* <img src={K} alt="" width={300} height={100} /> */}
            <div className="sim">
                <div className="sim_con">
                </div>
            <span>|||</span>
            </div>
            
            <div className="con_h1">

              <h2>*****</h2>
            </div>
            <div className="buble_con">
              <div className="buble"></div>
            </div>
        </div>
        <div className="mkq">

{contents}
</div>

        <div className="banner2">
            {/* <div className="max"> */}
        {/* < FaUniversity className='icon'/> */}

                    <div className="max" >
        <FaMoneyBillAlt   className='icon'/>
        <br />
        
        <h3>Financial Services</h3>
           <br />
          <p>Financial services include banking, investments, insurance, and other economic services that manage money.</p>
                    </div>
                    
                    <div className="max" >
        <FaCoins   className='icon'/>
        <br />

        <h3 style={{fontSize:"15px"}}>Secure Transactions</h3>
           <br />
        <p>Secure transactions protect financial and personal data from fraud, theft, and cyberattacks</p>
                    </div>
                    <div className="max" >
        <FaShieldAlt   className='icon'/>
        <br />
        <h3 style={{fontSize:15}}>Fraud Protection</h3>
           <br />
           <p style={{fontSize:15}}>Fraud protection involves strategies and technologies to detect and prevent financial fraud.</p>
                    </div>
        </div>
        
        <div className="banner_2">
            {/* <div className="max"> */}
        {/* < FaUniversity className='icon'/> */}

                    <div className="max_2" >
        <FaMoneyBillAlt   className='icon'/>
        <p style={{fontSize:12}}>Fraud protection involves strategies and technologies to detect and prevent financial fraud.</p>
                    </div>
                    
                    <div className="max_2" >
        <FaCoins   className='icon'/>
          <p style={{fontSize:"12px"}}>Financial services include banking, investments, insurance, and other economic services that manage money.</p>
                    </div>
                    <div className="max_2" >
        <FaShieldAlt   className='icon'/>
        <p style={{fontSize:"12px"}}>Secure transactions protect financial and personal data from fraud, theft, and cyberattacks</p>
                    </div>
        </div>
        <div className="get_start">
          <button onClick={() => setcredit(100)}>Request New Card</button>

          {/* <button onClick={()=>setopens(true)}>Request new card</button> */}
        </div>

    </main>
    </div>
  )
}

export default card


// import React, { useState, useEffect, useRef } from 'react';
// import K from "../../assets/images/k2.jpg";
// import a from '../transfer/note.mp3';
// import { id, accounts as acct, Accno, display, Balance, account } from '../../features/logslice';
// import S from '../../s';
// import swal from 'sweetalert';
// import { useSelector, useDispatch } from 'react-redux';
// import UseAuth from '../../hooks/UseAuth';
// import { FaMoneyBillAlt, FaCoins, FaShieldAlt, FaTimes, FaWallet, FaUnlockAlt } from 'react-icons/fa';
// import { io } from 'socket.io-client';
// import Usebuy from '../../hooks/Usebuy';
// import { toast } from 'react-toastify';

// const Card = () => {
//   const { id: userId } = UseAuth();
//   const ids = useSelector(id);
//   const selects = useSelector(display);
//   const dispatch = useDispatch();
//   const { credit, setcredit, values } = Usebuy();
//   const [open, setopen] = useState(false);
//   const accounts = useSelector(account);
//   const [opens, setopens] = useState(true);
//   const audio = useRef(new Audio(a));
//   const socket = useRef(null);

//   const [contents, setcontents] = useState('');
//   const [phone, setphone] = useState('');
//   const [transactions, setTransactions] = useState([]);

//   const show = () => setopen(prev => !prev);
//   const change = (cards) => {
//     setopens(prev => !prev);
//     setcredit(cards);
//   };

//   const totalBalance = accounts.reduce((sum, prices) => sum + prices, 0);

//   const pay = () => {
//     setcontents(
//       <main className='credit_alert23' >
//         <div className="close"><FaTimes className='fatimes' onClick={close} /></div>
//         <div className="locks">
//           <div className="do"><FaUnlockAlt /></div>
//           <br />
//           <h5>Authentication</h5>
//         </div>
//         <div className="simm sl2"><S /></div>
//       </main>
//     );
//   };

//   useEffect(() => {
//     if (credit) {
//       setcontents(opens ? (
//         <main className='credit_alert'>
//           <div className="close"><FaTimes className='fatimes' onClick={close} /></div>
//           <h1>NGN{credit.airtime}</h1>
//           <div className="simm sl"><p>Product Name</p><p>Card</p></div>
//           <div className="simm sl"><p>Recipient Mobile</p><p>{phone}</p></div>
//           <div className="simm sl"><p>Amount</p><p>{credit.airtime}</p></div>
//           <hr />
//           <div className="payment_met">
//             <h3>Payment Method</h3>
//             <div className="box_pay"><FaWallet className='fa_wa' /><p> Wallet (&#8358;{totalBalance.toLocaleString()})</p></div>
//           </div>
//           <button className='btns_pay' onClick={pay}>Pay</button>
//         </main>
//       ) : null);
//     }
//   }, [credit, opens]);

//   const close = () => {
//     setopens(false);
//     setcontents(null);
//     setcredit(null);
//   };

//   useEffect(() => {
//     if (!socket.current) {
//       socket.current = io("http://localhost:4000");
      
//       socket.current.on("message", (data) => {
//         console.log("Received Transactions:", data);
//         setTransactions(data);
//       });

//       socket.current.on("transactionUpdates", (datas) => {
//         console.log("POS Update:", datas);
//       });

//       socket.current.on("notify", (datas) => {
//         if (datas.id1 === ids) {
//           audio.current.play().catch((err) => console.log("Sound error:", err));
//           let message = `${datas.name}\n\r NGN${datas.amount} ${datas.time}`;
//           toast(message);
//           new Notification("New Notification", { body: datas.amount });
//         }
//       });

//       socket.current.on("transactionUpdate", (newTransaction) => {
//         console.log("New Transaction Received:", newTransaction);
//         setTransactions(prev => {
//           const exists = prev.some(tx => tx._id === newTransaction._id);
//           return exists ? prev : [newTransaction, ...prev];
//         });
//       });
//     }

//     return () => {
//       if (socket.current) {
//         socket.current.off("message");
//         socket.current.off("transactionUpdate");
//         socket.current.off("transactionUpdates");
//         socket.current.off("notify");
//       }
//     };
//   }, [userId]);

//   useEffect(() => {
//     if (!transactions.length) return;

//     const processTransactions = async () => {
//       const userTransactions = transactions.find(t => t._id === userId);
//       if (userTransactions) {
//         userTransactions.transaction.forEach(tx => {
//           dispatch(acct(tx.amount));
//         });
//       }
//     };

//     processTransactions();
//   }, [transactions, userId, dispatch]);

//   return (
//     <div className="main">
//       <main className='all card_sec'>
//         <div className="cards">
//           <div className="card_head">
//             <h2>Debit</h2>
//             <h1>KS <span className="dot">.</span></h1>
//           </div>
//           <div className="sim">
//             <div className="sim_con"></div>
//             <span>|||</span>
//           </div>
//           <div className="con_h1">
//             <h2>*****</h2>
//           </div>
//           <div className="buble_con">
//             <div className="buble"></div>
//           </div>
//         </div>

//         <div className="mkq">
//           {contents}
//         </div>

//         <div className="banner2">
//           <div className="max"><FaMoneyBillAlt className='icon' /><br />
//           <h3>Financial Services</h3>
//           <br />
//           <p>Financial services include banking, investments, insurance, and other economic services that manage money.</p>
//           </div>
//           <div className="max"><FaCoins className='icon' /><br /><h3>Secure Transactions</h3>
//           <br />
//           <p>Secure transactions protect financial and personal data from fraud, theft, and cyberattacks</p>
//           </div>
//           <div className="max"><FaShieldAlt className='icon' /><br /><h3>Fraud Protection</h3>
//           <br />
//           <p>Fraud protection involves strategies and technologies to detect and prevent financial fraud.</p>
          
//           </div>
//         </div>

//         <div className="banner_2">
//           <div className="max_2"><FaMoneyBillAlt className='icon' /><br /><h3>Financial Services</h3>
//           <br />
//           <p>Financial services include banking, investments, insurance, and other economic services that manage money.</p></div>
//           <div className="max_2"><FaCoins className='icon' /><br /><h3 style={{fontSize:"15px"}}>Secure Transactions</h3>
//           <br />
//           <p>Secure transactions protect financial and personal data from fraud, theft, and cyberattacks</p></div>
//           <div className="max_2"><FaShieldAlt className='icon' /><br /><h3 style={{fontSize:15}}>Fraud Protection</h3>
//           <br />
//           <p style={{fontSize:15}}>Fraud protection involves strategies and technologies to detect and prevent financial fraud.</p></div>
//         </div>

//         <div className="get_start">
//           <button onClick={() => setcredit(1000)}>Request New Card</button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Card;
