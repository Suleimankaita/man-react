// import React, { useState } from "react";

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: ""
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form Submitted:", formData);
//         alert("Your message has been sent!");
//         setFormData({ name: "", email: "", message: "" });
//     };

//     return (
//         <div className="mqs">
//         <div className="contact-container">
//             <div className="contact-box">
//                 <h2>Contact KS Bank</h2>
//                 <p>We're here to help! Reach out with any questions or concerns.</p>

//                 <form onSubmit={handleSubmit}>
//                     <div className="input-group">
//                         <label htmlFor="name">Full Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             placeholder="Enter your full name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="email">Email Address</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div className="input-group">
//                         <label htmlFor="message">Your Message</label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             rows="5"
//                             placeholder="Write your message here..."
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                         ></textarea>
//                     </div>

//                     <button className="bs" type="submit">Send Message</button>
//                 </form>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Contact;

import React from 'react';
// import './ContactUs.css'; // Import the CSS file for styling

const ContactUs = () => {
  return (
<div className="main">

    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p className="subtitle">We're here to help! Reach out to us for any inquiries or assistance.</p>

      <div className="contact-info">
        <div className="contact-card">
          <h2>📞 Call Us</h2>
          <p>Customer Service: <a href="tel:+1-800-KS-BANK">1-800-KS-BANK</a></p>
          <p>International: <a href="tel:+1-123-456-7890">+1-123-456-7890</a></p>
        </div>

        <div className="contact-card">
          <h2>📧 Email Us</h2>
          <p>General Inquiries: <a href="mailto:info@ksbank.com">info@ksbank.com</a></p>
          <p>Support: <a href="mailto:support@ksbank.com">support@ksbank.com</a></p>
        </div>

        <div className="contact-card">
          <h2>📍 Visit Us</h2>
          <p>KS Bank Headquarters</p>
          <p>123 Financial Street, Suite 456</p>
          <p>New York, NY 10001, USA</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Enter the subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>

    <br /><br /><br /><br /><br />
    </div>
  );
};

export default ContactUs;
