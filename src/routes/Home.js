import React, { useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import styled from 'styled-components';

//the following constants are what prints out for each button and the home page greeting
const greeting = "Welcome to the Cognitive Web Application";
const AboutButton = "Go to About Us";
const AccountButton = "Go to Your Account";
const GamesButton = "Go to Games";
const ContactButton = "Contact Us!";
const UpdateButton = "Updates";

//different button themes (just one right now)
const theme = { 
  black:{
    default: '#212121',
    hover: '#424242',
    textColor: '#fafafa'
  }
}

const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  color: ${props => theme[props.theme].textColor};
  font-family: Arial, sans-serif;
  font-size: 1.5em;
  outline: 0;
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
  theme: 'black'
}

export default function Home() {

  const navigate = useNavigate();

  const navigateAboutUs = () => {
    navigate('/about');
  }

  const naviagateAccount = () => {
    navigate('/account');
  }

  const naviagateGames = () => {
    navigate('/ReactionGame'); //TODO: Currently redirects to the reaction time game, will redirect to games page once that is made
  }

  const naviagateContactUs = () => {
    navigate('/contact');
  }

  const navigateUpdates = () => {
    navigate('/updates');
  }

  //TODO: Pages still needed: login, signup 

  return <>
    <div>{greeting}</div>
    <Button onClick = {navigateAboutUs}>
      {AboutButton}
    </Button>

    <Button onClick = {naviagateAccount}>
      {AccountButton}
    </Button>

    <Button onClick = {naviagateGames}>
      {GamesButton}
    </Button>

    <Button onClick = {naviagateContactUs}>
      {ContactButton}
    </Button>

    <Button onClick = {navigateUpdates}>
      {UpdateButton}
    </Button>
  </>
}
