import React from 'react'
import { useGetpostQuery as get } from '../../features/appslice'
import { useState as state ,useEffect as eff} from 'react'
// import chartData from './chartData'

const overviewCharts = () => {
    
    const {
        data:da,
        isSuccess,
        isLoading,
        isError,
        error

    }=get("overviewChart",{
      refetchOnFocus:true,
      refetchOnMountOrArgChange:true,
      pollingInterval:100,
    })

    let dates=[];
    let alldates=[];
    let billdate=[];
    let billtime=[];
    let billamount=[];
    let datas;
    let todayss;
    let arr=[];
    let amounte=[];
    let todays_amount=[];
    let als=[]
    let bills=[]
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
    
      eff(()=>{
        const man=async()=>{
          if(isSuccess&&isMounted){

        const {ids,entities}=da


        const man=ids.map(id=>{
           
          const charts=entities[id]
           const tr=charts.transaction.map(date=>{
              amounte.push(date.amount)
              return date
            })
            console.log(tr)
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
          console.log(amounts)
          
        if(isSuccess&&isMounted ){


          const {ids,entities}=da
        
          const man=ids.map(id=>{
           
            const charts=entities[id]
            

            const tr=charts.transaction.map(date=>{
              // amounte.push(date.amount)
              return date
            })
            const bil=charts.bills.map(date=>{
              // amounte.push(date.amount)
              return date
            })
            // console.log(tr)
            // setTotalamount(amounte.reduce((sum,amounts)=>{
            //   return sum+amounts
            // }))
            // arr=[]
              
              const maps=tr.filter(trans=>{
                console.log(trans)
                return trans.date===date
              })
              const bil2=bil.filter(trans=>{
                console.log(trans)
                return trans.date===date
              })
              
              
              
          //  maps.map(p=>)
            datas=maps.map(p=>{
              
            dates.push(p.time)
            arr.push(p.amount)
            alldates.push(p.date)
            todays_amount.push(p.amount)
          
          })
            datas=bil2.map(p=>{
              
            billtime.push(p.time)
            billamount.push(p.amount)
            billdate.push(p.date)
            // todays_amount.push(p.amount)
          
          })
          if(maps.length){
            setamount(todays_amount.reduce((sum,amounts)=>{
              return  sum+amounts
            }))
          }
        })

        

        setlines({
          labels:alldates,
          datasets:[{
              label:'Userchart',
              data:arr,
              borderColor: ['D99AC5','046865'],
              backgroundColor:["rgb(0, 242, 255)",'rgb(179, 0, 255)'],
              pointRadius:5,
              boderWidth:3,
              hoverOffset:7,
              fill: false,
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
          labels:dates,
          datasets:[
            {
              label:'man',
              data:arr,
              borderColor: ['rgb(232, 237, 233)','rgb(200, 201, 203)'],
              backgroundColor:["rgb(255, 157, 0)",'rgb(0, 149, 255)'],

              boderWidth:3,
              hoverOffset:3,

            }
          ]
        }
      )
      setbookings(
        {
          labels:dates,
          datasets:[
            {
              label:'man',
              data:arr,
              boderWidth:3,
              // borderColor:["rgb(0, 102, 255)",'rgb(255, 230, 0)','tomato','green'],
              borderColor: ['rgb(232, 237, 233)','rgb(200, 201, 203)'],
              backgroundColor:["rgb(255, 0, 247)",'rgb(255, 153, 0)','rgb(0, 255, 34)','tomato',],
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

    
    

  return{lines,setlines,date,setdate,isLoading,isSuccess,isError,amount,Totalamount,setTotalamount,users,bookings,transac,todays,book,alldates}
}

export default overviewCharts