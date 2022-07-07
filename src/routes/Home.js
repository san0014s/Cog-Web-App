import React, { useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'

//the following constants are what prints out for each button and the home page greeting
const greeting = "Welcome to the Cognitive Web Application";
const AboutButton = "Go to About Us";
const AccountButton = "Go to Your Account";
const GamesButton = "Go to Games";
const ContactButton = "Contact Us!";
const UpdateButton = "Updates";

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
    <button onClick = {navigateAboutUs}>
      {AboutButton}
    </button>

    <button onClick = {naviagateAccount}>
      {AccountButton}
    </button>

    <button onClick = {naviagateGames}>
      {GamesButton}
    </button>

    <button onClick = {naviagateContactUs}>
      {ContactButton}
    </button>

    <button onClick = {navigateUpdates}>
      {UpdateButton}
    </button>
  </>
}
