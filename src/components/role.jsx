import UserDash from "./User_dashbord";
import DashBord from "./Admin/DashBord";
import { useEffect,useState } from "react";
import React from 'react'
import UseAuth from "../hooks/UseAuth";
import { useGetpostQuery } from "../features/appslice";
const role = () => {

    const [man,setman]=useState(JSON.parse(localStorage.getItem("roles")))

     if(man.User){
         return <UserDash/>
         }
         else if(man.Isadmin){
             return <DashBord/>
         }

}

export default role