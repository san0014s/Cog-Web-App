import React, { useCallback, useMemo, useState } from "react";
import { Button, Modal, Box, Typography, TextField } from "@mui/material";
import moment from "moment";
import SessionState from "../SessionState";

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

export default function CreateDeckModal({ open, onClose, deckToEdit }) {

    const [deckName, setDeckName] = useState();
    const currentMoment = useMemo(() => {
        return moment().format('YYYY-MM-DD');
    }, [])

    const createDeck = useCallback((e) => {
        if (deckToEdit === undefined) {
            const newDeck = {
                name: deckName,
                creationDate: currentMoment,
                lastUsed: currentMoment,
            }
            fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/deck`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newDeck)
            })
        } else {
            const updatedDeck = {
                ...deckToEdit,
                name: deckName,
            }
            fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/deck/${deckToEdit.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedDeck)
            })
        }
    }, [deckName, currentMoment]);

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Create a Deck
                </Typography>
                <form onSubmit={(e) => { createDeck(e) }}>
                    <TextField
                        label="Deck Name"
                        onChange={(e) =>
                            {setDeckName(e.target.value)
                        }} 
                        required={true}
                        defaultValue={deckToEdit === undefined ? '' : deckToEdit.name}
                    />
                    <br></br>
                    <Button type="submit">{deckToEdit === undefined ? "Create" : "Update"}</Button>
                </form>
            </Box>
        </Modal>
    )
}