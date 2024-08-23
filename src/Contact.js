import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <header className="header">
        <h1>Contact Us : </h1>

      
      </header>
      <div className="main-content">
        <div className="contact-info">
          <div className="info-box">
            <span>📍</span>
            <div>
              <h3>Our Main Office</h3>
              <p> <b>SREE KRISHNA ENGINEERS AND CONSULTANCY</b><br></br>SMS Complex 1st floor, opp:RTC Bus stand,Guntur:522001</p>
              <p></p>
            </div>
          </div>
          <div className="info-box">
            <span>📞</span>
            <div>
              <h3>Phone Number</h3>
              <p>+91-7981382496</p>
              <p>+91-8121483823</p>
            </div>
          </div>
          <div className="info-box">
            <span>📞</span>
            <div>
              <h3>CONSULTANCY </h3>
              <p>+91-9246480109</p>
            </div>
          </div>
          <div className="info-box">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>sreekrishnaengineers8121@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2> ANY QURIES :Contact Us</h2>
          <form>
            <input type="text" placeholder="Enter your Name" required />
            <input type="email" placeholder="Enter a valid email address" required />
            <textarea placeholder="Enter your message" required></textarea>
            <button type="submit">Submit</button>
          </form>
          
      
</div>

        </div>
        </div>

  );
}

export default Contact;
