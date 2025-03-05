import React from 'react'
import { useState,useEffect,useRef } from 'react'
import {FaSimCard,FaCaretDown,FaCaretRight,FaCarSide,FaUser,FaTimes, FaWallet,FaUnlockAlt} from 'react-icons/fa'
import { pricesss } from '../../features/logslice'
import mobile from '../../assets/images/9mobile.jpeg'
import glo from '../../assets/images/glo.jpeg'
import Airtel from '../../assets/images/Airtel.jpeg'
import mtn from '../../assets/images/mtn.jpeg'
import Usebuy from '../../hooks/Usebuy'
import Transaction_con from '../../hooks/transaction_con'
import { useSelector } from 'react-redux'
import { display } from '../../features/logslice'
import { useDispatch } from 'react-redux'
import { Balance } from '../../features/logslice'
import { account } from '../../features/logslice'
import swal from 'sweetalert'
import { useGetpostQuery } from '../../features/appslice';
import UseAuth from '../../hooks/UseAuth';
import { accounts as acct,Accno  } from '../../features/logslice';
import S from '../../s'
import a from '../transfer/note.mp3'

import { io } from 'socket.io-client'
const Data = () => {

    const socketRef = useRef(null); // ✅ Store the socket instance
    const { isLoading, isSuccess } = useGetpostQuery("post", {
      pollingInterval: 1500,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true
    });
  
  const selects=useSelector(display)
  const accounts=useSelector(account)
  const {credit,setcredit,values}=Usebuy()
  const [open,setopen]=useState(false)
  const [opens,setopens]=useState(true)
  const disp=useDispatch()
  const { id: idss } = UseAuth();
//   const [account,setaccount]=useState([100,200])
  const [sims,setsims]=useState([
    
    {
      id:0,
      name:"MTN",
      icon:mtn,
      checked:true
    },
    {
      id:1,
      name:"Airtel",
      icon:Airtel,
      checked:false

    },
    {
      id:2,
      name:"Glo",
      icon:glo,
      checked:false

    },
    {
      id:3,
      name:"9mobile",
      icon:mobile,
      checked:false

    },
  ])
  

  
    const [contents,setcontents]=useState('')
    const [phone,setphone]=useState('')

    const arr=[glo,mtn,mobile]

    const show = () => {
      setopen(prev => !prev);
    };
  
  const [all,setall]=useState(false)
    
  const change=(cards)=>{
    setopens(prev=>!prev)
    setcredit(cards)
    

  }
  const [amt,setamt]=useState('')
  
  
  // const pay=()=>{
  //   if(mans<credit.Data) {
  //       return swal({
  //         text:`Insufficient balance in the selected accout to proceed.\n You need NGN ${credit.Data} in your account`,
  //         title:"No enough balance",
  //         icon:"error"
  //       })
  //       //  alert("Insubficient Funds")
  //       }

  const mans = accounts.reduce((sum, prices) => sum + prices, 0);
  const [details, setdetails] = useState('');
  const pay = () => {
    if (mans < credit.Data) {
      return swal({
        text: `Insufficient balance. You need NGN ${credit.Data }.`,
        title: "No enough balance",
        icon: "error"
      });
    }
    setcontents( <main className='credit_alert2' >
      <div className="close">
        <FaTimes className='fatimes' onClick={close}/>
        </div>
     
        <div className="locks">
     <div className="do">
     <FaUnlockAlt/>
     </div>
     <br />
     <h5>Authentication </h5>

      {/* <span style={{fontSize:17}}>Pin</span> */}
        </div>

     <div  className="simm sl2">
      <S/>
     
     </div>

  </main>)
  
  }

  // const close=()=>setopens(prev=>!prev)
  const close = () => {
    setopens(false); // Explicitly set opens to false to close the modal
    setcontents(null); // Clear the contents
  };
    
  
  useEffect(()=>{
          disp(pricesss({Data:credit.Data,credit:`${credit.Data} MB`,phone:`data ${phone}`}))
          if(credit){
              disp(Balance(credit.Data))
                    disp(Accno(credit.Data));
              
            // setaccount([...account,-credit.Data])
          // setopens(prev=>!prev)
      setcontents( opens?
        <main className='credit_alert' >
        <div className="close">
        <FaTimes className='fatimes' onClick={close}/>
        </div>
        <h1>&#8358;{credit.Data}</h1>
        <div  className="simm sl">
          <p>Product Name</p>
          {/* <p>Data</p> */}
          <img src={name.icon} width={60} height={50} className='sims_ra' />
          {/* <img src={name.icon} width={30} height={30} className='sims_ra' />
          <p>{name.name}</p>    */}
          </div>
        <div  className="simm sl">
          <p>Receipient Mobile</p>
          <p>{phone}</p>
          {/* <img src={name.icon} width={30} height={30} className='sims_ra' />
          <p>{name.name}</p>    */}
          </div>
        <div  className="simm sl">
          <p>Amount </p>
          <p>{credit.Data}</p>
          {/* <img src={name.icon} width={30} height={30} className='sims_ra' />
          <p>{name.name}</p>    */}
          </div>

            <hr />
          <br />
         <div className="payment_met">
                     <h3>Payment Method</h3>
                     <div className="box_pay"><FaWallet className='fa_wa' /><p> Wallet (&#8358;{mans.toLocaleString()})</p></div>
                   </div>
            <button  className='btns_pay' onClick={pay}>pay</button>
    </main>:
    <></>)
        }
      
    },[credit,opens])



    let ismounted=true;
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
 


  const [name,setname]=useState('')
  const [index,setindex]=useState(0)

  useEffect(()=>{
    setname(sims[0])
  },[])
    
  useEffect(()=>{
  },[name])
    
  useEffect(()=>{
    const clear=setInterval(() => {
       
      setindex((prevIndex) => (prevIndex + 1) % arr.length);
        
    }, 2000);

    return ()=>{
        clearInterval(clear)
    }

},[])


// const socket = useRef(null);
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     if (!socket.current) {
//       socket.current = io("http://localhost:4000");
//     }

//     const sock = socket.current;

//     // ✅ Remove existing listeners before adding new ones
//     sock.off("message").on("message", (data) => {
//       console.log("Received Transactions:", data);
//       setTransactions(data);
//     });

//     sock.off("transactionUpdate").on("transactionUpdate", (newTransaction) => {
//       console.log("New Transaction Received:", newTransaction);
//       setTransactions(prev => {
//         const exists = prev.some(tx => tx._id === newTransaction._id);
//         return exists ? prev : [newTransaction, ...prev];
//       });
//     });

//     return () => {
//       sock.off("message");
//       sock.off("transactionUpdate");
//     };
//   }, []);

//   useEffect(() => {
//     if (!transactions.length) return;

//     const processTransactions = async () => {
//       const userTransactions = transactions.find(t => t._id === idss);
//       if (userTransactions) {
//         for (let tx of userTransactions.transaction) {
//           disp(acct(tx.amount));
//         }
//       }
//     };

//     processTransactions();
//   }, [transactions, idss, disp]);



const socket = useRef(null);
  const audio=useRef(null)

  const [transactions, setTransactions] = useState([]);
  let isMounted=true
     useEffect(() => {
        if(isMounted){
  
        const man=async()=>{
  
          if (!socket.current&&!audio.current) {
             audio.current=new Audio(a)
                  socket.current = io("https://ict-tr8s.onrender.com");
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
const prevSlide = () => {
setindex((prevIndex) => (prevIndex - 1 + arr.length) % arr.length);
};



const nextSlide=()=>{
setindex((prevIndex) => (prevIndex + 1) % arr.length);

}
    const [airtime,setairtime]=useState([
      {
      id:0,
      Data:50
    },
      {
      id:1,
      Data:100
    },
      {
      id:2,
      Data:200
    },
      {
      id:3,
      Data:500
    },
      {
      id:4,
      Data:1000
    },
      {
      id:5,
      Data:2000
    },
  ])
  const content=(
    open?(
    <>
    <div className="ls2">
      
      <FaCaretDown onClick={()=> setopen(prev => !prev)}/>
    </div>
    <div className="kq">
    {sims.map(cards=>(
       <div key={cards.id} className="simm2">
          <img src={cards.icon} width={30} height={30} className='sims_ra' />
          <p>{cards.name}</p>   
          <input type="radio"
        checked={name?.id === cards.id} // Check if this card is selected
        onChange={(e) => {
    setname(cards); // Update the selected card
  }}
         name={"cards"} />
       </div>
    ))}
    </div>
    </>)
    :(
    <div className="ls">
    <FaCaretRight onClick={(e)=>setopen(prev => !prev)}/>
    </div>)
    
  )

   
    useEffect(()=>{
    },[account])

  return (

<section className="main">
    
    <main className='all'>

        <div className="sims_card" >
        
            <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
        {arr.map((src, index) => (
          <div className="carousel-item" key={index}>
              <div className="imgs" style={{backgroundImage:`url(${src})`,height:"100%"}}></div>
            {/* <img src={src} alt="" width={"100%"}  height={"90%"} /> */}
          </div>
        ))}
      </div>
 <div className="carousel-controls">
      </div>
      </div>
        <br /><br />
        
          <div className="mn">
              <img src={name.icon} width={60} height={50} className='sims_ra' />
          <div style={{width:"20%",marginRight:30,height:"10px"}}>
              {content}
              {contents}
          </div> 


          <div className="box_input2" style={{transform:"translateX(-50px)"}}>
            <input className='inps' type="number" value={phone} onInput={(e)=>setphone(e.target.value)} id="phone_no" placeholder='+234' />

            <div className="lis" >
          <FaUser />
        </div>
        </div>
          {/* <button className='btn'>pay</button> */}
         </div>
         <br />
         <br />
        <div className="datas">
          {airtime.map(air=>(

          <div disabled={mans<=0 } key={air.id}  className="boxs" onClick={()=>change(air)}>
              <p>cash pay</p>
              <h3>&#8358;{air.Data}</h3>
              <span>{air.Data}MB</span>
          </div>

          ))}
         </div>
        <br />
        <br /><br />
        <br /><br /><br />
        <br /><br />
        <br /><br />
        </div>
        
          

    </main>
    </section>
  )
}

export default Data