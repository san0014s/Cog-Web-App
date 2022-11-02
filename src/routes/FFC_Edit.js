import React, { useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function FFC_Edit() {

  

  const defaultCardValues = {
    name: "",
    images: [],//what should this be?
  }
  const [deckName, setDeckName] = useState();
  const [cards, setCards] = useState([defaultCardValues]);
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    console.log(deckName);
    console.log(cards);
    //TODO set up to backend
  }

  const handleCardChange = (e) => {
    console.log(e);
    if(e.target.files) {
      setCards({ ...cards, images: [...e.target.files]})
    }
  }

  const handleDeckName = (e) => {
    setDeckName(e.target.value)
  }  
  function onRemoveImage(e: any) {
    //TODO: remove card from deck
    console.log(e);
  }
  return<>
    <TextField
      id="deck-input"
      name="deck-name"
      label="Deck Name"
      type="text"
      value={deckName}
      onChange={handleDeckName}
    />
    <br />

    <ImageList sx={{ width: 500, height: 450 }}> 
      {cards.map((card) => (
        <ImageListItem key={card.image}>
          <img 
            src={`${card.image}?w=248&fit=crop&auto=format`}
            srcSet={`${card.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={card.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={card.name}
            position="below"
          />
        </ImageListItem>

      ))}
    </ImageList>
    <br /> 
    <button onClick={(e)=> handleCardChange(e)}> Upload Images</button>
    <br />
    <button onClick={(e)=> handleOnSubmit(e)}>Submit Changes</button>
    <button onClick={() => navigate('/account')}>Cancel</button>
  </>
}
