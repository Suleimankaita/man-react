import React from 'react'
import { useState as state ,useEffect as eff} from 'react'
import { Bar,Doughnut,Line,Pie } from 'react-chartjs-2'
import { FaEllipsisV } from 'react-icons/fa';
// import Calendar from 'react-calendar/dist/cjs/Calendar.js';
import DatePicker from "react-datepicker";
import Chart  from './charts/Charts';
import "react-datepicker/dist/react-datepicker.css";
import overviewCharts from './overviewCharts';
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
import zoomPlugin from "chartjs-plugin-zoom";
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
  zoomPlugin
);


const overview = () => {

  const [allamounts,setallamounts]=state()
  const {lines,date,setdate,todays,isLoading,transac,isSuccess,bookings,isError,amount,setTotalamount}=overviewCharts()
  let million;
  let amountse;

  const {book,line2,users,Totalamount}=Chart()
  
// 
  eff(()=>{
    if(Totalamount>=1000000||amount>=1000000){
      million=`${Number(Totalamount).toLocaleString()}m`
      amountse=`${Number(amount).toLocaleString()}m`
    // console.log(million)
    }else if(amount>=1000||Totalamount>1000){
      million=`${Number(Totalamount).toLocaleString()}k`
      amountse=`${Number(amount).toLocaleString()}k`
    }  
  
  },[date])

  if(isLoading){
      return <div className='load_parent'>
      <div className="loader"></div>
      </div>
  }else if(isSuccess){
    return      <article className='Overview'>
    <div className="flex_overview">
  <div className="transactions">
    <div className="inps">
    {/* <input type="date"
  value={date}
  onChange={(e)=>setdate(e.target.value.split("T")[0])}
  /> */}
   <DatePicker
        selected={date}
        onChange={(e)=>setdate(e.toISOString().split("T")[0])}
        inline
        className="custom-datepicker" // Optional for input styling
        calendarClassName="custom-calendar" // Add custom class for calendar
      />
  </div>
    
    
    </div>
  <div className="transactions">
    <div className="h">
      <div className="vert">

  <h3>Todays Loan Request </h3>
  <FaEllipsisV/>
  </div>
  <span>&#8358;{Totalamount>=1000000?`${Number(Totalamount).toLocaleString()}m`:Totalamount>999?`${Number(Totalamount).toLocaleString()}k`:Number(Totalamount)||0.00}</span>
  </div>
  <br />
  <div className="line3">
  <Bar   data={book} options={{
    responsive:true,
               maintainAspectRatio:false,
               plugins:{
                   legend:{display:false},
                   zoom:{
                       pan:{
                           enabled:true,
                           mode:"x"
   
                       },
                       zoom:{
                           pinch:{enabled:true},
                           wheel:{enabled:true},
                           mode:"x"
                       },
                   }
               },
             scales:{
              x:{
                border:{display:false},
                grid:{display:false},
                ticks:{display:false},
              },
              y:{
                border:{display:false},
                grid:{display:false},
                ticks:{display:false},
              },
             },
   
               
  }}  />
  </div>
    
    </div>
  <div className="transactions">
    <div className="h">
      <div className="vert">

  <h3>Todays Biil Payment  </h3>
  <FaEllipsisV/>
  </div>
  <span>&#8358;{Totalamount>=1000000?`${Number(Totalamount).toLocaleString()}m`:Totalamount<999?`${Number(Totalamount).toLocaleString()}K`:Number(Totalamount)||0}</span>
  </div>
  <br />
  <div className="line3">
  <Bar   data={line2} options={{
    responsive:true,
               maintainAspectRatio:false,
               plugins:{
                   legend:{display:false},
                   zoom:{
                       pan:{
                           enabled:true,
                           mode:"x"
   
                       },
                       zoom:{
                           pinch:{enabled:true},
                           wheel:{enabled:true},
                           mode:"x"
                       },
                   }
               },
             scales:{
              x:{
                border:{display:false},
                grid:{display:false},
                ticks:{display:false},
              },
              y:{
                border:{display:false},
                grid:{display:false},
                ticks:{display:false},
              },
             },
   
               
  }}  />
  </div>
    
    </div>

  </div>
<br />  
<br />  
  <div className='Overview_line'>
    
    <h2>Date {date}</h2>
  <br />

     <div className="line2">
      
      <Line   data={transac} options={{
        responsive:true,
               maintainAspectRatio:false,
               plugins:{
                   legend:{display:false},
                   title:{position:"top"},
                   zoom:{
                       pan:{
                           enabled:true,
                           mode:"x"
   
                       },
                       zoom:{
                           pinch:{enabled:true},
                           wheel:{enabled:true},
                           mode:"x"
                       },
                   }
               },
               layouts:{padding:10}
          }}  />

  </div>
  <br />
  </div>
  
  <div className="piechart">
    <div className="piec1">
    <div className="vert">
    <h3>Total Users</h3>
<FaEllipsisV/>
</div>
    <div className="piec">
    <Doughnut data={users} options={{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{display:false},
        title:{display:false}
      }
    }} />
    </div>
    </div>
    <div className="piec1">
    <div className="vert">
    <h3>Total Loan Request</h3>
<FaEllipsisV/>
</div>
    
    <div className="piec">
       <Pie data={book} options={{
          responsive:true,
          maintainAspectRatio:false,
          plugins:{
          legend:{display:false},
          title:{display:false}
      }}} />

    </div>
    </div>
  </div>
 
  </article>
  }
  
  else if(isError){
    return <p>connection timeout</p>
  }


  
  return (
   <>
 
   </>
  )
}

export default overview