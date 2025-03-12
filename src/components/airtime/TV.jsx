import React from 'react'
import { useState,useEffect,useRef } from 'react'
import {FaSimCard,FaCaretDown,FaCaretRight,FaCarSide,FaUser,FaTimes, FaWallet,FaUnlockAlt} from 'react-icons/fa'
import mobile from '../../assets/images/combinations.jpeg'
import glo from '../../assets/images/startimes.jpeg'
import Airtel from '../../assets/images/Dstv.jpeg'
import mtn from '../../assets/images/go.jpeg'
import Usebuy from '../../hooks/Usebuy'
import Transaction_con from '../../hooks/transaction_con'
import { useSelector } from 'react-redux'
import { Balance } from '../../features/logslice'
import { account } from '../../features/logslice'
import { display } from '../../features/logslice'
import S from '../../s'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { accounts as acct,pricesss } from '../../features/logslice';
import a from '../transfer/note.mp3'
import { useGetpostQuery } from '../../features/appslice';
import UseAuth from '../../hooks/UseAuth';
import { io } from 'socket.io-client';
const TV = () => {

  const { id: idss, } = UseAuth();
    const socketRef = useRef(null); // ✅ Store the socket instance
    const { isLoading, isSuccess } = useGetpostQuery("post", {
      pollingInterval: 1500,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true
    });

    const {amountess}=Usebuy()
  
    const selects=useSelector(display)
    const accounts=useSelector(account)
  const {credit,setcredit,values}=Usebuy()
  const [open,setopen]=useState(false)
  const [opens,setopens]=useState(true)
    const disp=useDispatch()
 
  const [sims,setsims]=useState([
    {
      id:0,
      name:"GOTV",
      icon:mtn,
      checked:true
    },
    {
      id:1,
      name:"DsTV",
      icon:Airtel,
      checked:false

    },
    {
      id:2,
      name:"Starttimes TV",
      icon:glo,
      checked:false

    },
  
  ])
  

    const [contents,setcontents]=useState('')
    const [phone,setphone]=useState('')

    const arr=[glo,mtn,mobile]

  const show=()=>{
    setopen(prev=>!prev)
  }
  const [all,setall]=useState(false)
    
  const change=(cards)=>{
    setopens(prev=>!prev)
    setcredit(cards)
    

  }
  const mans = accounts.reduce((sum, prices) => sum + prices, 0);
  const [details, setdetails] = useState('');
  const pay = () => {
    if (mans < credit.Data ) {
      return swal({
        text: `Insufficient balance. You need NGN ${credit.Data}.`,
        title: "No enough balance",
        icon: "error"
      });
    }
    setcontents( 
    <main className='credit_alert2' >
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

  const close = () => {
    setopens(false); // Explicitly set opens to false to close the modal
    setcontents(null); // Clear the contents
  };
    
  
  useEffect(()=>{
        if(credit){
          disp(Balance(-credit.Data))
                  disp(pricesss({ credit: credit.Data, phone:`${phone} to` }));
            
          // setopens(prev=>!prev)
      setcontents( opens?
        <main className='credit_alert' >
        <div className="close">
        <FaTimes className='fatimes' onClick={close}/>
        </div>
        <h1>&#8358;{credit.Data}</h1>
        <div  className="simm sl">
          <p>Product Name</p>
          {/* <p>Recharge TV</p> */}
             
              {/* <p>{name.name}</p> */}
          {/* <img src={name.icon} width={30} height={30} className='sims_ra' />
          <p>{name.name}</p>    */}
          </div>
        <div  className="simm sl">
          <p>Receipient Card_no</p>
          <p>{phone}</p>
          </div>
        <div  className="simm sl">
          <p>Amount </p>
          <p>&#8358;{credit.Data}</p>
          </div>

            <hr />
          <br />
           <div className="payment_met">
                      <h3>Payment Method</h3>
                      <div className="box_pay"><FaWallet className='fa_wa' /><p> Wallet (&#8358;{mans.toLocaleString()})</p></div>
                    </div>
            <button className='btns_pay' onClick={pay}>pay</button>
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
  const audio=useRef(null)


const socket = useRef(null);
  const [transactions, setTransactions] = useState([]);

 let isMounted=false
      useEffect(() => {
         if(!isMounted){
   
         const man=async()=>{
   
           if (!socket.current&&!audio.current) {
              audio.current=new Audio(a)
                   socket.current = io("localhost:4000");
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
                   isMounted=true
                   socket.current.off("message");
                   socket.current.off("transactionUpdate");
                   socket.current.off("transactionUpdates");
                   socket.current.off("notify");
                 };
         }, [idss]);

         const arrs=[]
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
      Data:500,
      day:'1 day'
    },
      {
      id:1,
      Data:1500,
      day:'7 days'

    },
      {
      id:2,
      Data:10000,
      day:'1 Mouth'

    },
      {
      id:3,
      Data:15000,
      day:'2 Mouth'

    },
      {
      id:4,
      Data:25000,
      day:'5 Mouth'

    },
      {
      id:5,
      Data:50000,
      day:'1 Year'

    },
  ])
  const content=(
    open?
    <>
    <div className="ls2">
         <FaCaretDown onClick={show}/>
    </div>
    <div className="kq">
    {sims.map(cards=>(
       <div key={cards.id} className="simm2">
          <img src={cards.icon} width={30} height={30} className='sims_ra' />
          <p>{cards.name}</p>   
          <input type="radio"  checked={name?.id === cards.id} // Check if this card is selected
            onChange={(e) => {
              setname(cards); // Update the selected card
            }} name={"cards"} />
       </div>
    ))}
    </div>
    </>
    :
    <div className="ls">
    <FaCaretRight onClick={show}/>
    </div>
    
  )

  

  return (

<section className="main">
    
    <main className='all'>

        <div className="sims_card" >
        
            <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
        {arr.map((src, index) => (
          <div className="carousel-item" key={index}>

            <img src={src} alt="" width={"100%"}  height={"90%"} />
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
            <input className='inps' type="number" value={phone} onInput={(e)=>setphone(e.target.value)} id="phone_no" placeholder='Card no' />

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

          <div key={air.id} className="boxs" onClick={()=>change(air)}>
              <p>cash pay</p>
              <h3>&#8358;{air.Data}</h3>
              <span>{air.day}</span>
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

export default TV