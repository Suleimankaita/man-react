import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Nav from './nav'

const child_layout = () => {
  return (<>
        <Header/>
        <div className="fle">
        {/* <Nav /> */}

        <Outlet/>
        </div>

       
  </>

    // <main>
        
    //     <header className='header'>
        
        
            
    //      <Header/>
           
        
    //     </header>

      
    //   <article className="section">

    
    //    <Nav />
         

    // <Outlet/>


    //   </article>

    // </main>  

  )
}

export default child_layout