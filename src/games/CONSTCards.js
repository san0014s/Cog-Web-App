import React, {useState, useEffect, useRef} from 'react';
import FamilyList from './games/FamilyList';
import "./FamilyCard.css";

function App() {
    const [flashcards, setflashcards] = useState([SAMPLE_FLASHCARDS])
    return(
    <div className="container-cardwrapper">
        <FamilyList flashcards={flashcards} />
    </div>
)
}

// function decodeString(string) {
//     const textArea = document.createElement('textarea')
//     textArea.innerHTML = string
//     return textArea.value
// }



const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'Who is this family member?',
        answer: 'Lorem Ipsum',
        options: [
            'lor',
            'ip',
            'sum',
            'em'
        ]
    }
]

const SAMPLE_FLASHCARDS2 = [
    {
        id: 2,
        question: 'Who is this family member?',
        answer: 'Lorem Ipsum',
        options: [
            'lor',
            'ip',
            'sum',
            'em'
        ]
    }
]