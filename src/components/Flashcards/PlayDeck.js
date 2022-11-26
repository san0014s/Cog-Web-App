import { Button, Container } from "@mui/material";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import FamilyCard from "./FamilyCard";

export default function PlayDeck() {

    const [flip, setFlip] = useState(false) //should show front side instead of the back secondIndex
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const { state } = useLocation();
    const deck = useMemo(() => {
        if (state !== null) {
            return state.deck;
        }
    }, [state]); // Read values passed on state 

    const [cardsList, setCardsList] = useState();
    useEffect(() => {
        if (!deck) {
            return;
        }

        fetch(`${process.env.REACT_APP_BACKEND_URL}/deck/${deck.id}/card`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setCardsList(data)
        }).catch(() => {})
    }, [deck]);

    return <Fragment>
        {cardsList && (
            <Container style={{marginTop: '20px'}}>
                <FamilyCard
                    flashcard={cardsList[index]}
                    flip={flip}
                    setFlip={setFlip}
                />
                <br />
                <Button
                    onClick={()=> {
                        setIndex(index - 1);
                    }}
                    style={{marginRight: '10px'}}
                    variant='contained'
                    disabled={index <= 0}
                >
                    Previous
                </Button>
                <Button
                    onClick={()=> {
                        if (index < cardsList.length - 1) {
                            setIndex(index + 1);
                        }
                    }}
                    variant='contained'
                    disabled={index >= cardsList.length - 1}
                >
                    Next
                </Button>
                <br /><br />
                <Button
                    onClick={()=> navigate('/decks')}
                    variant='outlined'
                >
                    Back to Deck List
                </Button>
            </Container>
        )}
    </Fragment>

}