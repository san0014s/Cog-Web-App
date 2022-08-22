import React, { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // function to update state of username with
  // value enter by user in form
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  // function to update state of password with
  // value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    //TODO: Hookup to database/backend
    console.log('submit button clicked successfully');
    e.preventDefault();
  }

  return<>
    <form onSubmit={(e) => { handleSubmit(e) }}>
    <h2> Welcome Back</h2>
    <h3> Login </h3>
    <label >
      Username:
    </label><br />
    <input type="text" value={username} required onChange={(e)=> { handleUsernameChange(e) }} /><br />
    <label>
      Password:
    </label><br />
    <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
    <input type="submit" value="Submit" />
    </form>
  </>
}