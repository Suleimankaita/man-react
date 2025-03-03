import { selectAll } from "../../../features/appslice";
import React, { useState } from 'react'
import { useSelector as select } from "react-redux";
import { useState as state ,useEffect as eff } from "react";
import { useGetpostQuery as get } from "../../../features/appslice";
import Useauth from "../../../hooks/UseAuth";
// import overviewCharts from "./overviewCharts";
const chartData = () => {


    const {id}=Useauth()
    // const {alldates,arr}=overviewCharts()
    const datetime=new Date().toDateString()

    const {data:da,isSuccess,isLoading,isError,error}=get("getdata",{
      pollingInterval:1000,
      refetchOnFocus:true,
      refetchOnMountOrArgChange:true
    })

    // const [dates,setdates]=state(new Date().toISOString().split("T")[0])
//     const [dates,setdates]=state(new Date().toISOString().split("T")[0])
//     const [view,setview]=state()
//     const [userlength,usersetlength]=state()
//     const [Totaltransaction,setTotaltransaction]=state()
    const selects=select(selectAll)





let dates=[];
let billdate=[];
let loan_date=[];
let billtime=[];
let loan_time=[];
let billamount=[];
let loan_amount=[];
let alldates=[];
let datas;
let todayss;
let sum;
let arr=[];
let amounte=[];
let todays_amount=[];
let als=[]
let isMounted=true 
// const [amounte,setamounte]=state()
const [amount,setamount]=state()
const [amounts,setamounts]=state()
const [Totalamount,setTotalamount]=state()
const [date,setdate]=state(new Date().toISOString().split("T")[0])

  const [users,setusers]=state(
    {
      labels:[],
      datasets:[
        {
          label:'',
          data:[],
          borderColor:"red",
          boderWidth:3,
          borderColor:["yellow",'blue','tomato','green'],
          hoverOffset:3,

        }
      ]
    }
  )
  
  const [bookings,setbookings]=state({
    labels:[],
    datasets:[
      {
        label:"",
        data:[],
        boderWidth:2,
        hoverOffset:4,
        borderColor:"red",
        backgroundColor:"blue"
      }
    ]
  })
  const [userlength,usersetlength]=state()

  const [book,setbook]=state({
    labels:[],
    datasets:[
      {
        label:"",
        data:[],
        boderWidth:2,
        hoverOffset:4,
        borderColor:"red",
        backgroundColor:"blue"
      }
    ]
  })
  const [lines,setlines]=state({
    labels:[],
    datasets:[{
      label:"",
      data:[],
      borderColor:"blue",
      borderWidth:2,
      fill:true,
      hoverOffset:3,  
    }] 
  })
  const [line2,setline2]=state({
    labels:[],
    datasets:[{
      label:"",
      data:[],
      borderColor:"blue",
      borderWidth:2,
      fill:true,
      hoverOffset:3,  
    }] 
  })
  const [transac,settransac]=state({
    labels:[],
    datasets:[{
      label:"",
      data:[],
      borderColor:"blue",
      borderWidth:2,
      fill:true,
      hoverOffset:3,  
    }] 
  })

  const [todays,settodays]=state({
    labels:[],
    datasets:[{
      label:"",
      data:[],
      borderColor:"blue",
      borderWidth:2,
      fill:true,
      hoverOffset:3,  
    }] 
  })
  let usersl=[]

  const [paid,setpaid]=state()
  let createdAt=[];
  const [ms,setms]=useState('');
  const [mq,setmq]=useState('');

  

  eff(()=>{
    const man=async()=>{
      if(isSuccess&&isMounted){

        const {ids,entities}=da


        ids.forEach(id => {
      
          const charts = entities[id];
      
          if (!charts) {
            return;
          }
      
          createdAt.push(charts.createdAt);
          usersetlength(ids.length);
      
          console.log("Charts:", charts);
      
          if (!Array.isArray(charts.transaction)) {
            console.error(`charts.transaction is not an array for id ${id}`);
            return;
          }
      
          charts.transaction.forEach(date => {
            amounte.push(date.amount);
          });
      
          setTotalamount(amounte.length ? amounte.reduce((sum, amounts) => sum + amounts, 0) : 0);
        });
      };
}
man()
return()=>{
  isMounted=false
}

  },[da])
  eff(()=>{
    const man=async()=>{
      setamounts('ma')
      
    if(isSuccess&&isMounted ){

      const {ids,entities}=da
    
      const man=ids.map(id=>{
       
        const charts=entities[id]
        

        const tr=charts.transaction.map(date=>{
          amounte.push(date.amount)
          return date
        })
        setTotalamount(amounte.reduce((sum,amounts)=>{
          return sum+amounts
        }))
          
          const maps=tr.filter(trans=>{
            return trans.date===date
          })
          const bil=charts.bills.map(date=>{
            return date
          })
          const loan=charts.Loan.map(date=>{
            console.log(date)
            return date
          })
          const bil2=bil.filter(trans=>{
            return trans.date===date
          })
          
          const loan2=loan.filter(trans=>{
            return trans.date===date
          })
          
          const ml =bil2.map(p=>{
              
            billtime.push(p.time)
            billamount.push(p.amount)
            billdate.push(p.date)
            // todays_amount.push(p.amount)
          
          })
          loan2.map(p=>{
            loan_time.push(p.time)
            loan_amount.push(p.amount)
            loan_date.push(p.date)
            console.log("loans",p.amount)
            // todays_amount.push(p.amount)
            
          })
          console.log(loan2)
          
            
      //  maps.map(p=>)
        datas=maps.map(p=>{
          
          console.log('s'+p.amount)
        dates.push(p.time)
        arr.push(p.amount)
        alldates.push(p.date)
        todays_amount.push(p.amount)
      })


      // if(ml.length){

        setms(billamount.reduce((sum,pr)=>sum+pr,0))
    
     
      console.log(loan_amount.reduce((sum,pr)=>sum+pr,0))
      const md=loan_amount.reduce((sum,pr)=> sum+pr,0)

      sum=md
      console.log("sums"+md)
      setmq(md)
      
      if(maps.length){
        setamount(todays_amount.reduce((sum,amounts)=>{
          return  sum+amounts
        }))
        setpaid(amount%100)
      }
    })

    

    setlines({
      labels:alldates,
      datasets:[{
          label:'Userchart',
          data:arr,
          borderWidth: 2,
            // backgroundColor: 'rgba(220, 220, 220, 0.93)',
              
                pointHighlightStroke: 'rgba(178, 61, 61, 0)',
                borderWidth: 4,
                // fill: true, // for Line chart
                borderColor: 'rgb(0, 123, 255)',
                pointHighlightFill: '#fff',
                // pointHighlightStroke: 'rgba(151, 187, 205, 1)',
               pointBackgroundColor: 'rgb(209, 37, 37)',
              pointBorderColor: 'blue',
              fill: {
                target: { value: 50 }, // Threshold value for filling
                above: 'rgba(0, 102, 255, 0.3)', 
              },
              pointRadius: 1,    
              tension: 0.4, 
              
    }]       
  }) 
    setline2({
      labels:billdate,
      datasets:[{
          label:'Userchart',
          data:billamount,
          borderWidth: 2,
               fill: {
                above:'rgb(18, 131, 237)',}, 
              pointHighlightStroke: 'rgba(178, 61, 61, 0)',

              borderColor: 'rgba(151, 187, 205, 1)',
              pointHighlightFill: '#fff',
                  pointHighlightStroke: 'rgba(151, 187, 205, 1)',
              pointBackgroundColor: 'rgb(98.171875, 96.5, 203.5)',
            pointBorderColor: 'rgb(98.171875, 96.5, 203.5)',
            pointRadius:4,

                tension:0.4
    }]       }) 
    settransac({
      labels:dates,
      datasets:[{
          label:'Userchart',
          data:arr,
          borderColor: 'rgb(0, 123, 255)',
          backgroundColor:"rgb(0, 242, 255)",
          pointRadius:5,
          boderWidth:3,
          hoverOffset:7,
          fill: false,
    }]        
  })
  //   settodays({
  //     labels:alldates,
  //     datasets:[{
  //         label:'Userchart',
  //         data:todayss,
  //         borderColor: ['rgb(0, 123, 255)','rgb(0, 123, 255)'],
  //         backgroundColor:["rgb(0, 242, 255)",'rgb(179, 0, 255)'],
  //         pointRadius:5,
  //         boderWidth:3,
  //         hoverOffset:7,
  //         fill: false,
  //   }]        
  // })
    settodays({
      labels:dates,
      datasets:[{
          label:'',
          data:arr,
          borderColor: ["rgb(85, 255, 0)",'rgb(0, 255, 208)'],
          backgroundColor:["rgb(85, 255, 0)",'rgb(0, 255, 208)'],
          pointRadius:5,
          boderWidth:3,
          hoverOffset:7,
          fill: false,
    }]        
  })


  setusers(
    {
      labels:createdAt,
      datasets:[
        {
          label:'man',
          data:[1,2,3,4,2,2,1,2],
          boderWidth:8,
          fill:false,
            pointRadius:4,

          // pointHighlightFill:4,
          tension:0.4,

          borderColor: 'rgb(219, 132, 33)',
          backgroundColor:["rgb(255, 157, 0)",'rgb(0, 149, 255)'],

          hoverOffset:3,

        }
      ]
    }
  )

  setbookings(
    {
      labels:createdAt,
      datasets:[
        {
          label:'man',
          data:usersl,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          //                 label: 'Transactions',

          boderWidth:3,
          hoverOffset:3,

        }
      ]
    }
  )
  setbook(
    {
      labels:loan_date,
      datasets:[
        {
          label:'man',
          data:loan_amount,
          boderWidth:3,
          // borderColor:["rgb(0, 102, 255)",'rgb(255, 230, 0)','tomato','green'],
          borderColor: ['rgb(66, 203, 94)','rgb(200, 201, 203)'],
          backgroundColor:["rgb(255, 0, 247)",'rgb(255, 153, 0)','rgb(0, 255, 34)','tomato',],
          hoverOffset:3,

        }
      ]
    }
  )

}
}

man()

return () => {
isMounted = false; 
};

  },[da,date])




return{ms,lines,setlines,date,sum,setdate,isLoading,isSuccess,billamount,isError,amount,Totalamount,setTotalamount,users,bookings,transac,todays,book,alldates,userlength,line2,usersl,Totalamount,amount,paid,loan_amount,mq}
}

//   return {Totaltransaction,dat,dates,setdates,datas,pie,data,line,line2,user,userlength}
// }


export default chartData

