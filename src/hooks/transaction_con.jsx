import React from 'react'
import Usebuy from './Usebuy'
import { useEffect,useRef,useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const transaction_con = ({credit,opens}) => {
    
    const ref=useRef()


    const {setcredit,setopens}=Usebuy()

    const close=()=>{
    setopens(prev=>!prev)

    }

    // useEffect()

    const content=(
        opens?
        <main className='credit_alert' >
        <div className="close">
        <FaTimes className='fatimes' onClick={close}/>
        </div>
        <h1>{credit.airtime}</h1>
    </main>:<></>
    )

  return content
}

export default transaction_con