import React from 'react'
import {FaSimCard,FaCaretDown,FaCaretRight,FaCarSide,FaUser,FaTimes, FaWallet,FaUnlockAlt} from 'react-icons/fa'

const Air_p = ({setname,airtime,open,setprice,price,show,click,sims,name,contents,mans,arr,change,index,phone, setphone}) => {
  
    const content=(
        open?
        <>
        <div className="ls2">
             <FaCaretDown onClick={show}/>
        </div>
        <div className="kq">
        {sims.map(cards=>(
           <div key={cards.id} className="simm2">
              <img src={cards.icon} width={30} height={30} className='sims_ra' />
              <p>{cards.name}</p>   
              <input type="radio" 
               checked={name?.id === cards.id} // Check if this card is selected
               onChange={(e) => {
                 setname(cards); // Update the selected card
               }}
              name={"cards"} />
           </div>
        ))}
        </div>
        </>
        :
        <div className="ls">
        <FaCaretRight onClick={show}/>
        </div>
        
      )

    return (
    <section className="main">
    
    <main className='all'>

        <div className="sims_card" >
        
            <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
        {arr.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt="" width={"100%"}  height={"90%"} />
          </div>
        ))}
      </div>
 <div className="carousel-controls">
        {/* <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button> */}
        {/* <button className="carousel-control next" onClick={nextSlide}>&#10095;</button> */}
      </div>
      </div>
        <br /><br />
          <div className="mn">
              <img src={name.icon} width={60} height={50} className='sims_ra' />
          <div style={{width:"20%",marginRight:30,height:"10px"}}>
              {content}
              {contents}
          </div> 
          {/* {mans} */}


          <div className="box_input2" style={{transform:"translateX(-50px)"}}>
            <input className='  ' type="number" value={phone} onInput={(e)=>setphone(e.target.value)} id="phone_no" placeholder='+234' />

            <div className="lis" >
          <FaUser />
        </div>


        </div>
          {/* <button className='btn'>pay</button> */}
         </div>
         <br />
         <br />
        <div className="datas">
          {airtime.map(air=>(

          <div key={air.id} className="boxs" onClick={()=>change(air)}>
              <p>cash pay</p>
              <h3>&#8358;{air.airtime}</h3>
              <p>pay</p>
          </div>

          ))}
{/* <div className="box_input">
            <input className='inps' type="number"  name="" id="phone_no" placeholder='50-10000' />
             <label htmlFor="phone_no">Number</label> 
        </div> */}
        
        <div style={{display:"flex",marginTop:"50px"}}>


          <div className="box_input2">
            <input className='inps' type="number"   onInput={(e)=>setprice(e.target.value)}  name="" id="phone_no" value={price}placeholder='50-10000' />
        </div>
          <button className='btn' onClick={click}>pay</button>
         </div>
         </div>
        <br />
        <br /><br />
        <br /><br /><br />
        <br /><br />
        <br /><br />
        </div>
        
          

    </main>
    </section>
  )
}

export default Air_p