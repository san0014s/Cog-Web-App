import React, { useState , useEffect, useRef} from "react";
import { Button } from "@mui/material";

export default function FamilyCard({ flashcard }) {
    const [flip, setFlip] = useState(false) //should show front side instead of the back secondIndex

    const frontEl = useRef()
    const backEl = useRef()

    const [height, setHeight] =  useState('initial')

    function setMaxHeight(){
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = frontEl.current.getBoundingClientRect().height

        setHeight(Math.max(frontHeight, backHeight, 100))
    }


    useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.option])
    useEffect(() => {
        window.addEventListener('resize',setMaxHeight)
        return () => window.removeEventListener('resize',setMaxHeight)
    }, [])

    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            style={{height: height }}
            onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.options.map(option => {
                        return <div className="flashcard-option">{option}</div>
                    })}
                </div>
            </div>
            <div className="back" ref={backEl}>{flashcard.answer}</div>
        </div>
    )
}