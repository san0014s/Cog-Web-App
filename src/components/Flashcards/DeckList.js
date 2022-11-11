import { Button } from "@mui/material";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import SessionState from "../SessionState";
import CreateDeckModal from "./CreateDeckModal";

export default function DeckList() {

    const [deckToEdit, setDeckToEdit] = useState();
    const [deckModalOpen, setDeckModalOpen] = useState(false);
    const [existingDecks, setExistingDecks] = useState([]);

    useEffect(() => {
        if (SessionState.getId() < 0) {
            return;
        }

        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/deck`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setExistingDecks(data)
        }).catch((error) => { // catch any errors
            console.error(error)
        })
    }, [])

    const deleteDeck = useCallback((id) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/deck/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            const newDecks = existingDecks.filter((deck) => {
                return deck.id !== id;
            })
            setExistingDecks(newDecks);
        }).catch((error) => { // catch any errors
            console.error(error)
        })
    }, [existingDecks]);

    return <Fragment>

        {existingDecks.map((deck) => {
            return <div>
                <p>{deck.name} | {deck.creationDate} | {deck.lastUsed}</p>
                <button onClick={() => {
                    setDeckToEdit(deck);
                    setDeckModalOpen(true);
                }}>
                    Edit
                </button>
                <button onClick={() => deleteDeck(deck.id)}>Delete</button>
                <br />
            </div>
        })}

        <CreateDeckModal
            open={deckModalOpen}
            onClose={() => setDeckModalOpen(false)}
            deckToEdit={deckToEdit}
        />
        <Button
            onClick={() => {
                setDeckToEdit(undefined);
                setDeckModalOpen(true);
            }}
            style={{
                textTransform: 'none'
            }}
        >
            Create Deck
        </Button>

    </Fragment>
}