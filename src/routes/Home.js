
import React, { useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import "../css/Home.css"


//the following constants are what prints out for each button and the home page greeting
const greeting = "Welcome to the Cognitive Web Application";
const AboutButton = "Go to About Us";
const AccountButton = "Go to Your Account";
const GamesButton = "Go to Games";
const ContactButton = "Contact Us!";
const UpdateButton = "Updates";
const LoginButton = "TempLogin";
const SignupButton = "TempSignup";

//different button themes (just one right now)
const theme = { 
  black:{
    default: '#212121',
    hover: '#424242',
    textColor: '#fafafa'
  },
  blue:{
    default: '#70deea',
    hover: '#1ba7b6',
    textColor: '#fafafa'
  }
}

// This theme swaps `blue` and `black`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  color: ${props => theme[props.theme].textColor};
  font-family: Arial, sans-serif;
  font-size: 1.5em;
  outline: 0;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px;
  cursor: pointer;
  margin: 10px 10px;
  width: 18vw;
  height: 10vh;
  transition: ease background-color 250ms;

  //what happens when the user hovers over the button
  &:hover {
    background-color: ${props => theme[props.theme].hover};
  }

  //tag used to disable a button
  &:disabled {
    cursor: default;
    opacity: 0.7;
    &:hover {
      background-color: ${props => theme[props.theme].default};
    }
  }
`

Button.defaultProps = {
  theme: 'blue'
}

export default function Home() {

  const navigate = useNavigate();

  return <>
    <div className="body">
      <h1>Craft Your<span className="profile2"> Memory</span></h1>
      <p>Jump in head first and test your memory in various ways using our numerous games.</p>
      <p>Our games include Sliding Puzzles, Matching Games, Reaction Time Games, and much more.</p>
      <Button onClick = {() => navigate('/games')}>
        {GamesButton}
      </Button>
    </div>

    <div className="body2">
      <h1>Track Your<span className="profile"> Progress</span></h1>
      <p>Visit your Account and Track Your Progress over times in different areas of Memory</p>
      <Button onClick = {() => navigate('/account')}>
        {AccountButton}
      </Button>
    </div>

    <div className="body">
      <h1>Keep Up to Date on<span className="profile2"> New Features</span></h1>
      <p>Stay tuned and learn about upcoming updates within the application.</p>
      <Button onClick = {() => navigate('/updates')}>
        {UpdateButton}
      </Button>
    </div>

    <div className="body2">
      <h1>Meet the<span className="profile"> Team</span></h1>
      <p>Click here to learn about the team behind your favorite games on ENTER TEAM NAME.</p>
      <Button onClick = {() => navigate('/about')}>
        {AboutButton}
      </Button>
    </div>

    <div className="body">
      <h1>Contact<span className="profile2"> Support</span></h1>
      <p>Go here to contact the team about issues or questions regarding signing up and enjoying the games.</p>
      <Button onClick = {() => navigate('/contact')}>
        {ContactButton}
      </Button>
    </div>



    <Button onClick = {() => navigate('/login')}>
      {LoginButton}
    </Button>

    <Button onClick = {() => navigate('/Signup')}>
      {SignupButton}
    </Button>

    
  </>
}
