import React, { useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'



export default function FFC_Select(){

  const navigate = useNavigate();

  const [decks, setDecks] = useState([
    { name: 'Adams Family', created: 'Some Date', lastPlayed: 'Some Other Date', id: 1},
    { name: 'Glados Family', created: 'This Date', lastPlayed: 'That Date', id: 2}
  ]);

  const handleDeckSelect = (e) => {
    console.log(e);
    console.log(e.target.textContent)
    //TODO: what deck was selected, then open it in the "play page"

  }
  //TODO: Edit button should load the selected deck in the edit screen
  return(
    <>
      <div>
        {decks.map((deck) => (
          <div key={deck.id}>

            <h2><button onClick = {(e) => handleDeckSelect(e)}>{deck.name}</button> | {deck.created} | {deck.lastPlayed} <button onClick = {() => navigate('/FFC_Edit')}>Edit</button></h2> 
          </div>
        ))}

      </div>
    </>
  )
}