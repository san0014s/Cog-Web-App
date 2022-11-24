import { Button, Container } from "@mui/material";
import React, { Fragment, useState } from "react";
import FamilyCard from "./FamilyCard";

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        name: 'Kryzstof',
        picture: "https://cog-web-app-public-assets.s3.amazonaws.com/Headshots/KJK.png",
        relationship: 'grandson'
    },
    {
        id: 2,
        name: "Kryzstof",
        picture: "https://cog-web-app-public-assets.s3.amazonaws.com/Headshots/KJK.png",
        relationship: "grandson",
    },
    {
        id: 3,
        name: "Steven",
        picture: "https://cog-web-app-public-assets.s3.amazonaws.com/Headshots/SAN.jpg",
        relationship: "dad",
    },
    {
        id: 22,
        name: "karl",
        picture: "https://cog-web-app-public-assets.s3.amazonaws.com/cardImages/22.png",
        relationship: "father",
    }
]

export default function PlayDeck() {

    const [index, setIndex] = useState(0);

    return <Fragment>
        <Container>
            <FamilyCard flashcard={SAMPLE_FLASHCARDS[index]} />
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
                    if (index < SAMPLE_FLASHCARDS.length - 1) {
                        setIndex(index + 1);
                    }
                }}
            >
                Next
            </Button>
        </Container>
    </Fragment>

}