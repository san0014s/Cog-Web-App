import { Button, Card, CardActions, CardContent, Container } from "@mui/material";
import moment from "moment/moment";
import React, { useCallback, useEffect, useState } from "react";
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
    }, [deckModalOpen])

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

    const updateLastUsed = useCallback((deck) => {
        const updatedDeck = {
            ...deck, 
            lastUsed: moment().format('YYYY-MM-DD'),
        }
        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/deck/${updatedDeck.id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedDeck)
        })
    }, []);

    return <Container style={{marginTop: '20px'}}>

        {existingDecks.map((deck) => {
            return <div key={deck.id}>
                <Card style={{width: '40vw'}}>
                    <CardContent>
                        <p><strong>Name:</strong> {deck.name}</p>
                        <p><strong>Created:</strong> {deck.creationDate}</p>
                        <p><strong>Last Used:</strong> {deck.lastUsed}</p>
                    </CardContent>
                    <CardActions>
                        <Button 
                            onClick={() => {
                                updateLastUsed(deck);
                                navigate(
                                    '/play/deck', 
                                    {
                                        state: {  // STEVEN: look at how this was used in CardList.js. Use it like that
                                        deck: deck
                                        }
                                    }
                                );
                            }}
                            style={{backgroundColor: "green"}}
                            variant="contained"
                        >
                            Play Deck
                        </Button>
                        <Button 
                            onClick={() => deleteDeck(deck.id)}
                            variant="contained"
                            style={{backgroundColor: "red"}}
                        >
                            Delete
                        </Button>
                        <Button 
                            onClick={() => {
                                setDeckToEdit(deck);
                                setDeckModalOpen(true);
                            }}
                            variant="contained"
                        >
                            Edit Deck
                        </Button>
                        <Button 
                            onClick={() => {
                                navigate(
                                    '/edit/cards', 
                                    {
                                        state: { 
                                        deck: deck
                                        }
                                    }
                                );
                            }}
                            variant="contained"
                        >
                            Edit Cards
                        </Button>
                </CardActions>
                </Card>
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
                marginRight: '10px',
            }}
            variant="outlined"
        >
            Create Deck
        </Button>
        <Button
            onClick={() => {
                navigate('/profile')
            }}
            variant="outlined"
        >
            Back to Profile
        </Button>

    </Container>
}