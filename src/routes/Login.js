import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SessionState from '../components/SessionState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setLoginFailed] = useState(false);
  const [loginInProgress, setLoginInProgress] = useState(false);

  const navigate = useNavigate();

   const showToastMessage = () => {
        toast.error('Incorrect username or password, please try again!', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

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

    fetch(`${process.env.REACT_APP_BACKEND_URL}/account/verifyLogin`, { // TODO: make protocol, ip address, and port(?) configurable
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginCredentials)
    }).then((response) => {
      return response.json() // turn the response body into json
    }).then((data) => { // use the response body as json
      if (!data || data < 0) {
        setLoginFailed(true);
        setLoginInProgress(false);
        showToastMessage();
        return;
      }

      SessionState.setId(data); // set the session state
      setLoginInProgress(false);
      setLoginFailed(false);
      navigate("/profile")
    }).catch((error) => { // catch any errors
      console.error(error)
      setLoginInProgress(false)
    })
  }

  return<>
   <div style={{    "position": "absolute",
            width: "100vw",
            height: "100vh",
            overflow: "auto",
            "background-color": "#fdf5df" }}>
    <div style={{  "position":"relative", "width": "400px",
  "height": "400px",
  "top" : "20vh",
  "border-radius": "50px",
  "background-color": "#2E7378",
  "margin": "auto",
  "box-sizing" : "content-box"}}>
    <h1 style={{"position":"relative", "top":"25px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}} > Welcome Back</h1>
    <h2 style={{"position":"relative", "top":"25px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}} > Login </h2>
    <form style={{"position":"relative", "text-align": "center",
             "justify-content": "center",
             "align-items": "center", "top":"75px"}} onSubmit={(e) => { handleSubmit(e) }}>
    <label style={{"position":"relative", "top":"0px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>
      Username:
    </label><br />
    <input type="text" value={username} required onChange={(e)=> setUsername(e.target.value) } /><br />
    <label style={{"position":"relative", "top":"0px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>
      Password:
    </label><br />
    <input type="password" value={password} required onChange={(e) => setPassword(e.target.value) } /><br />
    <input style={{"position":"relative", "top":"25px", width: "75px",
            height: "50px","margin": "auto", "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#2E7378"}} type="submit" value="Submit" />
    <p style={{"position":"relative", "top":"50px",  
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>Don't have an account? <a style={{"color": "#000000", "font": "Brush Script MT"}} href="/signup">Sign up!</a></p>
    </form>
    <div>
        <ToastContainer />
    </div>
    </div>
    </div>
  </>
}