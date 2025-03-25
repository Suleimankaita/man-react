import React from 'react'
import { FaBookmark } from 'react-icons/fa'
import { Bar,Bubble,Pie,Line,Doughnut } from 'react-chartjs-2';
import usechart from "./Charts"
import Useauth from '../../../hooks/UseAuth';
import { useState as state ,useEffect as eff} from 'react';
import { useGetpostQuery as get } from '../../../features/appslice';
// import { useUpdateUserMutation } from '../features/currentslice';
import Userlist from './Userlist';
import Socialmedia from '../Socialmedia';
import opt from '../../../hooks/options';
// import Calendar from 'react-calendar/dist/cjs/Calendar.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ArcElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    plugins,
  } from 'chart.js';
//   import zoomPlugin from "chartjs-plugin-zoom";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ArcElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    // zoomPlugin
  );

// import '../index2.css'


  


const UserDash = () => {

  const {username,status,id}=Useauth()

  const [view,setview]=state([])

  const {dat}=usechart()
//   const [ups]=useUpdateUserMutation()

  const {
    data:da,
    isLoading,
    isSuccess,
    isError,
    error
  }=get()

  const [ma,setma]=state([])

      eff(()=>{
      

        // setTimeout(() => {
let con;
          if(isSuccess){
            setTimeout(() => {
              const man=da.entities[id].transaction.map(po=>{
                con=po.amount
                return  setma(po)
              })
      
            }, 1000);
            
          }
        
    },[isSuccess,da])
    
  const transaction={
    id:id,
    amount:100,
    date:new Date().toDateString()
  }

  

    const {sum,mq,loan_amount,book,ms,lines,line2,users,userlength,Totalamount,amount,Totaltransaction,dates,setdates,usersl,bookings,paid}=usechart()
    
    const datetime=new Date().toDateString()

  const {opt2,options,options2,optionss}=opt()


    // const pay=async()=>{
    //   ups({transaction,id})
    // }

  
    
  return (
    <article className='main'>
      
      <div className="container">

       {/* <p>{JSON.stringify(status)}</p>    */}
       
        {/* <div className="con1 cx1 ">
       
        <div className="view_status">
       
            <h1>Total  bookings</h1>
       
            <span>0</span>
       
        </div>
    <Line  data={data} options={options} />

        </div>
         */}
        <div className="con1 cx1 ">
       
        <div className="view_status">
       
            <h1>Todays  Bills </h1>
       
            <span>₦{Number(ms).toLocaleString()} </span>
       
        </div>
    <Line  data={line2} options={options} />

        </div>
        
        <div className="con1 cx2">
        <div className="view_status">
            <h1>Todays  transactions</h1>
            <span>{Totalamount>=1000000?`${Number(Totalamount).toLocaleString()}m`:Totalamount>999?`${Number(Totalamount).toLocaleString()}k`:Number(Totalamount)||0.00}</span>
        </div>
        <Line data={lines} options={options}/>
        </div>
        
        <div className="con1 cx4">
        <div className="view_status">
            <h1>Todays Loan request</h1>
            <span>₦{Number(mq).toLocaleString()}</span>
        </div>
            <Line data={book} options={options} width={"300px"}  />

        </div>
        
        <div className="con1 cx3">
        <div className="view_status">
            <h1>Total Users</h1>
            <span>{userlength}</span>
        </div>
            <Bar data={users} options={options} width={"100px"}  />

        </div>

      </div>

      <div className="charts_con">
      {/* <div className="chart-container">

      </div> */}
      {/* <input type="date"
      value={dates}
        className="datepicker-input"
      onChange={(e)=>setdates(e.target.value)}
      /> */}
       {/* <Calendar  onChange={(e)=>setdates(e.target.value)} value={dates} /> */}
    <div className="alls">
      
      <div className="charts">
        <h1>{datetime}</h1>
       <Line height={"100%"} data={lines} options={opt2}
        />

      </div>
        <br /><br /><br /><br /><br /><br />

      {/* Social Media followers  */}
      {/* <Socialmedia/> */}
      
      {/* Userlist Component  */}
   <main className='userli' >
   <Userlist/>
   </main>

      </div>
      
      </div>

    </article>
  )
}

export default UserDash
