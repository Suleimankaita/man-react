import React from 'react'
import { useState,useEffect } from 'react'
import { setlogin } from '../../features/logslice'
import { useDispatch } from 'react-redux'
import UseAuth from '../../hooks/UseAuth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { Link } from 'react-router-dom'
const form = ({isLoading,Login,isSuccess,error,isError}) => {

  const navigate=useNavigate()
  

        const dispatch=useDispatch()
        const [values,setvalues]=useState('')

        const logs=async()=>{
          try{
              if(!values){
                return toast("All field are required")
              }
            const res=await Login(values)
            await dispatch(setlogin(res.data))
  
          }catch(err){
            console.log("mans")
            console.log(err.message)
            toast(err.message)
          }
        }
  
  const handle=(e)=>{
    const {value,name}=e.target
      setvalues(prev=> {return {...prev,[name]:value}})
    
  }

  useEffect(()=>{
    if(isSuccess&&!isLoading){
      navigate('/')
    }
  },[isSuccess,navigate])


  useEffect(()=>{

    if(isError){
      toast(error.data.message)
    }
  },[isError])
    
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
                <ToastContainer/>
        </div>
     <form className='form1' onSubmit={(e)=>e.preventDefault()}>
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
            <input type="text" 
            name="password"
            // value={get.password}
            placeholder=''
            onChange={(e=>handle(e))}
            id='password'
            />
            <label className='labe' htmlFor="password">password</label>
            </div>
            </div>
      <div className="sa">

            <button className='btn_sub' style={{position:"relative",display:"flex",justifyContent:"center",alignItems:'center'}} onClick={logs} disabled={isLoading}>{isLoading?<div className='load'></div> :"submit"}</button>
        {/* <Link to={'/forget'}>forgot password</Link>  */}
      </div>
        </form>
        
        
        </article>
  )
}

export default form