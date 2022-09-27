import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [interests, setInterests] = useState('');

  const navigate = useNavigate();

  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confPassword) {
      alert("Passwords do not match!")
      return;
    } 

    var accountToCreate = {
      name: name,
      username: username,
      password: password,
      email: email,
      dateOfBirth: dateOfBirth,
      interests: interests
    }

    fetch('http://localhost:8080/account', { // TODO: make protocol, ip address, and port(?) configurable
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(accountToCreate)
    }).then(() => {
      navigate('/login')
    }).catch((error) => { // catch any errors
      console.error(error)
    })
  }


  return<>
    <form onSubmit={(e) => { handleSubmit(e) }}>
    <h2> Start Improving Your Mental Health Today!</h2>
    <h3> Sign-up Form </h3>
    <label >
      Preferred Name:
    </label><br />
    <input type="text" value={name} required onChange={(e)=> setName(e.target.value)} /><br />
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
    <p>Already have an account? <a href="/login">Log in!</a></p>
    </form>
  </>
}