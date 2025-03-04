import React from 'react'
import Login from './login'
import { useState , useEffect } from 'react'
import Form from './form1'
import Form2 from './form2'
import { io } from 'socket.io-client'
import { useLogMutation } from '../../api/Logoutslice'
import { Link } from 'react-router-dom'

const sign_in = () => {
  
  const [Login,{isLoading,isError,isSuccess,error}]=useLogMutation()

      
      const [values,setvalues]=useState('')
      const [count,setcount]=useState(0)
     
      const handle=(e)=>{
        const {value,name}=e.target
          setvalues(prev=> {return {...prev,[name]:value}})
        
      }
      const logs=async()=>{
        try{

          const res=await Login(values)
          console.log(res.data)

        }catch(err){
          console.log(err.message)
        }
      }

  const [open,setopen]=useState(true)
  const [froms,setforms]=useState([<Form2 Login={Login} isLoading={isLoading} count={count} values={values} handle={handle}/>,<Form handle={handle} count={count} values={values}/>])
  const [views,setviews]=useState(0)
  const [view,setview]=useState(froms[1])


  const show=()=>{
    setopen(prev=>!prev)
  }

 
    const next=()=>{
      setcount(prev=> prev+=1)
      setview(froms[count])
      console.log(count)
    }
    
    const prev=()=>{
      setcount(prev=> prev-=1)
      setview(froms[count])
    }
    
   
    
    // useEffect(()=>{
      
      // console.log(count)
       const content=( open &&view ?(
        <>
        {view}
        </>
      ):(
        <Form2 Login={Login} isSuccess={isSuccess} isLoading={isLoading} isError={isError} error={error}/>
      ))
  

    // },[count])

   
  return (
    <main className='sing_in'>
      {/* <div className="semi_form"> */}
        
        <div className="checker">

        {/* <input type="checkbox"  checked={open} onChange={()=>setopen(pr=>!pr)} />
      <label htmlFor="checka">
      </label> */}
      
        </div>
        {content}
        {/* <div className="lst_b">
        <button onClick={()=>setopen(true)} className={open?'black':null}>sign_in </button>
        <button className={open?null:'black'} onClick={()=>setopen(false)}>login</button>
      </div> */}
    <div className="btn_box">
      
        <button className='btn_url' onClick={show}>{open?"Login":"Sign in"}</button>
          
          <a href="/forget">forgot password</a>

       
      </div>
      {/* </div> */}
      <br /><br /><br /><br /><br />
    </main>
  )
}

export default sign_in