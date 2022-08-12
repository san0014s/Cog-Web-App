import React, { useState } from 'react';


export default function Signup() {
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [interests, setInterests] = useState('');

  // function to update state of username with
  // value enter by user in form
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  // function to update state of date of birth (DOB) with value
  // enter by user in form
  const handleDOBChange = (e) => {
    setDOB(e.target.value);
  }
  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  // function to update state of password with
  // value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  // function to update state of confirm password
  // with value enter by user in form
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }

  // function to update state of interests
  // with value enter by user in form
  const handleInterestsChange = (e) => {
    setInterests(e.target.value);
  }
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    if (password != confPassword) {
      console.log("password Not Match");
      //TODO: instead of console.log, tell the user
    } else {
      console.log('A form was submitted with Name :"' + username +
      '" ,Date of Birth :"' + dateOfBirth + '" and Email :"' + email + '"');
      //TODO: Connect to the database/backend
    }
    e.preventDefault();
  }


  return<>
    <form onSubmit={(e) => { handleSubmit(e) }}>
    <h2> Start Improving Your Mental Health Today!</h2>
    <h3> Sign-up Form </h3>
    <label >
      Username:
    </label><br />
    <input type="text" value={username} required onChange={(e)=> { handleUsernameChange(e) }} /><br />
    <label>
      Password:
    </label><br />
    <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
    <label>
      Confirm Password:
    </label><br />
    <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
    <label>
      Email:
    </label><br />
    <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
    <label >
      Date of Birth:
    </label><br />
    <input type="text" value={dateOfBirth} required onChange={(e) => { handleDOBChange(e) }} /><br />
    <label >
      Interests (Optional):
    </label><br />
    <input type="text" value={interests} onChange={(e) => { handleInterestsChange(e) }} /><br />
    <input type="submit" value="Submit" />
    </form>
  </>
}