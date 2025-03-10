import React from 'react'
import { useEffect, useState,useRef } from 'react'
import { useRefreshMutation } from '../api/Logoutslice'
import { setlogin } from '../features/logslice'
import { useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

const Persist = () => {
    const dispatch = useDispatch()
    const [refresh, { isLoading, isSuccess, isError, data ,error}] = useRefreshMutation()
    const eff=useRef(false)
    useEffect(() => {
        if(eff.current===true || process.env.NODE_ENV!=='development'){
        const refreshSession = async () => {
            console.log("refresh")

            try {
                const result = await refresh().unwrap()
            } catch (error) {
                console.error("Failed to refresh session: ", error.message)
            }
        }

        refreshSession()}
        return()=>{
            eff.current=true}
    }, [])

    let content;

    if(isSuccess){
content=<Outlet/>
        } else if(isLoading){
            content= <div className="loader_cen"><div className='loader'></div></div>;
        } else if(isError){
            content=<Link to='/form'>please Loging again</Link>

        }
    
    return content
}

export default Persist