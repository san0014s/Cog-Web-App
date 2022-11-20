import React, { useState, useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import SessionState from '../components/SessionState';

export default function FFC_Select(){

  const navigate = useNavigate();

  const tempDeckCreation = (e) => {//delete this after all three FFC pages are connected
    var DeckToCreate = { //temporary thing to add decks into the database until edit page is done
      name: "Deck Name",
      creationDate: "2022-10-24",
      lastUsed: "2022-10-24",
      accountId: SessionState.getId() 
    }

    fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/deck`, {// puts the new deck into the DB, again, just temp
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(DeckToCreate)
    }).catch((error) => { // catch any errors
      console.error(error)
    })
  }
  
    // get all Decks, then determine what deck
  const [decks, setDecks] = useState([
    { id: 1, name: 'Adams Family', creationDate: 'Some Date', lastUsed: 'Some Other Date', accountId: SessionState.getId()}// used for debugging and testing
  ]);

  //const [newDecks, setNewDecks] = useState([id: 0, name: "", creationDate: "", lastUsed: "", accountId: 0]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/deck`, {// gets the decks from the DB
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      return response.json()
    }).then((data) => { //how to get this outside of this scope w/o causing an infinite loop
      setDecks(data) //used for Debugging
    }).catch((error) => { // catch any errors
      console.error(error)
    })
  }, [])

  const handleDeckSelect = (e) => {
    console.log(e);
    console.log(e.target.textContent)
    //TODO: what deck was selected, then open it in the "play page"

  }

  const handleDeckDelete = (e, id) => {
    console.log(e);
    console.log(id);
    console.log(e.target.textContent)
    //TODO: what deck was selected, then remove it from both the backend and the useState
    fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/deck/${id}`, {// removes the deck from the DB
      method: 'DELETE',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify() // might not need idk yet
    }).catch((error) => { // catch any errors
      console.error(error)
    })

    setDecks((current) => 
      current.filter((deck) => deck.id != id)
    )
  }
  //TODO: Edit button should load the selected deck in the edit screen
  return(
    <>
      <div>
      <button onClick = {() => navigate('/FFC_Edit')}>Make a Deck</button>
      <button onClick = {(e) => tempDeckCreation(e)}>Delete This</button>
     
        {decks.map((deck) => (
          <div key={deck.id}>

            <h2><button onClick = {(e) => handleDeckSelect(e)}>{deck.name}</button> | {deck.creationDate} | {deck.lastUsed} | <button onClick = {(e) => handleDeckDelete(e, deck.id)}>Delete Deck</button></h2> 
          </div>
        ))}

      </div>
    </>
  )
}