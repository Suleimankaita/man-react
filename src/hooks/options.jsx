import React from 'react'

const options = () => {
 
 
     const options={
       resposive:true,
       maintainAspectRatio: false,
                 plugins:{
                  legend:{position:"top",display:false},
                  title:{display:true,} 
                 },
                 scales: {
                   x: {
                     grid: {
                       display: false, // Removes gridlines on x-axis
                     },
                     ticks: {
                       display: false, // Removes ticks on x-axis
                     },
                     border: {
                       display: false, // Removes the axis line (border) for x-axis
                     },
                   },
                   y: {
                     grid: {
                       display: false, // Removes gridlines on y-axis
                     },
                     border: {
                       display: false, // Removes the axis line (border) for x-axis
                     },
                     ticks: {
                       display: false, // Removes ticks on y-axis
                     },
                   },
                 },
                  layout: {
     padding: 0, // Add padding if necessary
   },
   backgroundColor: 'transparent',
     }
 
 
     const opt2={
       responsive:true,
       maintainAspectRatio:false,
       plugins:{
         legend:{position:"top",},
        //  zoom: {
        //    pan: {
        //      enabled: true,
        //      mode: "x", // Allow horizontal panning
        //    },
        //    zoom: {
        //      wheel: {
        //        enabled: true, // Allow zooming with the mouse wheel
        //      },
        //      pinch: {
        //        enabled: true, // Allow zooming with pinch gestures
        //      },
        //      mode: "x", // Only zoom along the x-axis
        //    },
        //  },
       },
       
       scales:{
         x:{
           grid:{
             display:false,
           },
           ticks:{
             display:false,
           },
           border:{
             display:false
           }
           
         },
        
         y: {
           grid: {
             display: true, 
           },
           label:{
             display:false
           },
           border: {
             display: false,
           },
           ticks: {
             display: true, 
             autoSkip: false, // Ensure all labels are shown

            },
 
           suggestedMin: 0, // Minimum y-axis value
           suggestedMax: 3000, // Ma
         },
         
       },
       layout:{
 
         padding:10
       }
       
     }
     const optionss = {
       responsive: true,
       plugins: {
         legend: {
           display: true,
           position: "top",
         },
        //  zoom: {
        //    pan: {
        //      enabled: true,
        //      mode: "x", // Allow horizontal panning
        //    },
        //    zoom: {
        //      wheel: {
        //        enabled: true, // Allow zooming with the mouse wheel
        //      },
        //      pinch: {
        //        enabled: true, // Allow zooming with pinch gestures
        //      },
        //      mode: "x", // Only zoom along the x-axis
        //    },
        //  },
       },
       scales: {
         x: {
           beginAtZero: true,
           ticks: {
             autoSkip: false, // Ensure all labels are shown
           },
         },
         y: {
           beginAtZero: true,
         },
       },
     };

     const options2 = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      scales: {
        x: {
          time: {
            displayFormats: false
          },
    
          display: false, // Disable x-axis ticks
        },
        y: {
         
    
          display: false, // Disable y-axis ticks
          time: {
            displayFormats: false
          },
        },
      },
      cutout: '50%',
    };
  
 

    return {opt2,options,options2,optionss}
}

export default options
