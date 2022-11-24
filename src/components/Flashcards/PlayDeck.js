import { Button, Container } from "@mui/material";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import FamilyCard from "./FamilyCard";

export default function PlayDeck() {

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

    console.log(cardsList)

    return <Fragment>
        {cardsList && (
            <Container>
                <FamilyCard flashcard={cardsList[index]} />
                <Button
                    onClick={()=> {
                        if (index > 0) {
                            setIndex(index - 1);
                        }
                    }}
                >
                    Previous
                </Button>
                <Button
                    onClick={()=> {
                        if (index < cardsList.length - 1) {
                            setIndex(index + 1);
                        }
                    }}
                >
                    Next
                </Button>
            </Container>
        )}
    </Fragment>

}