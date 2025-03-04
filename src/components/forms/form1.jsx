import React from 'react'
import { useState,useEffect } from 'react'
import { useSignMutation } from '../../features/appslice'
import swal from 'sweetalert'
import { toast,ToastContainer } from 'react-toastify'
import { useLogMutation } from '../../api/Logoutslice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setlogin } from '../../features/logslice'
import { Link } from 'react-router-dom'
const form = () => {

          const dispatch=useDispatch()
  
  const [sign,{isLoading,isError,error}]=useSignMutation()
  const navigate=useNavigate()
  
  const [values,setvalues]=useState('')
  
  const [logs,{isSuccess,}]=useLogMutation()

  const handle=(e)=>{
    const {value,name}=e.target
      setvalues(prev=> {return {...prev,[name]:value}})
    
  }

  
  
  const value={
    email:values.email,
    password:values.password,
  }

  useEffect(()=>{
    if(!values){
      toast("All field are required")
    }
  },[values])
  
  const log=async()=>{
            try{
                if(!values){
                  return toast("All field are required")
                }

        
              const res=await logs(value)
              await dispatch(setlogin(res.data))
    
            }catch(err){
              console.log(err.message)
              toast(err.message)
            }
          }
    

  const signs=async()=>{
    try{
      if(!values){
       return toast("All field are required")
      }
      const res=await sign({values})
      console.log(res.data)
      //  if(isSuccess){
        await log()
      //  }
    }catch(err){
      toast(err.message)
      // console.log(err.message)
      // if(isError){
   
      //  a
      // }
    }
  }

  
    useEffect(()=>{
      if(isSuccess){
        navigate('/')
      }
    },[isSuccess,navigate])
  
  
 
  return (
    <article className='forms_sing'>

<div className="banners">
            <div className="blur">
            <h1 class="text-uppercase" data-aos="fade-up">Banking Solutions</h1>
            <br />
            
            <div className="ns2">
            <p >play a pivotal role in shaping and supporting the economic growth and financial stability of society. By providing access to secure, reliable, and innovative financial services, banks empower individuals, businesses, and communities to thrive.</p>
            </div>
            

            </div>
    </div>
 <form className='form1' onSubmit={(e)=>e.preventDefault()}>
 <ToastContainer/>
      
      <div className="box_inp">

      <div className="box_input">
        <input type="text" 
        name="firstname"
        onChange={(e=>handle(e))}
        placeholder=''
        />
        <label className='labe' htmlFor="firtname">firtname</label>
        </div>
        <div className="box_input">
        <input type="text" 
        name="lastname"
        // value={get.lastname}
        placeholder=''
        onChange={(e=>handle(e))}
        id='lastname'
        />
        <label className='labe' htmlFor="lastname">lastname</label>
        </div>
        </div>
        <div className="box_input">
            <input type="text" 
            name="password"
            // value={get.password}
            placeholder=''
            onChange={(e=>handle(e))}
            id='password'
            />
        <label className='labe' htmlFor="password">password</label>

            </div>
        <div className="box_input ">
            <input type="text" 
            name="transaction_pin"
            // value={get.transaction_pin}
            placeholder=''
            maxLength={4}
            onChange={(e=>handle(e))}
            id='transaction_pin'
            />
        <label className='labe' htmlFor="transaction_pin" >transaction_pin</label>

            </div>
          {/* <div className="box_inp">
          <div className="box_input">
            <input type="text" 
            name="BVN"
            onChange={(e=>handle(e))}
            placeholder=''
            />
            <label className='labe' htmlFor="state">state</label>
          </div>
            <div className="box_input">
            <input type="text" 
            name="lastname"
            placeholder=''
            onChange={(e=>handle(e))}
            id='lastname'
            />
            <label className='labe' htmlFor="lastname">lastname</label>
        </div>
        </div> */}
        
          <div className="box_inp">
          <div className="box_input">
            <input type="email" 
            name="email"

            onChange={(e=>handle(e))}
            placeholder=''
            />
            <label className='labe' htmlFor="email">email</label>
          </div>
            <div className="box_input">
            <input type="date" 
            name="date"
            onChange={(e=>handle(e))}
            />
        </div>
        </div>
        <div className="box_inp">

        <div className="box_input">
          <input type="number" 
          name="phone"
          id='phone_no'
          onChange={(e)=>handle(e)}
          placeholder=''
          />
          <label className='labe' htmlFor="firtname">phone</label>
          </div>
          {/* <div className="box_input">
          <input type="text" 
          name="lastname"
          placeholder=''
          // onChange={(e)=>handle(e)}
          id='lastname'
          />
          <label className='labe' htmlFor="lastname">lastname</label>
          </div> */}
          </div>
          <div className="sas">

          <button className='btn_sub' style={{position:"relative",display:"flex",justifyContent:"center",alignItems:'center'}} onClick={signs} disabled={isLoading}>{isLoading?<div className='load'></div> :"submit"}</button>
        {/* <Link to={'/forget'}> forgot password</Link>  */}
          </div>
          
    </form>
    
    
    </article>
  )
}

export default form