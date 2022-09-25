import React from 'react'

export default function FamilyList({ flashcards }) {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}