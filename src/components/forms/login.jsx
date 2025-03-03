import React from 'react'
import { useState,useEffect } from 'react'
import Sign_in from './sign_in'

const login = () => {
    
    const [values,setvalues]=useState('')

    
    const [plus,setplus]=useState(0)
    
    const handle=(e)=>{
      const {value,name}=e.target
        setvalues(prev=> {return {...prev,[name]:value}})
      
    }
  return (
   <>
      <div>
 <form className='form1'>
      <div className="box_inp">

      <div className="box_input">
        <input type="text" 
        name="username"
        onChange={(e=>handle(e))}
        placeholder=''
        />
        <label htmlFor="username">username</label>
        </div>
        <div className="box_input">
        <input type="text" 
        name="password"
        // value={get.password}
        placeholder=''
        // onChange={(e=>handle(e))}
        id='password'
        />
        <label htmlFor="password">password</label>
        </div>
        </div>
          {/* <div className="box_inp">
          <div className="box_input">
            <input type="text" 
            name="BVN"
            onChange={(e=>handle(e))}
            placeholder=''
            />
            <label htmlFor="state">state</label>
          </div>
            <div className="box_input">
            <input type="text" 
            name="lastname"
            placeholder=''
            onChange={(e=>handle(e))}
            id='lastname'
            />
            <label htmlFor="lastname">lastname</label>
        </div>
        </div> */}
        
        <button className='btn_sub'>submit</button>
    </form>
    </div>
   </>
  )
}

export default login