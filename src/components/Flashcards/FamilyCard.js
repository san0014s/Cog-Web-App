import React, { useState , useEffect, useRef} from "react";

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
                        height: "100%",
                        width: "100%",
                    }}
                />
            </div>
            <div className="back" ref={backEl}>
                <p>{flashcard.name}</p>
                <p>{flashcard.relationship}</p>
            </div>
        </div>
    )
}