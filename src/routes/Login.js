import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SessionState from '../components/SessionState';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginInProgress, setLoginInProgress] = useState(false);

  const navigate = useNavigate();

  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginInProgress) { // defend against spamming login button
      return;
    }
    setLoginInProgress(true);

    var loginCredentials = {
      username: username,
      password: password
    }

    fetch('http://localhost:8080/verifyLogin', { // TODO: make protocol, ip address, and port(?) configurable
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginCredentials)
    }).then((response) => {
      return response.json() // turn the response body into json
    }).then((data) => { // use the response body as json
      SessionState.setId(data); // set the session state
      setLoginInProgress(false);
      navigate("/profile")
    }).catch((error) => { // catch any errors
      console.error(error)
      setLoginInProgress(false)
    })
  }

  return<>
    <form onSubmit={(e) => { handleSubmit(e) }}>
    <h2> Welcome Back</h2>
    <h3> Login </h3>
    <label >
      Username:
    </label><br />
    <input type="text" value={username} required onChange={(e)=> setUsername(e.target.value) } /><br />
    <label>
      Password:
    </label><br />
    <input type="password" value={password} required onChange={(e) => setPassword(e.target.value) } /><br />

    {loginFailed && <><label style={{color: "red"}}>Username or password incorrect, please try again</label><br/></>}
    <input type="submit" value="Submit" />
    </form>
  </>
}