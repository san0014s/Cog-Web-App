import React, { useState , useEffect, useRef} from "react";
import { Button } from "@mui/material";

export default function FamilyCard({ flashcard }) {
    const [flip, setFlip] = useState(false) //should show front side instead of the back secondIndex
    const [height, setHeight] = useState('initial')

    const frontEl = useRef()
    const backEl = useRef()


    function setMaxHeight(){
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = frontEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }


    useEffect(setMaxHeight, [flashcard])
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
                <img src={flashcard.picture} />
            </div>
            <div className="back" ref={backEl}>
                {flashcard.name}
                {flashcard.relationship}
            </div>
        </div>
    )
}