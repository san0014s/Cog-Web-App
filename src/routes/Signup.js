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
      birthDate: dateOfBirth,
      interests: interests,
      picture: "https://cog-web-app-public-assets.s3.amazonaws.com/profile-pictures/default-pfp.jpg",
    }

    fetch(`${process.env.REACT_APP_BACKEND_URL}/account`, { // TODO: make protocol, ip address, and port(?) configurable
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
    <div style={{    "position": "absolute",
            width: "100vw",
            height: "120vh",
            overflow: "auto",
            "background-color": "#fdf5df" }}>
    <div style={{  "position":"relative", "width": "600px",
  "height": "600px",
  "top" : "20vh",
  "border-radius": "50px",
  "background-color": "#2E7378",
  "margin": "auto",
  "box-sizing" : "content-box"}}>
    <h2 style={{"position":"relative", "top":"50px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}> Start Improving Your Mental Health Today!</h2>
    <h3 style={{"position":"relative", "top":"50px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}> Sign-up Form </h3>
    <form style={{"position":"relative", "text-align": "center",
             "justify-content": "center",
             "align-items": "center", "top":"25px"}} onSubmit={(e) => { handleSubmit(e) }}>
    <label style={{"position":"relative", "top":"50px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>
      Preferred Name:
    </label><br />
    <input style={{"position":"relative", "top":"50px"}} type="text" value={name} required onChange={(e)=> setName(e.target.value)} /><br />
    <label style={{"position":"relative", "top":"50px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>
      Username:
    </label><br />
    <input style={{"position":"relative", "top":"50px"}} type="text" value={username} required onChange={(e)=> setUsername(e.target.value)} /><br />
    <label style={{"position":"relative", "top":"50px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>
      Password:
    </label><br />
    <input style={{"position":"relative", "top":"50px"}} type="password" value={password} required onChange={(e) => setPassword(e.target.value)} /><br />
    <label style={{"position":"relative", "top":"50px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>
      Confirm Password:
    </label><br />
    <input style={{"position":"relative", "top":"50px"}} type="password" value={confPassword} required onChange={(e) => setConfPassword(e.target.value)} /><br />
    <label style={{"position":"relative", "top":"50px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>
      Email:
    </label><br />
    <input style={{"position":"relative", "top":"50px"}} type="email" value={email} required onChange={(e) => setEmail(e.target.value)} /><br />
    <label style={{"position":"relative", "top":"50px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>
      Date of Birth:
    </label><br />
    <input style={{"position":"relative", "top":"50px"}} type="date" value={dateOfBirth} min="1900-01-01" required onChange={(e) => setDOB(e.target.value)} /><br />
    <label style={{"position":"relative", "top":"50px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>
      Interests (Optional):
    </label><br />
    <input style={{"position":"relative", "top":"50px"}} type="text" value={interests} onChange={(e) => setInterests(e.target.value)} /><br />
    <input style={{"position":"relative", "top":"75px", width: "75px",
            height: "50px","margin": "auto", "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#2E7378"}} type="submit" value="Submit" />
    <p style={{"position":"relative", "top":"100px",  
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}} >Already have an account? <a style={{"color": "#000000", "font": "Brush Script MT"}} href="/login">Log in!</a></p>
    </form>
    </div>
    </div>
  </>
}