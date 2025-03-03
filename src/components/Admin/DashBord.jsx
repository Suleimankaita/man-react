import React from 'react'
import UseAuth from '../../hooks/UseAuth'
import UserDash from './charts/Dashbord_chart'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import   '../style/index2.css'

import { Chart,
  Tooltip,
  BarElement,
  CategoryScale,
  Legend,
  ArcElement,
  Element,
  LineElement,
  LineController,
  LinearScale,
  PieController,
  PointElement,
  PolarAreaController
} from 'chart.js'
Chart.register(
Tooltip,
  BarElement,
  CategoryScale,
  Legend,
  ArcElement,
  LineElement,
  LineController,
  LinearScale,
  PieController,
  PointElement,
  PolarAreaController
)
import { useEffect } from 'react'
import Dashbord_chart from './charts/Dashbord_chart'
import { useGetpostQuery } from '../../features/appslice'
const DashBord = () => {

  const {data}=useGetpostQuery('',{
    pollingInterval:1000,
    refetchOnFocus:true
  })

  const {id,Isadmin,User}=UseAuth()
  
  useEffect(()=>{
    console.log(id)
  },[])

  let content;

  if(Isadmin){
    content=<DashBord/>
  }else if(User){
    content=<UserDash/>
  }
  
  return (
    <div className='main'>
      <Dashbord_chart/>
    </div>
  )
}

export default DashBord