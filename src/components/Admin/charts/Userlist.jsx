import React,{useState,useEffect,useRef} from 'react'
import { io } from 'socket.io-client'
import img from '../../../assets/images/k.png'
import {
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
    TableHead,
    Paper,
    Table

 } from '@mui/material'
import { Link } from 'react-router-dom'
const Userlist = () => {
  
    const socket=useRef(null)

    const [users,setusers]=useState([])

    let mounted=true;



    const [video,setvideo]=useState("")

    const videos=useRef(null)

    useEffect(()=>{

      const man=navigator.mediaDevices.getUserMedia({audio:true,video:true}).then(stream=>{

        videos.current.srcObject=stream
      });


    },[])

    useEffect(()=>{

      if(!socket.current){
        socket.current=io('http://localhost:4000');
      }
      // if(mounted){

        const socks=socket.current;
        
        socks.off("message").on("message",(data)=>{
          setusers(data)

        
      })
      
    // }
      return()=>{
        socks.off("message")
        // mounted=false;
     
      }

    },[])
  
   useEffect(()=>{
    if(users){
      console.log(users)

    }

   },[users])

  return (

    <div className='usercent' style={{width:'100%',padding:20}}>Userlist
      {users?(
      <>
        <TableContainer component={Paper}>
          <Table>

          {/* <TableHead> */}
            <TableRow  >
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }} align="center" >ID</TableCell>
              <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}  align="center">username</TableCell>
              <TableCell sx={{display:{xs:"none",md:"table-cell"}}}  align="center">account number</TableCell>
              <TableCell sx={{display:{xs:"none",md:"table-cell"}}}  align="center">firstname</TableCell>
              <TableCell sx={{display:{xs:"none",md:"table-cell"}}} align="center">lastname</TableCell>
              <TableCell sx={{display:{xs:"none",lg:"table-cell"}}}  align="center">UserID</TableCell>
              <TableCell sx={{display:{xs:"none",lg:"table-cell"}}} align="center">createdAt</TableCell>
            </TableRow>
          {/* </TableHead> */}
          <TableBody>
          {users.slice(0,10).map(user=>(
        
        <TableRow  sx={{
          "&:hover":{
            backgroundColor:"lightgray",

          },
          
        }}
        component={Link}
        to={`Userlist/Usersection/${user._id}`}
        
        >

          <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }} align="center">{user._id}</TableCell>
          {/* <TableCell sx={{ display: { xs: "none", md: "table-cell" } }} align="center">{user.email}</TableCell> */}
          
          <TableCell sx={{position:"relative"}} align="center">{user.email} <img  src={user?.img?`http://localhost:4000/image/${user.img}`:img} width={35} height={35} style={{position:"absolute",top:"5px",borderRadius:"50%"}}/> </TableCell>

          <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}  align="center">{user.account_no}</TableCell>
          <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}  align="center">{user.firstname}</TableCell>
          <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}  align="center">{user.lastname}</TableCell>
          <TableCell sx={{ display: { xs: "none", lg: "table-cell" } }}  align="center">{user.UserId}</TableCell>
          <TableCell sx={{ display: { xs: "none", lg: "table-cell" } }}  align="center">{user.createdAt.split("T")[0]}</TableCell>

        </TableRow>
 
       ))} 
          </TableBody>
          </Table>
        </TableContainer>
      
      </>  
      ):(
      <></>
      )}
      {/* <video ref={videos} hidden autoPlay width={300} height={300}/> */}

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  )
}

export default Userlist