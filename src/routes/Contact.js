import React from 'react';
import '../css/Contact.css';

//contact
//TODO: need icons for phone numbers, emails, and linkedin (look into materialUI)
export default function Contact() {
  return (
    <body className="Contact-body">
      <h1 className="Contact-h1">Contact Us!</h1>
      <p className="sub-title">If you have any inquiries, please use the contact form below.</p>

      <div id="Contact-container">


        <div className="Contact-info">
          <h3>Contact Information</h3>
          <p className="Contact-p2">text</p>
          <div className="icon-Text">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>Steven Navarro: 304-702-9445 </span>
          </div>
          <div className="icon-Text">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span className="Contact-span">Steven Navarro: san0014@mix.wvu.edu</span>
          </div>
        </div>


        <div className="social-media">
          <a href="#" className="icon-circle">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </div>


        <form className="Contact-form">
          <div className="column">
            <div className="form-group">
              <label className="Contact-label">First Name</label>
              <input className="Contact-textinput" type="text"></input>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input className="Contact-textinput" type="text"></input>
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <label>Email</label>
              <input className="Contact-emailinput" type="email"></input>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input className="Contact-telinput" type="tel"></input>
            </div>
          </div>
          <div className="column">
            <div className="form-group solo">
              <label>Please choose the category that best fits your inquiry.</label>
              <div id="radio-buttons">
                <div className="radio-button">
                  <input className="Contact-rb" type="radio" id="radiobugs" name="type" value="Bugs"></input><label for="radiobugs">Bugs</label>
                </div>
                <div className="radio-button">
                  <input className="Contact-rb" type="radio" id="radioproject" name="type" value="Project Questions"></input><label for="radioproject">Project Questions</label>
                </div>
                <div className="radio-button">
                  <input className="Contact-rb" type="radio" id="radiogames" name="type" value="Games"></input><label for="radiogames">Games</label>
                </div>
                <div className="radio-button">
                  <input className="Contact-rb" type="radio" id="radiofamily" name="type" value="Family Flash Cards"></input><label for="radiofamily">Family Flash Cards</label>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="form-group solo">
              <label>Message</label>
              <textarea></textarea>
            </div>
          </div>
          <div className="column">
            <div className="form-group solo right">
              <button className="primary">Send Message</button>
            </div>
          </div>
        </form>

      </div>
  </body>
  )
}

