import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UseAuth from '../hooks/UseAuth'
import { FaUserAlt,FaHistory,FaPhoneAlt ,FaBell,FaQuestionCircle,FaCreditCard} from 'react-icons/fa'
const Setting = () => {
    
    const {Isadmin,User}=UseAuth()

    const [obj,setobj]=useState([
        {
            id:0,
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            id:1,
            name:"Transaction History",
            icon:<FaHistory/>
        },
        {
            id:2,
            name:"Faq",
            icon:<FaQuestionCircle/>
        },
        {
            id:3,
            name:"Contact us",
            icon:<FaPhoneAlt/>
        },
        {
            id:4,
            name:"Notifications",
            icon:<FaBell/>
        },
        {
            id:5,
            name:"Card",
            icon:<FaCreditCard/>
        },
        {
            id:6,
            name:"Userlist",
            icon:<FaUserAlt/>

        }
    ])
    const [adobj,setadobj]=useState([
        {
            id:0,
            name:"Profile",
            icon:<FaUserAlt/>
        },
        
        {
            id:2,
            name:"Faq",
            icon:<FaQuestionCircle/>
        },
        {
            id:3,
            name:"Contact us",
            icon:<FaPhoneAlt/>
        },
     
        
        {
            id:6,
            name:"Userlist",
            icon:<FaUserAlt/>

        }
    ])


    const objs=obj.slice(0,3).map(objs=>(
        <Link style={{color:'black'}} to={objs.name} key={objs.id} className="con_settings">
            <h1>{objs.name}</h1>
            <h1 style={{color:"dodgerblue"}}>{objs.icon}</h1>
        </Link>
    ))

    const objs2=obj.slice(3,6).map(objs=>(
        <Link style={{color:'black'}} to={objs.name} key={objs.id} className="con_settings">
            <h1>{objs.name}</h1>
            <h1 style={{color:"dodgerblue"}}>{objs.icon}</h1>
        </Link>
    ))

    let content;

    if(Isadmin){
        content=(
         <>
          <div className='settings1'>
                
            {adobj.slice(0,2).map(objs=>(
        <Link style={{color:'black'}} to={objs.name} key={objs.id} className="con_settings">
            <h1>{objs.name}</h1>
            <h1 style={{color:"dodgerblue"}}>{objs.icon}</h1>
        </Link>
    ))}

        </div>
                <div className='settings2'>
                    {adobj.slice(2,4).map(objs=>(
                         <Link style={{color:'black'}} to={objs.name} key={objs.id} className="con_settings">
                         <h1>{objs.name}</h1>
                         <h1 style={{color:"dodgerblue"}}>{objs.icon}</h1>
                     </Link>
                    ))}
                </div>
         </>   
        )
    }
    else if(User){
        content=(
            <>
             <div className='settings1'>
                {objs}
                </div>
                <div className='settings2'>
                {objs2}
                </div>
            </>   
           )
        }
        
    return (
    <div className="main">

    <div className='settings'>
        
       {content}

        </div>
    </div>
  )
}

export default Setting