import React from 'react';
import '../contact.css';

export default function Contact(){
  return(
    <>
    <body>
    <h1>Contact Us!</h1>
    <p>lorem ipsum</p>
    
    <div id="contact-container">
      <div className="contact-info">
          <h3>Contact Information</h3>
          <p>text</p>
          <div className="icon-Text">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>Phone numbers</span>
          </div>
          <div className="icon-Text">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span>Email</span>
          </div>
          <div className="icon-Text">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            <span>linkedin</span>
          </div>
      </div>
      <div className="social-platforms">
        <div className="icon-circle">
          <i className="icon"></i>
        </div>
      </div>
      <form>
       
      </form>

    </div>
    </body></>
  )
}
    


