import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { useDispatch } from 'react-redux'
import { account, disp } from '../features/logslice'
import { FaTimes } from 'react-icons/fa'
import swal from 'sweetalert'
import { useSelector } from 'react-redux'
import { dispricess } from '../features/logslice'
import UseAuth from './UseAuth'
import {useAmountMutation} from '../features/appslice'
import { amount } from '../features/logslice'
import { act_nos } from '../features/logslice'
import { useAdd_TransMutation } from '../features/appslice'
import { ide } from '../features/logslice'
const Usebuy = () => {
    const dispatch=useDispatch()
    const showadd=useSelector(amount)
    const ides=useSelector(ide)
    const act_no=useSelector(act_nos)
    const {id,username}=UseAuth()
    const [add]=useAmountMutation()
    const [credit,setcredit]=useState('')
    const [values,setvalues]=useState('')
    const [open,setopen]=useState(true)
    const [display,setdisplay]=useState('')
    const [opens,setopens]=useState(true)
    const refs=useRef()
    const[add_Trans]=useAdd_TransMutation()
    const display_price=useSelector(dispricess)
    const close=()=>{
        // setopens(false)
            refs.current.classList.add("nones")
    }
    let me;
    let ismounted=true;
      useEffect(()=>{

          if(ismounted&&values===true){
            const man=async()=>{

              // if(showadd>Number(50)){

              const result= await disp(add({id,amount:Number(showadd),username}))
              
                 
                  
                // }
                
                me=
         <>
      
                   
                   {
                   setTimeout(() => {
                    {swal({
                        title: "sucessful",
                        text: `Your  ${display_price} is successful `,
                        icon: "success",
                        button: "Approved",
                      },
                    )}
                   }, 100)
                   }
            
</>         
        
        {/* //  </main> */}
        dispatch(disp({values,num:me}))
        
        if(!act_no)return 
        const results= await disp(add_Trans({addamount:Number(showadd),id:act_no,username,id1:ides}))
      }
            man()
            }

    return()=>{
        ismounted=false

    }

        },[values])
    return {credit,setcredit,opens,setopens,values,setvalues,display}
}

export default Usebuy