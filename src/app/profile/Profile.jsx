import React from 'react'
import { useState,useEffect } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import UseAuth from '../../hooks/UseAuth'
import { useUpdateMutation } from '../../features/appslice'
import { useGetpostQuery } from '../../features/appslice'
import { ToastContainer,toast } from 'react-toastify'
import form from '../../components/forms/form2'
const Profile = () => {
  
  const {data,isLoading:load,isSuccess}=useGetpostQuery('',{
    pollingInterval:1000,
    refetchOnFocus:true
  })
  const [update,{isLoading,isError,error}]=useUpdateMutation()
  const {id}=UseAuth()
  const [input,setinput]=useState('')
  const [img,setimg]=useState('')
  const [firstname,setfirstname]=useState('')
  const [lastname,setlastname]=useState('')
  const [phone,setphone]=useState('')
  const [email,setemail]=useState('')
  const [date,setdate]=useState('')
  const [view,setview]=useState('')
  const [transaction_pin,settransaction_pin]=useState('')
  const [pass_auth,setpass_auth]=useState('')
 
  
  const inp=(e)=>{
    
    const {name,value}=e.target;
      setinput(prev=>{return {...prev,[name]:value}})

  }

  let content


  const values={
    firstname,
    lastname,
    email,
   phone_no: phone,
    img:img,
    birth:date
  }
  const uploads=async()=>{
  
    try{
      const form=new FormData();
      const birth=date
      form.append('file',img)
       form.append('firstname',firstname)
       form.append('lastname',lastname)
       form.append('email',email)
       form.append('transaction_pin',transaction_pin)
       form.append('phone',phone)
      //  form.append('birth',birth)
         
      await update({form,id})

    }catch(err){
      console.log(err.message)
    }
  }
  useEffect(()=>{

    if(isError){
      toast(error.data.message)
    }
  },[isError])

  useEffect(()=>{
 
    const all=async()=>{

      const {ids,entities}=data;
      const man= entities[id]

      setfirstname(man.firstname)
      settransaction_pin(man.transaction_pin)
      setlastname(man.lastname)
      setemail(man.email)
      setphone(man.phone)
      setimg(man.img)
      setdate(man.birth.split('T')[0])
      
      

    console.log(man.phone)
    // if(find){
    //   find.map(result=>{console.log(result)})
    // }

    }
    all()
  },[data])



  useEffect(()=>{
   
    if(!values){
      toast(error.data.message)
    }

  },[isError])


  if(load){
    content=(<div className="loader_cen"> <div className='loader'></div></div>)
  }else if(isSuccess){
    content=(

      <div className="all">
       <ToastContainer/>        
        <main className='profile_pic'>

          <img src={view?view:`http://localhost:4000/image/${img}`} alt="" width={150} height={150} />
         
          <input type="file" 
          name='file'
          id='files'
          hidden
          accept='image/*'
          onChange={(e)=>{
            setimg(e.target.files[0])
            setview(URL.createObjectURL(e.target.files[0]))
          
          }}
          />
          <label style={{fontSize:"30px"}} className='label' htmlFor="files"><FaCloudUploadAlt /></label>
        </main>
        <form className='forms' style={{height:"100vh"}} onSubmit={(e)=>e.preventDefault()}>
        
        <div className="box_inp2">

<div className="box_input">
  <input type="text" 
  name="firstname"
  value={firstname}
  onChange={(e=>setfirstname(e.target.value))}
  placeholder=''
  />
  <label className='label'  htmlFor="firtname">firtname</label>
  </div>
  <div className="box_input">
  <input type="text" 
  name="lastname"
  value={lastname}
  placeholder=''
  onChange={(e=>setlastname(e.target.value))}
  id='lastname'
  />
  <label className='label'  htmlFor="lastname">lastname</label>
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
  
    <div className="box_inp2">
    <div className="box_input">
      <input type="email" 
      name="email"
      value={email}
      onChange={(e=>setemail(e.target.value))}
      placeholder=''
      />
      <label className='label' htmlFor="email">email</label>
    </div>
      <div className="box_input">
      <input type="date" 
        name="date"
        value={date}
      onChange={(e=>setdate(e.target.value))}
      />
  </div>
  </div>
  <div className="box_inp2">

  <div className="box_input">
    <input type="number" 
    name="phone_no"
    id='phone_no'
    value={phone}
    onChange={(e)=>setphone(e.target.value)}
    placeholder=''
    />
    <label className='label' htmlFor="firtname">phone</label>
    </div>
    
    <div className="box_input">
    <input type="text" 
    name="transaction_pin"
    placeholder=''
    value={transaction_pin}
    onChange={(e)=> settransaction_pin(e.target.value)}
    id='transaction_pin'
    />
    <label className='label' htmlFor="pass">Transaction password</label>
    </div>
    </div>
      <div className="b" style={{display:"flex",justifyContent:"center"}}>

      <button  className='btn_sub' style={{position:"relative",display:"flex",justifyContent:"center",alignItems:'center'}} onClick={uploads} disabled={isLoading}>{isLoading?<div className='load'></div> :"submit"}</button>
      </div>
    </form>
      </div>
    )
  }



  return (
    <section className='main'>

{content}
    </section>
  )
}

export default Profile