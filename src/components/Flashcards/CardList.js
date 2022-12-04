import { Button, Card, CardActions, CardContent, Container } from "@mui/material";
import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UploadToS3Button from "../../s3/UploadToS3Button";
import CreateCardModal from "./CreateCardModal";

export default function CardList() {

    const navigate = useNavigate();
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



    const onImageUpload = (card) => {
        const updatedCard = {
            ...card,
            picture: `${process.env.REACT_APP_S3_URL}/cardImages/${card.id}.png`
        }
        fetch(`${process.env.REACT_APP_BACKEND_URL}/deck/${deck.id}/card/${card.id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedCard)
        })
        .then(() => {
            const newCardsList = existingCards.map((card) => {
                if (card.id === updatedCard.id) {
                    return updatedCard;
                }
                return card;
            })
            setExistingCards(newCardsList);
        })
    }

    if (deck) {
        return <Container style={{marginTop: '20px'}}>

            <CreateCardModal
                open={cardModalOpen}
                onClose={() => setCardModalOpen(false)}
                deck={deck}
                cardToEdit={cardToEdit}
            />

            {existingCards.map((card) => {
                return <Fragment>
                    <Card key={card.id} style={{width: '20vw'}}>
                        <CardContent>
                            <p><strong>Name: </strong>{card.name}</p>
                            <p><strong>Relationship: </strong>{card.relationship}</p>
                            <br />
                            <img
                                src={card.picture}
                                style={{
                                    height: '100px',
                                    width: '100px',
                                }}
                                alt={card.name}
                            />
                            <UploadToS3Button
                                directory={'cardImages'}
                                objectKey={`${card.id}.png`}
                                onUpload={() => onImageUpload(card)}
                            />
                        </CardContent>
                        <CardActions>
                            <Button 
                                onClick={() => {
                                    setCardToEdit(card);
                                    setCardModalOpen(true);
                                }}
                                variant='contained'
                            >
                                Edit Card
                            </Button>
                            <Button 
                                onClick={() => deleteCard(card.id)}
                                variant='contained'
                                style={{backgroundColor: 'red'}}
                            >
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                    <br /><br />
                </Fragment>
            })}

            <Button
                onClick={() => {
                    setCardToEdit(undefined);
                    setCardModalOpen(true);
                }}
                variant='outlined'
            >
                Create Card
            </Button>

            <Button
                onClick={() => {
                    navigate('/decks')
                }}
                variant='outlined'
            >
                Back to Deck List
            </Button>

        </Container>  
    }
    return <></>
}