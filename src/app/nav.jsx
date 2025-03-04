import React from 'react'
import { FaBars, FaCreditCard, FaTimes } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBell, FaCog, FaHome, FaDoorOpen, FaHistory,FaUserAlt,FaMoneyCheckAlt,FaMoneyBillAlt,FaTasks,FaHandHoldingUsd } from 'react-icons/fa'
import obj from '../hooks/obj';
import UseAuth from '../hooks/UseAuth'
import { useLogoutMutation } from '../api/Logoutslice'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useGetpostQuery } from '../features/appslice'

const nav = () => {
  const { id, User, Isadmin, username } = UseAuth()

  const { data } = useGetpostQuery("", {
    pollingInterval: 1000,
    refetchOnFocus: true,
  })
  
  const [LogOuts, { isLoading, isSuccess, isError, error }] = useLogoutMutation()
  const [user, setuser] = useState([])

  useEffect(() => {
    const man = async () => {
      if (data && data.entities && data.entities[id]) {
        const all = data.entities[id].transaction || [];
        setuser(all);
      }
    }
    man()
  }, [data, id])

  const { users } = obj()
  const [mem, setmem] = useState(JSON.parse(localStorage.getItem('arrs')) || [])
  const [role, setrole] = useState(JSON.parse(localStorage.getItem('roles')) || {})
  const navigate = useNavigate()

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("arrs")) || [];
    setmem(storedData);
  }, [localStorage.getItem('arrs')]) 

  const [me, setme] = useState([])

  useEffect(() => {
    let isMounted = true;
    if (isMounted && user.length) {
      const unreadNotifications = user.filter((u) => u.seen === false);
      localStorage.setItem("arrs", JSON.stringify(unreadNotifications.length));
      setme(unreadNotifications.length);
    }
    return () => {
      isMounted = false;
    };
  }, [user, data]);

  if (isError) {
    toast(error?.data?.message || "An error occurred");
  }

  const log = async () => {
    try {
      await LogOuts().unwrap()
    } catch (err) {
      toast(err.message)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        localStorage.removeItem("roles")
      }, 100);
      navigate('/form')
    }
  }, [isSuccess, navigate])

  const ref = useRef()
  const [opn, setopn] = useState(true)

  const open = () => {
    setopn(prev => !prev)
    ref.current.classList.toggle("showmenu")
  }

  const view = opn ? (
    <div className="menu_bar">
      <FaBars onClick={open} />
    </div>
  ) : (
    <div className="menu_bar">
      <FaTimes onClick={open} />
    </div>
  );

  let content;
  if (role?.Isadmin) {
    content = (
      <nav>
        <ul>
          <div className="all_li">
            <ToastContainer />
            <li><NavLink to={'/'}><span className='fa'><FaHome /></span> Home</NavLink></li>
            <li><NavLink to={'/Overview'}><span className='fa'><FaTasks /></span> Overview</NavLink></li>
            <li><NavLink to={'/Userlist'}><span className='fa'><FaUserAlt /></span> Userlist</NavLink></li>
            <li><NavLink to={'/loan_request'}><span className='fa'><FaMoneyCheckAlt /></span> Loan request</NavLink></li>
            <li><NavLink to={'/paybill'}><span className='fa'><FaMoneyBillAlt /></span> Bill</NavLink></li>
            <li><NavLink to={'/Add_fund'}><span className='fa'><FaHandHoldingUsd/></span> Add_fund</NavLink></li>
          </div>
          <div className="me">
            <li><NavLink to={'/Admin_Settings'}><span className='fa'><FaCog /></span> Settings</NavLink></li>
            <li onClick={log}><span className='fa'><FaDoorOpen /></span> Logout</li>
          </div>
        </ul>
      </nav>
    )
  } else if (role?.User) {
    content = (
      <nav>
        <ul>
          <div className="all_li">
            <li><NavLink to={'/'}><span className='fa'><FaHome /></span> Home</NavLink></li>
            <li><NavLink to={'/Card'}><span className='fa'><FaCreditCard /></span> Card</NavLink></li>
            <li><NavLink to={'/History'}><span className='fa'><FaHistory /></span> History</NavLink></li>
            <li style={{ position: "relative" }}>
              <NavLink to={'/notification'} style={{display:"flex"}} >
                <span className='fa'><FaBell /></span>
                <div className={mem > 0 ? 'bell' : null}>{mem > 0 ? mem:mem>99?"99+" : null}</div> Notifications
              </NavLink>
            </li>
          </div>
          <div className="me">
            <li><NavLink to={'/Setting'}><span className='fa'><FaCog /></span> Settings</NavLink></li>
            <li onClick={log}><span className='fa'><FaDoorOpen /></span> Logout</li>
          </div>
        </ul>
      </nav>
    )
  }

  return (
    <>
      <section className='nav_sec'>
        {view}
        <div className="nav" ref={ref}>
          {content}
          
        </div>
      </section>
    </>
  )
}

export default nav
