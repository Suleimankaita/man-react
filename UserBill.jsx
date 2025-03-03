import React from 'react'
import { TableBody,Table,TableRow,TableCell,Paper, TableContainer, } from '@mui/material'
import { useState,useEffect } from 'react'
import { useGetpostQuery, } from './src/features/appslice'
import { Link } from 'react-router-dom'
import UseAuth from './src/hooks/UseAuth'
import { useParams } from 'react-router-dom'
const UserBill = () => {

    const {data}=useGetpostQuery('',{
        pollingInterval:1000,
        refetchOnFocus:true
    })

    const {id}=useParams()

    const [objs,setobjs]=useState([])
    const arr=[]

    useEffect(() => {
        const man = async () => {
            if (!data) return; // Ensure data is available
    
            const { ids, entities } = data;
    
            // Create a new array from mapped data
            const newObjs =  entities[id]
            // ids.map(res => entities[res]);
    
            // Update state with the new array
            setobjs(newObjs.bills);
    
            console.log(newObjs); // Corrected console log placement
        };
    
        man();
    }, [data]);
    const [search,setsearch]=useState('')
    
    let all;

    if(objs){

        all=objs.filter(ms=>{
            return ms._id.toString().includes(search.trim())||ms.username.trim().toLowerCase().includes(search.trim().toLowerCase())
        })
    }

  return (
    <div className='mains' style={{width:"100%"}}>


<div className='box-tb_inp'>
                <input type="text" placeholder='search' onInput={(e)=>setsearch(e.target.value)} />
                            </div>
                            <TableContainer component={Paper}>

    <Table >
        <TableRow>
            <TableCell  align='center'>ID</TableCell>
            <TableCell  align='center'>username</TableCell>
            <TableCell  align='center'>Billname</TableCell>
            <TableCell  sx={{display:{xs:"none",md:"table-cell"}}}  align='center'>account_no</TableCell>
            <TableCell sx={{display:{xs:"none",md:"table-cell"}}} align='center'>amount</TableCell>
            <TableCell sx={{display:{xs:"none",lg:"table-cell"}}} align='center'>time</TableCell>
            <TableCell sx={{display:{xs:"none",lg:"table-cell"}}} align='center'>Date</TableCell>
        </TableRow>
        <TableBody >
            {objs&&(
                <>
            {all.map((res)=>(
            <TableRow component={Link} to={''} sx={{"&:hover":{backgroundColor:"lightgrey",cursor:"pointer"}}}>
                    <TableCell  align='center'>{res.id}</TableCell>
                    <TableCell   align='center'>{res.username}</TableCell>
                    <TableCell   align='center'>{res.billname
}</TableCell>
                    <TableCell  sx={{display:{xs:"none",md:"table-cell"}}}   align='center'>{res.account_no}</TableCell>
                    <TableCell  sx={{display:{xs:"none",md:"table-cell"}}} align='center'>{res.amount}</TableCell>
                    <TableCell  sx={{display:{xs:"none",lg:"table-cell"}}} align='center'>{res.time}</TableCell>
                    <TableCell  sx={{display:{xs:"none",lg:"table-cell"}}} align='center'>{res.date}</TableCell>
                </TableRow>
                ))}
            </>

           ) }
        </TableBody>
    </Table>
    </TableContainer>
    <br />
    {!objs&&<p style={{textAlign:"center"}}>empty bill transactions</p>}

<br /><br />
<br /><br />
    </div>

  )
}

export default UserBill