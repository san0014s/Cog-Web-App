import { Button } from "@mui/material";
import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import CreateCardModal from "./CreateCardModal";

export default function CardList() {

    const { state } = useLocation();
    const deck = useMemo(() => {
        if (state !== null) {
            return state.deck;
        }
    }, [state]); // Read values passed on state 
    const [existingCards, setExistingCards] = useState([]);
    const [cardToEdit, setCardToEdit] = useState();
    const [cardModalOpen, setCardModalOpen] = useState(false);

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
            setExistingCards(data)
        }).catch((error) => { // catch any errors
            console.error(error)
        })
    }, [deck, cardModalOpen]);

    const deleteCard = useCallback((id) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/deck/${deck.id}/card/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            const newCards = existingCards.filter((card) => {
                return card.id !== id;
            })
            setExistingCards(newCards);
        }).catch((error) => { // catch any errors
            console.error(error)
        })
    }, [existingCards, deck]);

    if (deck) {
        return <Fragment>
            {existingCards.map((card) => {
                return <Fragment>
                    <p>{card.name} | {card.relationship}</p>
                    <img src={card.picture}/>
                    <br/>
                    <button onClick={() => {
                        setCardToEdit(card);
                        setCardModalOpen(true);
                    }}>
                        Edit Card
                    </button>
                    <button onClick={() => deleteCard(card.id)}>Delete</button>
                    <br /><br />
                </Fragment>
            })}

            <CreateCardModal
                open={cardModalOpen}
                onClose={() => setCardModalOpen(false)}
                deck={deck}
                cardToEdit={cardToEdit}
            />
            <Button
                onClick={() => {
                    setCardToEdit(undefined);
                    setCardModalOpen(true);
                }}
                style={{
                    textTransform: 'none'
                }}
            >
                Create Card
            </Button>
        </Fragment>  
    }
    return <></>
}