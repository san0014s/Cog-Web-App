import React, { useState , useEffect, useRef} from "react";

export default function FamilyCard({ flashcard }) {
    const [flip, setFlip] = useState(false) //should show front side instead of the back secondIndex

    const frontEl = useRef()
    const backEl = useRef()

    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            style={{
                height: "50vw",
                width: "50vw",
            }}
            onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>
                <img
                    src={flashcard.picture} 
                    style={{
                        height: "50vw",
                        width: "50vw",
                        padding: "2vw",
                    }}
                />
            </div>
            <div className="back" ref={backEl}>
                <p><strong>Name: </strong>{flashcard.name}</p>
                <p><strong>Relationship: </strong>{flashcard.relationship}</p>
            </div>
        </div>
    )
}