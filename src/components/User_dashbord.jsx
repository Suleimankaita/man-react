import React from 'react'
import { FaEye,FaEyeSlash } from 'react-icons/fa'
import { useState , useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaMoneyBillAlt,FaMobileAlt,FaDigitalTachograph,FaTv,FaCoins,FaMoneyCheck,FaHandHoldingUsd} from 'react-icons/fa'
import svg1 from '../assets/images/flaticon-svg/svg/wallet.svg'
import svg2 from '../assets/images/flaticon-svg/svg/money.svg'
import { useGetpostQuery } from '../features/appslice'
import DashBord from './Admin/DashBord'
import User_dash from './User_das'
import { io } from 'socket.io-client';
import { accounts as acct,Accno, amount } from '../features/logslice';
import { account as acts} from '../features/logslice';
import { useSelector } from 'react-redux';
import { act_nos } from '../features/logslice'
import UseAuth from '../hooks/UseAuth'
import { useDispatch } from 'react-redux'

const User_dashbord = () => {

    const { data,isLoading,isSuccess}=useGetpostQuery('user',{
    
        pollingInterval:1500,
    
        refetchOnFocus:true,
    })

    const [open,setopen]=useState(true)

    const show=()=>{
        setopen(prev=> !prev)
    }
     const dispatch=useDispatch()
    
     const socketRef = useRef(null);
    
    const { id: idss,username,account} = UseAuth();
    
    const [transactions, setTransactions] = useState([]);
    
    const [find,setfind]=useState()
    
    const isamounted = useRef(true);
    
    const isamounted2 = useRef(true);
    
    const isMounted = useRef(true)
    
    const accounts = useSelector(acts)
    
    const [cons,setcons]=useState([
          {
          id:0,
          name:"airtime",
          img:svg1,
          body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
      },
          {
          id:1,
          name:"widthdrawel",
          img:svg2,
          body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
      },
          {
          id:2,
          name:"widthdrawel",
          img:svg1,
          body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
      },
          {
          id:3,
          name:"Card",
          img:<FaDigitalTachograph/>,
          body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
      },
          {
          id:4,
          name:"Data",
          img:<FaMobileAlt/>,
          body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
      },
  
          {
          id:5,
          name:"loan",
          img:<FaMoneyBillAlt/>,
          body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
      },
          {
          id:1,
          name:"Transfer",
          img:<FaCoins/>,
          body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
      },
  
          {
          id:1,
          name:"bills",
          img:<FaMoneyBillAlt/>,
          body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
      },
          {
          id:1,
          name:"More",
          img:<FaMoneyBillAlt/>,
          body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
      },
     
  ])
  
      const [secound,setsecound]=useState([
          {
              id:3,
              name:"widrawel",
              url:"Card",
              img:<FaMoneyCheck/>,
              body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
          },
              {
              id:4,
              name:"Airtime",
              url:"Airtime",
              img:<FaHandHoldingUsd/>,
              body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
          },
              {
              id:1,
              name:"TV",
              url:"TV",
              img:<FaTv/>,
              body:"Deposits can be made in various forms, including cash, checks, or electronic transfers",
          },
  ])
  
    let contents;
    const con1=(open?<FaEye onClick={show}/>:<FaEyeSlash onClick={show}/>);
    const content=(open?<h1 className='amount'>₦{accounts?.reduce((sum, prices) => sum + prices, 0).toLocaleString()}</h1>:<h1 className='amount'>****</h1>);

        contents=<User_dash cons={cons} secound={secound}setsecound={setsecound} setcons={setcons} account={account} con1={con1} content={content} open={open} setopen={setopen}/>  

    return contents;
}

export default User_dashbord;
