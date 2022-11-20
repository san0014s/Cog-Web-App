import { Button } from "@mui/material";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SessionState from "../SessionState";
import CreateDeckModal from "./CreateDeckModal";

export default function DeckList() {

    const navigate = useNavigate();
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
            return <div key={deck.id}>
                <p>{deck.name} | {deck.creationDate} | {deck.lastUsed}</p>
                <button onClick={() => {
                    navigate(
                        '/play/deck', 
                        {
                            state: {  // STEVEN: look at how this was used in CardList.js. Use it like that
                               deck: deck
                            }
                        }
                    );
                }}>
                    Play Deck
                </button>
                <button onClick={() => {
                    setDeckToEdit(deck);
                    setDeckModalOpen(true);
                }}>
                    Edit Deck
                </button>
                <button onClick={() => {
                    navigate(
                        '/edit/cards', 
                        {
                            state: { 
                               deck: deck
                            }
                        }
                    );
                }}>
                    Edit Cards
                </button>
                <button onClick={() => deleteDeck(deck.id)}>Delete</button>
                <br /><br />
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
        <br></br>
        <Button
            onClick={() => {
                navigate('/profile')
            }}
            style={{
                textTransform: 'none'
            }}
        >
            Back to Profile
        </Button>

    </Fragment>
}