import React from "react";
import { Button } from "@mui/material";

export default function FamilyCard ({ flashcard }) {
    return(
        <div>
            {flashcard.question}
        </div>
    )
}