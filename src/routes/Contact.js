import React from 'react';
import '../css/Contact.css';

//contact
//TODO: need icons for phone numbers, emails, and linkedin (look into materialUI)
export default function Contact() {
  return (
    <div className="Contact-body">
      <h1 className="Contact-h1">Contact Us!</h1>
      <p className="sub-title">If you have any inquiries, please use the contact form below.</p>

      <div id="Contact-container">


        <div className="Contact-info">
          <h3>Contact Information</h3>
          <div className="icon-Text">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>Steven Navarro: 304-702-9445 </span>
          </div>

          <div className="icon-Text">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>Karl Scheib: 304-240-0904 </span>
          </div>

          <div className="icon-Text">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>Jacob Taylor: 304-550-4823 </span>
          </div>

          <div className="icon-Text">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>Kryzstof Kudlak: 304-542-0034 </span>
          </div>

          <div className="icon-Text">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>Nathanial Arndt: 304-279-0677 </span>
          </div>

          <div className="icon-Text">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span className="Contact-span">Steven Navarro: san0014@mix.wvu.edu</span>
          </div>
        
          <div className="icon-Text">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span className="Contact-span">Karl Scheib: kes0049@mix.wvu.edu</span>
          </div>

          <div className="icon-Text">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span className="Contact-span">Jacob Taylor: jct0020@mix.wvu.edu</span>
          </div>

          <div className="icon-Text">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span className="Contact-span">Kryzstof Kudlak: kjk0027@mix.wvu.edu</span>
          </div>

          <div className="icon-Text">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span className="Contact-span">Nathanial Arndt: nsa0007@mi.wvu.edu</span>
          </div>
          
          <div className="social-media">
            <a href="#" className="icon-circle">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>


        <form className="Contact-form">
          <div className="column">
            <div className="form-group">
              <label className="Contact-label">First Name</label>
              <input className="Contact-input" type="text"></input>
            </div>
            <div className="form-group">
              <label className="Contact-label">Last Name</label>
              <input className="Contact-input" type="text"></input>
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <label className="Contact-label">Email</label>
              <input className="Contact-input" type="email"></input>
            </div>
            <div className="form-group">
              <label className="Contact-label">Phone Number</label>
              <input className="Contact-input" type="tel"></input>
            </div>
          </div>
          <div className="column">
            <div className="form-group solo">
              <label className="Contact-label">Please choose the category that best fits your inquiry.</label>
              <div id="radio-buttons">
                <div className="radio-button">
                  <input className="Contact-rb" type="radio" id="radiobugs" name="type" value="Bugs"></input><label htmlFor="radiobugs">Bugs</label>
                </div>
                <div className="radio-button">
                  <input className="Contact-rb" type="radio" id="radioproject" name="type" value="Project Questions"></input><label htmlFor="radioproject">Project Questions</label>
                </div>
                <div className="radio-button">
                  <input className="Contact-rb" type="radio" id="radiogames" name="type" value="Games"></input><label htmlFor="radiogames">Games</label>
                </div>
                <div className="radio-button">
                  <input className="Contact-rb" type="radio" id="radiofamily" name="type" value="Family Flash Cards"></input><label htmlFor="radiofamily">Family Flash Cards</label>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="form-group solo">
              <label className="Contact-label">Message</label>
              <textarea className="Contact-input"></textarea>
            </div>
          </div>
          <div className="column">
            <div className="form-group solo right">
              <button className="primary Contact-button">Send Message</button>
            </div>
          </div>
        </form>

      </div>
  </div>
  )
}

