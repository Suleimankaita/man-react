import React from 'react'
import K from "../../assets/images/k2.jpg"
import { useState } from 'react'
import { FaMoneyBillAlt,FaMobileAlt,FaDigitalTachograph,FaTv,FaCoins,FaMoneyCheck,FaHandHoldingUsd,FaShieldAlt} from 'react-icons/fa'
const card = () => {
  return (
    <div className="main">
    <main className='all card_sec'>
        <div className="cards" >
            <div className="card_head">
                <h2>debit</h2>
                <h1>KS <span className="dot">.</span></h1>
            </div>
            {/* <div className="k" >
    <div className="k2" style={{backgroundImage:`url(${K})`}}> */}

    {/* </div> */}
            {/* </div> */}
            {/* <img src={K} alt="" width={300} height={100} /> */}
            <div className="sim">
                <div className="sim_con">
                </div>
            <span>|||</span>
            </div>
            <div className="con_h1">

              <h2>*****</h2>
            </div>
            <div className="buble_con">
              <div className="buble"></div>
            </div>
        </div>

        <div className="banner2">
            {/* <div className="max"> */}
        {/* < FaUniversity className='icon'/> */}

                    <div className="max" >
        <FaMoneyBillAlt   className='icon'/>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt molestiae, enim </p>
                    </div>
                    
                    <div className="max" >
        <FaCoins   className='icon'/>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur  a distinctio ipsum sed incidunt porro culpa ab!</p>
                    </div>
                    <div className="max" >
        <FaShieldAlt   className='icon'/>
        <br />
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. S, porro culpa ab!</p>
                    </div>
        </div>
        <div className="banner_2">
            {/* <div className="max"> */}
        {/* < FaUniversity className='icon'/> */}

                    <div className="max_2" >
        <FaMoneyBillAlt   className='icon'/>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. im </p>
                    </div>
                    
                    <div className="max_2" >
        <FaCoins   className='icon'/>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur  a porro culpa ab!</p>
                    </div>
                    <div className="max_2" >
        <FaShieldAlt   className='icon'/>
        <br />
                       <p>Lorem ipsum  consectetur adipisicing elit. S, porro culpa ab!</p>
                    </div>
        </div>
        <div className="get_start">
          <button>Request new card</button>
        </div>
    </main>
    </div>
  )
}

export default card