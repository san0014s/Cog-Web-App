import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Modal, Box, Typography, TextField } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreateCardModal({ open, onClose, deck, cardToEdit }) {

    const [cardName, setCardName] = useState();
    const [relationship, setRelationship] = useState();

    useEffect(() => {
        setCardName(cardToEdit ? cardToEdit.name : undefined);
        setRelationship(cardToEdit ? cardToEdit.relationship : undefined);
    }, [cardToEdit])

    const createCard = useCallback((e) => {
        e.preventDefault();
        if (cardToEdit === undefined) {
            const newCard = {
                name: cardName,
                relationship: relationship,
                picture: "https://cog-web-app-public-assets.s3.amazonaws.com/profile-pictures/default-pfp.jpg",
            }
            fetch(`${process.env.REACT_APP_BACKEND_URL}/deck/${deck.id}/card`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCard)
            }).then(() => {
                onClose();
            })
        } else {
            const updatedDeck = {
                ...cardToEdit,
                name: cardName,
                relationship: relationship,
            }
            console.log(updatedDeck)
            fetch(`${process.env.REACT_APP_BACKEND_URL}/deck/${deck.id}/card/${cardToEdit.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedDeck)
            }).then(() => {
                onClose();
            })
        }
    }, [cardName, relationship]);

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Create a Card
                </Typography>
                <form onSubmit={(e) => { createCard(e) }}>
                    <TextField
                        label="Person's Name"
                        onChange={(e) => {setCardName(e.target.value)}} 
                        required={true}
                        defaultValue={cardToEdit ? cardToEdit.name : ''}
                    />
                    <TextField
                        label="Relationship"
                        onChange={(e) => {setRelationship(e.target.value)}} 
                        required={true}
                        defaultValue={cardToEdit ? cardToEdit.relationship : ''}
                    />
                    <br></br>
                    <Button type="submit">{cardToEdit === undefined ? "Create" : "Update"}</Button>
                </form>
            </Box>
        </Modal>
    )
}