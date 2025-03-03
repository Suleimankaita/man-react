import React, { useEffect } from 'react'
// import {} from 'react-icons/fa'
import UseAuth from '../hooks/UseAuth'
import Nav from './nav'
import { FaDotCircle } from 'react-icons/fa'
const Header = () => {
    const {username}=UseAuth()
    useEffect(()=>{
      console.log(username)
    },[])
  return (
    <header className='header'>
        {/* <h1>hello </h1> */}
        <div>
        <h1>K-S Bank <span className='dot'>.</span> </h1>
      <span>Hello {username.slice(0,username.indexOf("@"))}</span>
        </div>
    <Nav/>
    </header>
  )
}

export default Header