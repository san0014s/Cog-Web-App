import React, { useState } from "react";
import { Button } from "@mui/material";

export default function FamilyCard({ flashcard }) {
    const [flip, setFlip] = useState(false) //should show front side instead of the back secondIndex


    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            <div className="front">
                {flashcard.question}
                <div className="card-options">
                    {flashcard.options.map(option => {
                        return <div className="card-option">{option}</div>
                    })}
                </div>
            </div>
            <div className="back">{flashcard.answer}</div>
        </div>
    )
}