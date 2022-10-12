import "./FamilyCard.css";

<><FamilyList flashcards={flashcards} /><></></>

const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

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