import React, {useEffect, useState, useRef} from "react";

import FamilyCard from "../games/FamilyCard";
import FamilyList from "../games/FlashCardList";
import App from "./App.js";

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
//converting object to an array
const keys = Object.keys(SAMPLE_FLASHCARDS);

keys.forEach((key, index) => {
    console.log(`${key}: ${SAMPLE_FLASHCARDS[key]}`)
});