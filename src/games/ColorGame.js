import React, { useState } from 'react';
import "../css/ColorGame.css";

export default function ColorGame() {
    const colors_value = [
        '#0000FF', '#FF0000', "#00FF00", "#FFFF00", "#FFA500", "#A020F0"
        //Blue, Red, Green, Yellow, Orange, Purple
    ]
    const colors_names = [
        //'#0000FF', '#FF0000', "#00FF00", "#FFFF00", "#FFA500", "#A020F0"
        "Blue", "Red", "Green", "Yellow", "Orange", "Purple" 
    ]



	const questions = [

		//RED Questions
		{
			answer: 'Blue',
			questionText: 'Red',
			answerOptions: [
				{ answerText: 'Blue ', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Yellow',
			questionText: 'Red',
			answerOptions: [
				{ answerText: 'Blue ', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: true },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Orange',
			questionText: 'Red',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Orange', isCorrect: true },
			],
		},
		{
			answer: 'Red',
			questionText: 'Red',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false},
				{ answerText: 'Yellow', isCorrect: false},
				{ answerText: 'Red', isCorrect: true},
				{ answerText: 'Blue', isCorrect: false},
			],
		},
		{
			answer: 'Green',
			questionText: 'Red',
			answerOptions: [
				{ answerText: 'Green', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
			],
		},
		{
			answer: 'Purple',
			questionText: 'Red',
			answerOptions: [
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Purple', isCorrect: true },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
			],
		},




		//Blue Questions
		{
			answer: 'Blue',
			questionText: 'Blue',
			answerOptions: [
				{ answerText: 'Blue ', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Yellow',
			questionText: 'Blue',
			answerOptions: [
				{ answerText: 'Red ', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: true },
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Orange',
			questionText: 'Blue',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Orange', isCorrect: true },
			],
		},
		{
			answer: 'Red',
			questionText: 'Blue',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false},
				{ answerText: 'Yellow', isCorrect: false},
				{ answerText: 'Red', isCorrect: true},
				{ answerText: 'Blue', isCorrect: false},
			],
		},
		{
			answer: 'Green',
			questionText: 'Blue',
			answerOptions: [
				{ answerText: 'Green', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Blue', isCorrect: false },
			],
		},
		{
			answer: 'Purple',
			questionText: 'Blue',
			answerOptions: [
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Purple', isCorrect: true },
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
			],
		},



		//Yellow Questions
		{
			answer: 'Blue',
			questionText: 'Yellow',
			answerOptions: [
				{ answerText: 'Blue ', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Yellow',
			questionText: 'Yellow',
			answerOptions: [
				{ answerText: 'Blue ', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: true },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Orange',
			questionText: 'Yellow',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Orange', isCorrect: true },
			],
		},
		{
			answer: 'Red',
			questionText: 'Yellow',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false},
				{ answerText: 'Yellow', isCorrect: false},
				{ answerText: 'Red', isCorrect: true},
				{ answerText: 'Blue', isCorrect: false},
			],
		},
		{
			answer: 'Green',
			questionText: 'Yellow',
			answerOptions: [
				{ answerText: 'Green', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
			],
		},
		{
			answer: 'Purple',
			questionText: 'Yellow',
			answerOptions: [
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Purple', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
			],
		},



		//Orange Questions
		{
			answer: 'Blue',
			questionText: 'Orange',
			answerOptions: [
				{ answerText: 'Blue ', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Yellow',
			questionText: 'Orange',
			answerOptions: [
				{ answerText: 'Blue ', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: true },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Orange',
			questionText: 'Orange',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Orange', isCorrect: true },
			],
		},
		{
			answer: 'Red',
			questionText: 'Orange',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false},
				{ answerText: 'Orange', isCorrect: false},
				{ answerText: 'Red', isCorrect: true},
				{ answerText: 'Blue', isCorrect: false},
			],
		},
		{
			answer: 'Green',
			questionText: 'Orange',
			answerOptions: [
				{ answerText: 'Green', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Purple',
			questionText: 'Orange',
			answerOptions: [
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Purple', isCorrect: true },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
			],
		},




		//Green Questions
		{
			answer: 'Blue',
			questionText: 'Green',
			answerOptions: [
				{ answerText: 'Blue ', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Yellow',
			questionText: 'Green',
			answerOptions: [
				{ answerText: 'Blue ', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: true },
				{ answerText: 'Green', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Orange',
			questionText: 'Green',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
				{ answerText: 'Orange', isCorrect: true },
			],
		},
		{
			answer: 'Red',
			questionText: 'Green',
			answerOptions: [
				{ answerText: 'Green', isCorrect: false},
				{ answerText: 'Yellow', isCorrect: false},
				{ answerText: 'Red', isCorrect: true},
				{ answerText: 'Blue', isCorrect: false},
			],
		},
		{
			answer: 'Green',
			questionText: 'Green',
			answerOptions: [
				{ answerText: 'Green', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
			],
		},
		{
			answer: 'Purple',
			questionText: 'Green',
			answerOptions: [
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Purple', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
			],
		},



		//Purple Questions
		{
			answer: 'Blue',
			questionText: 'Purple',
			answerOptions: [
				{ answerText: 'Blue ', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Yellow',
			questionText: 'Purple',
			answerOptions: [
				{ answerText: 'Blue ', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: true },
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			answer: 'Orange',
			questionText: 'Purple',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Orange', isCorrect: true },
			],
		},
		{
			answer: 'Red',
			questionText: 'Purple',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false},
				{ answerText: 'Yellow', isCorrect: false},
				{ answerText: 'Red', isCorrect: true},
				{ answerText: 'Blue', isCorrect: false},
			],
		},
		{
			answer: 'Green',
			questionText: 'Purple',
			answerOptions: [
				{ answerText: 'Green', isCorrect: true },
				{ answerText: 'Yellow', isCorrect: false },
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Blue', isCorrect: false },
			],
		},
		{
			answer: 'Purple',
			questionText: 'Purple',
			answerOptions: [
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Purple', isCorrect: true },
				{ answerText:  'Yellow', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
			],
		},
			
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [start, setStart] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = Math.floor(Math.random() * 36);
		const end = 10;
		const curr = start + 1;
		if (curr < end) {
			setCurrentQuestion(nextQuestion);
			setStart(start + 1);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='colorGame'>
			{showScore ? (
				<div className='score-section'>
					You scored {score}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div style={{
          color: questions[currentQuestion]["answer"],
		  "align-text": "center",
		  "font-size": "40px"
        }}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button2 onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button2>
						))}
					</div>
				</>
			)}
		</div>
	);
}