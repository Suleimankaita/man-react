// import overviewCharts from '../overviewCharts';
import React from 'react'
import { useState as  state,useEffect as eff } from 'react';
// import chartData from '../chartData';
import { Bar,Line,Pie  } from 'react-chartjs-2';

import opt from '../../hooks/options';
import { useGetpostQuery as get } from '../../features/appslice';
import { FaFacebook, FaInstagram,FaTwitter } from 'react-icons/fa'
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
    layouts,
    Filler
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
    // zoomPlugin,
    Filler
  );

const employeeChart = () => {
const {data:da,isSuccess,isLoading,isError,error}=get("getdata",{
      pollingInterval:1500,
      refetchOnFocus:true,
      refetchOnMountOrArgChange:true
    })
    const {opt2,options,options2,optionss}=opt()

    
let dates=[];
let alldates=[];
let datas;
let todayss;
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

  
    const [instagram,setinstagram]=state({
        labels:[],
        datasets:[
            {
                label:'booking',
                data:[],
                fill:true,
                boderWidth:3,
                pointerRadius:0,
                hoverOffset:7,
                borderColor:"rgb(28, 155, 177)",
                backgroundColor:"blue",
                fill:{
                    above: 'rgba(0, 102, 255, 0.3)',
                
                }               
            }
        ]
    }) 
    const [facebook,setfacebook]=state({
        labels:[],
        datasets:[
            {
                label:'booking',
                data:[],
                fill:true,
                boderWidth:3,
                pointerRadius:0,
                hoverOffset:7,
                borderColor:"rgb(28, 155, 177)",
                backgroundColor:"blue",
                fill:{
                    above: 'rgba(0, 102, 255, 0.3)',
                
                }               
            }
        ]
    }) 
    const [twit,settwit]=state({
        labels:[],
        datasets:[
            {
                label:'booking',
                data:[],
                fill:true,
                boderWidth:3,
                pointerRadius:0,
                hoverOffset:7,
                borderColor:"rgb(28, 155, 177)",
                backgroundColor:"blue",
                fill:{
                    above: 'rgba(0, 102, 255, 0.3)',
                
                }               
            }
        ]
    }) 
    const [userschart,setuserschart]=state({
        labels:[],
        datasets:[
            {
                label:'',
                data:[],
                borderColor:"blue",
                boderWidth:6,
                fill:true,
                hoverOffset:3,  
            }
        ]
    }) 


    eff(()=>{
        const man=async()=>{
          if(isSuccess&&isMounted){
    
        const {ids,entities}=da
    
    
        const man=ids.map(id=>{
           
          const charts=entities[id]
          createdAt.push(charts.createdAt)
          // usersetlength([ids.length])
          usersl.push(charts.userId)
          const userid=usersl.reduce((sum,total)=>{
            return sum+total
          })
          usersetlength(usersl.length)
    
          //  const ml=charts.map(po=>{
          //   })
            // usersetlength(userid)
           const tr=charts.transaction.map(date=>{
              amounte.push(date.amount)
              return date
            })
          setTotalamount(amounte.reduce((sum,amounts)=>{
            return sum+amounts
          }))
        })
      }
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
            // arr=[]
              
              const maps=tr.filter(trans=>{
                return trans.date===date
              })
              
              
              
          //  maps.map(p=>)
            datas=maps.map(p=>{
              
            dates.push(p.time)
            arr.push(p.amount)
            alldates.push(p.date)
            todays_amount.push(p.amount)
          
          })
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
                backgroundColor: 'rgba(220, 220, 220, 0.93)',
                  
                    pointHighlightStroke: 'rgba(178, 61, 61, 0)',
                    borderWidth: 4,
                    // fill: true, // for Line chart
                    borderColor: 'rgb(0, 123, 255)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
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
          labels:alldates,
          datasets:[{
              label:'Userchart',
              data:arr,
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
              data:usersl,
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
          labels:dates,
          datasets:[
            {
              label:'man',
              data:arr,
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
    
    eff(()=>{
    
      setinstagram({
          labels:["mon","Tue","Wed"],
            datasets:[
                {
                    label: 'System Usage (%)',
                    data:[121,112,223],
                    borderColor: 'rgb(255, 94, 83)', // Line color
                    borderWidth: 2,
                    pointRadius: 0, // Remove points for smoother line
                    fill: {
                      target: { value: 50 }, // Threshold value for filling
                      above: 'rgb(242, 78, 66)', // Green for above threshold
                      below: 'rgba(255, 0, 0, 0.3)', // Red for below threshold
                    },
                    tension: 0.4, // Smooth the line
                  },]
        });
        settwit({
            labels:["mon","Tue","Wed"],
            datasets:[
                {
                    label: 'System Usage (%)',
                    data:[121,112,223],
                    borderColor: 'rgb(50, 143, 205)', // Line color
                    borderWidth: 2,
                    pointRadius: 0, // Remove points for smoother line
                    fill: {
                      target: { value: 50 }, // Threshold value for filling
                      above: 'rgb(25, 163, 255)', // Green for above threshold
                      below: 'rgba(255, 0, 0, 0.3)', // Red for below threshold
                    },
                    tension: 0.4, // Smooth the line
                  },]
                });
        setfacebook({
            labels:["mon","Tue","Wed"],
            datasets:[
                {
                    label: 'System Usage (%)',
                    data:[121,112,223],
                    borderColor: 'rgb(50, 143, 205)', // Line color
                    borderWidth: 2,
                    pointRadius: 0, // Remove points for smoother line
                    fill: {
                      target: { value: 50 }, // Threshold value for filling
                      above: 'rgb(25, 163, 255)', // Green for above threshold
                      below: 'rgba(255, 0, 0, 0.3)', // Red for below threshold
                    },
                    tension: 0.4, // Smooth the line
                  },]
        });

        setuserschart({
            labels:["mon","Tue","Wed","a","sd","s","aa"],
            datasets:[{
                label:'Userchart',
                data:[1,21,1300,1,22,2223,212,234,2332,11310],
                borderColor: 'rgb(0, 123, 255)',
                backgroundColor:"blue",
                pointRadius:5,
                boderWidth:3,
                hoverOffset:7,
                fill: {
                target: { value: 10 },
                above: 'rgba(0, 102, 255, 0.3)',
                // below: 'rgba(255, 0, 0, 0.3)', 
                            },
            }
        
        ]


            
        })


    },[])

     const Line1=(
        <Line data={lines} options={{
            responsive:true,
            maintainAspectRatio:false,
            plugins:{
                title:{display:false},
                legend:{display:true,position:"top"},
                zoom:{
                    pan:{enabled:true,
                        mode:"x"
                    },
                    zoom:{
                        wheel:{
                            enabled:true
                        },
                        pinch:{
                            enabled:true
                        },
                        mode:"x"
                    }
                }
            },
            scales:{
                x:{
                    grid:{display:false},
                    ticks:{display:false},
                    border:{display:false},
                },        
                y:{
                    grid:{display:true},
                    ticks:{display:true,autoSkip:true},
                    border:{display:false},
                },
                suggestedMin: 0, 
                suggestedMax: 3000, 
            },
        layout:{
            padding:10
        }
    }
        
        }/>
     )

     const Line2=(
        <Line data={lines} options={{
            responsive:true,
            maintainAspectRatio:false,
            plugins:{
                legend:{display:false},
                title:{position:"top"},
              
            },
            scales:{
                x:{
                    grid:{display:false},
                    border:{display:false},
                    ticks:{display:false},
                },
                y:{
                    grid:{display:false},
                    border:{display:false},
                    ticks:{display:false},
                    suggestedMin: 0, 
                    suggestedMax: 100,
                },

            },
            layouts:{padding:10}
        }}/>
     )
     const Lines2=(
        <div className="container">
        
              
                <div className="con1 cx1 ">
               
                <div className="view_status">
               
                    <h1>Total  bookings</h1>
               
                    <span>30</span>
               
                </div>
            <Line  data={todays} options={options} />
        
                </div>
                
                <div className="con1 cx2">
                <div className="view_status">
                    <h1>Total  transactions</h1>
                    <span>{amount>=1000000?`${Number(amount).toLocaleString()}m`:amount>999?`${Number(amount).toLocaleString()}k`:Number(amount)||0.00}</span>
                </div>
                <Bar data={bookings} options={options}/>
                </div>
                
                
                <div className="con1 cx3">
                <div className="view_status">
                    <h1>Total Users</h1>
                    <span>{userlength}</span>
                </div>
                    <Line data={users} options={options} width={"100px"}  />
        
                </div>
        
              </div>
        
     )
     const bookline=(
        <Line data={lines} options={{
            responsive:true,
            maintainAspectRatio:false,
            plugins:{
                legend:{display:false},
                title:{position:"top"},
              
            },
            scales:{
                x:{
                    grid:{display:false},
                    border:{display:false},
                    ticks:{display:false},
                },
                y:{
                    grid:{display:false},
                    border:{display:false},
                    ticks:{display:false},
                    suggestedMin: 0, 
                    suggestedMax: 100,
                },

            },
            layouts:{padding:10}
        }}/>
     )
     const transactionsline=(
        <Bar data={users} options={{
            responsive:true,
            maintainAspectRatio:false,
            plugins:{
                legend:{display:false},
                title:{position:"top"},
              
            },
            scales:{
                x:{
                    grid:{display:false},
                    border:{display:false},
                    ticks:{display:false},
                },
                y:{
                    grid:{display:false},
                    border:{display:false},
                    ticks:{display:false},
                    suggestedMin: 0, 
                    suggestedMax: 100,
                },

            },
            layouts:{padding:10}
        }}/>
     )
     const instagrams=(< div style={{height:"70%",position:'relative',width:"100%"}}>
        <FaInstagram className='sos twitter' />
        <Line data={instagram} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }, 
            },
            scales: {
              x: {
                border:{display:false},
                grid: { display: false }, 
                ticks: { display: false }, 
              },
              y: {
                border:{display:false},
                grid: { display:false }, 
                ticks: {display:false,},
                suggestedMin: 0, 
                suggestedMax: 100, 
              },
            },
            layouts:{padding:10,backgroundColor:"transparent"}
        }}/>
     </div>)
     
     const twite=(< div style={{height:"70%",position:'relative',width:"100%"}}>
        <FaTwitter className='sos twitter' />
        <Line data={twit} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }, 
            },
            scales: {
              x: {
                border:{display:false},
                grid: { display: false }, 
                ticks: { display: false }, 
              },
              y: {
                border:{display:false},
                grid: { display:false }, 
                ticks: {display:false,},
                suggestedMin: 0, 
                suggestedMax: 100, 
              },
            },
            layouts:{padding:10,backgroundColor:"transparent"}
        }}/>
     </div>)
     
     const facebooks=(< div style={{height:"70%",position:'relative',width:"100%"}}>
        <FaFacebook className='sos twitter' style={{position:"absolute",left:120,top:20, right:0}}/>
        <Line data={twit} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }, 
            },
            scales: {
              x: {
                border:{display:false},
                grid: { display: false }, 
                ticks: { display: false }, 
              },
              y: {
                border:{display:false},
                grid: { display:false }, 
                ticks: {display:false,},
                suggestedMin: 0, 
                suggestedMax: 100, 
              },
            },
            layouts:{padding:10,backgroundColor:"transparent"}
        }}/>
     </div>
     
     )

     
     // return{lines,setlines,date,setdate,isLoading,isSuccess,isError,amount,Totalamount,setTotalamount,users,bookings,transac,todays,book,alldates,userlength,line2,usersl,Totalamount,amount,paid}
     // }
  return{Line1,Line2,instagrams,twite,facebooks,lines,setlines,date,setdate,isLoading,isSuccess,isError,amount,Totalamount,setTotalamount,users,bookings,transac,todays,book,alldates,userlength,line2,usersl,Totalamount,amount,paid,transactionsline,bookline,Lines2}
}

export default employeeChart
