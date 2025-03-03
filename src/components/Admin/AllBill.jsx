import React from 'react'
import { Table,TableCell,TableBody,TableRow,TableContainer,Paper } from '@mui/material'
import { useGetpostQuery } from '../../features/appslice'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

    const Bills = () => {

        const {data}=useGetpostQuery('',{
            pollingInterval:1000,
            refetchOnFocus:true
        })

        const [arr,setarr]=useState([])

        const [users,setusers]=useState([])
        
        
        useEffect(()=>{

            const man=async()=>{

                const {ids,entities}=data;

                const ml=ids.map(id=>{
                    return entities[id].bills
                })

                setusers(ml)
                const t=ml.map(res=>{
                    // console.log(res)
                    setarr(res)
                })

            }
            man()

        },[data])
const [search,setsearch]=useState('')
    
    let all;

        let ms;
        
        if(arr.length){
            console.log(arr)
            all=arr.filter(ms=>{
                return ms._id.toString().includes(search.trim())||ms.username.trim().toLowerCase().includes(search.trim().toLowerCase())
            })
    
            ms=(
                
                <TableContainer component={Paper}>
                
                    <Table >
                        <TableRow>
                            <TableCell  align='center'>ID</TableCell>
                            <TableCell  align='center'>username</TableCell>
                           
                            <TableCell  sx={{display:{xs:"none",md:"table-cell"}}}  align='center'>Biilname</TableCell>
                            <TableCell  sx={{display:{xs:"none",md:"table-cell"}}}  align='center'>account_no</TableCell>
                            <TableCell sx={{display:{xs:"none",md:"table-cell"}}} align='center'>amount</TableCell>
                            <TableCell sx={{display:{xs:"none",lg:"table-cell"}}} align='center'>time</TableCell>
                            <TableCell sx={{display:{xs:"none",lg:"table-cell"}}} align='center'>Date</TableCell>
                        </TableRow>

                        <TableBody >
                
                
            {/* {users.map((ress)=>{ */}
                {/* // console.log(ress) */}
                
               {  all.map(res=>(
                    
            <TableRow component={Link} to={''} sx={{"&:hover":{backgroundColor:"lightgrey",cursor:"pointer"}}}>
                    <TableCell  align='center'>{res.id}</TableCell>
                    <TableCell   align='center'>{res.username}</TableCell>
                    
                    <TableCell  sx={{display:{xs:"none",md:"table-cell"}}} align='center'>{res.billname}</TableCell>
                    <TableCell  sx={{display:{xs:"none",md:"table-cell"}}}   align='center'>{res.account_no}</TableCell>
                    <TableCell  sx={{display:{xs:"none",md:"table-cell"}}} align='center'>{res.amount}</TableCell>
                    <TableCell  sx={{display:{xs:"none",lg:"table-cell"}}} align='center'>{res.time}</TableCell>
                    <TableCell  sx={{display:{xs:"none",lg:"table-cell"}}} align='center'>{res.date}</TableCell>
                </TableRow>
                
            )
        )}
    
  



     

        </TableBody>
                        </Table>
               </TableContainer>
            )
            
             

        }

    
    return (
    

            <div className="alls" style={{width:"100%"}}>

                

                <div className='box-tb_inp' style={{padding:"10px"}}>
                
                <input type="text" placeholder='search' onInput={(e)=>setsearch(e.target.value)} />
                            </div>
                            <br />

            {ms}
            </div>
  )
}

export default Bills