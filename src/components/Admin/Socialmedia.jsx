import React from 'react'
import { FaWhatsapp, FaInstagram,FaTwitter } from 'react-icons/fa'
import employeeChart from './soschart'
// import '../index2.css'

const Socialmedia = () => {

  const {instagrams,twite,facebooks}=employeeChart()

  return (
    <main className='social_media'>
      <div className="social">
        {instagrams}

    <div className="max">
        <p>followers <span>0</span></p>
        <p>Likes <span>0</span></p>
        </div>
      </div>
      <div className="social">
            {/* <FaWhatsapp className='sos whatsapp'/>  */}
            {facebooks}
        <div className="max">
        <p>friends <span>0</span></p>
        <p>Likes <span>0</span></p>
        </div>
        </div>
      <div className="social">
        {twite}
        <div className="max">
        <p>followers <span>0</span></p>
        <p>Twittes <span>0</span></p>
        </div>
        </div>
        <br /><br /><br /><br /><br />
    </main>
  )
}

export default Socialmedia
