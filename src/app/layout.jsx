import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const layout = ({allowedroles}) => {

  const [roles,setroles]=useState(JSON.parse(localStorage.getItem("roles"))||[])

  const location = useLocation()
  useEffect(()=>{
  },[])

  return (
    <article  className='outlet'>
      {
          roles.Roles.find(role=>allowedroles.includes(role))?<Outlet/>:
        <Navigate to={'/form'} state={{from:location}} replace />

        }

    </article>
  )
}

export default layout