import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { io } from 'socket.io-client'
import { useRef,useState,useEffect, } from 'react'
import img from "../../assets/images/person_1.jpg"
import { useDeleteMutation } from '../../api/Logoutslice'
import { Table,TableBody,TableCell,TableContainer,Paper,TablePagination, TableRow } from '@mui/material'
import { toast,ToastContainer } from 'react-toastify'
import UserBill from '../../../UserBill'

const Usersection = () => {

    const [user,setuser]=useState([])

    const navigate=useNavigate()

    const [deletes,{isLoading,isSuccess,isError,error}]=useDeleteMutation()
    
    const [find,setfind]=useState([])

    const [search,setsearch]=useState('')

    const list=["User_details","Transaction","Bills"]

    const [change,setchange]=useState(list[0])

    const {id}=useParams()

    const socket=useRef(null);

    const del=async()=>{

        try{
            const res=await deletes({id}).unwrap()

        }catch(err){
            toast(err.message)
        }

    }

    useEffect(()=>{

        if(isSuccess&&find){

            navigate('/')
            toast(`${find.email} is Deleted`)
        }

    },[isSuccess,find])
    useEffect(()=>{

        if(isError)toast(error.data.message)

    },[isError])

    useEffect(()=>{

        if(!socket.current){
            socket.current=io("https://ict-tr8s.onrender.com");
        }

        const sock=socket.current;

        sock.off("message").on("message",(data)=>{
            setuser(data)
        })

        return()=>{
            sock.off("message")
        }
    },[])
    
    useEffect(()=>{
        
        const man=async()=>{
            if(!user.length)return
                
            const finds=user.find(use=>use._id===id)
                    
                    if(finds){
                        setfind(finds)

                    }



        }
        man()
    },[user,find])

    let content;

        if(find){
            let searchs;
            if(find.transaction){

                 searchs=find.transaction.filter(transac=>{
                    return transac._id.toLowerCase().includes(search.toLowerCase().trim())||transac.name.toLowerCase().includes(search.toLowerCase().trim())
                })
            }

            if(change==="User_details"){

                content=(
                    <div style={{display:"flex",flexFlow:"column",alignItems:"center",width:"100%"}}>
                    <div className='fl' >
                    <div className="img_profile">
                        <img src={find?.img?`http://localhost:4000/image/${find?.img}`:img} alt="" width={100} height={100} />
                    </div>
    
                    <div className="User_details">
                        <p>_id:{find._id}</p>
                        <p>firstname:{find.firstname}</p>
                        <p>lastname:{find.lastname}</p>
                        <p>Username:{find.email}</p>
                        <p>createdAt:{find.createdAt?find.createdAt.split("T")[0]:null}</p>
                    </div>
    
                    <div className="User_details">
                    <p>UserId:{find.UserId}</p>
    
                        <p>account_no:{find.account_no}</p>
                        <p>Roles:{find.Roles?find.Roles.toString().replace(', '):null}</p>
                        <p>Username:{find.email}</p>
                        <p>updatedAt:{find.updatedAt?find.updatedAt.split("T")[0]:null}</p>
                        <p>active:{find.active===true?"True":"false" }</p>
                        {/* <p>updatedAt:{find.updatedAt}</p> */}
                    

                    </div>
                    
    
        </div>
                    <div style={{display:"flex",justifyContent:"flex-end",width:"100%",padding:"20px",transform:"translateY(-20px)"}} className="delete">

                    <button className='deletes' onClick={del} >{isLoading?<div className='load'></div> :"Delete"} </button>
                    </div>
                    </div>
                )

            }
            else if(change==="Transaction"){
        
                content=<div style={{display:"flex",flexFlow:"column",width:"100%",height:"77vh"}}>
                <div className='box-tb_inp'>
                <input type="text" placeholder='search' onInput={(e)=>setsearch(e.target.value)} />
                            </div>
                <TableContainer component={Paper}>
                        <Table>
                               
                           <TableRow>
                            <TableCell align='center'>ID</TableCell>
                            <TableCell align='center' sx={{display:{xs:"none",lg:"table-cell"}}}>Amount</TableCell>
                            <TableCell align='center' sx={{display:{xs:"none",sm:"table-cell"}}}>email</TableCell>
                            <TableCell align='center' sx={{display:{xs:"none",sm:"table-cell"}}}>Date</TableCell>
                            <TableCell align='center' sx={{display:{xs:"none",lg:"table-cell"}}}>Time</TableCell>
                           </TableRow>

                           {searchs?searchs.map(transac=>(
                            <TableRow sx={{"&:hover":{
                                backgroundColor:"lightgray",
                                cursor:"pointer",

                            } }}>


                                    <TableCell align='center'>{transac._id}</TableCell>
                                    
                                    <TableCell sx={{display:{xs:"none",lg:"table-cell"}}} align='center'>{transac.amount.toString().startsWith("-") ?`Debit ${transac.amount}`: `credit ${transac.amount}`}</TableCell>
                                    
                                    <TableCell sx={{display:{xs:"none",sm:"table-cell"}}}  align='center'>{transac.name}</TableCell>
                                    <TableCell sx={{display:{xs:"none",sm:"table-cell"}}}  align='center'>{transac.date}</TableCell>
                                    <TableCell sx={{display:{xs:"none",lg:"table-cell"}}}  align='center'>{transac.time}</TableCell>
                                    

                            </TableRow>

                        )):<TableRow><TableCell align='center'>Not found</TableCell></TableRow>}

                        </Table>
                    </TableContainer>
                    </div>
            
        }
        else if(change==="Bills"){
           content= <UserBill/>
        }
        }

        const opt=list.map((user,_)=>(
            <option value={user} key={_}>{user}</option>
        ))

    return (
       <>

       <ToastContainer/>
       <div style={{display:"flex",justifyContent:"flex-end",marginTop:"10px"}}>

       <select className='selects' style={{margin:10}} onChange={(e)=>setchange(e.target.value)}>
        {opt}
        </select> 
       </div>
    <main className='User_section'>


            {content}
{/* 
        {find&&
       
        } */}

        </main>
        </>
  )

}

export default Usersection