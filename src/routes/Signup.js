import React, { useState } from 'react';


export default function Signup() {
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [interests, setInterests] = useState('');

  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    if (password !== confPassword) {
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
    <input type="text" value={username} required onChange={(e)=> setUsername(e.target.value)} /><br />
    <label>
      Password:
    </label><br />
    <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} /><br />
    <label>
      Confirm Password:
    </label><br />
    <input type="password" value={confPassword} required onChange={(e) => setConfPassword(e.target.value)} /><br />
    <label>
      Email:
    </label><br />
    <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} /><br />
    <label >
      Date of Birth:
    </label><br />
    <input type="date" value={dateOfBirth} min="1900-01-01" required onChange={(e) => setDOB(e.target.value)} /><br />
    <label >
      Interests (Optional):
    </label><br />
    <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} /><br />
    <input type="submit" value="Submit" />
    </form>
  </>
}