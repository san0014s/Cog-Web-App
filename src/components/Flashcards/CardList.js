import { Button } from "@mui/material";
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
        return <Fragment>

            <CreateCardModal
                open={cardModalOpen}
                onClose={() => setCardModalOpen(false)}
                deck={deck}
                cardToEdit={cardToEdit}
            />

            {existingCards.map((card) => {
                return <Fragment key={card.id}>
                    <p>{card.name} | {card.relationship}</p>
                    <img
                        src={card.picture}
                        style={{
                            height: '100px',
                            width: '100px',
                        }}
                    />
                    <br/>
                    <UploadToS3Button
                        directory={'cardImages'}
                        objectKey={`${card.id}.png`}
                        onUpload={() => onImageUpload(card)}
                    />
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

            <Button
                onClick={() => {
                    navigate('/decks')
                }}
                style={{
                    textTransform: 'none'
                }}
            >
                Back to Deck List
            </Button>

        </Fragment>  
    }
    return <></>
}