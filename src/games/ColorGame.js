import React, { useState, useEffect } from 'react';
import "../css/ColorGame.css";
import { recordData } from "./GameDataRecorder";
import { GAMES_ENUM } from "../constants/GamesConstants";
import { toast, ToastContainer } from 'react-toastify';


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

export default function ColorGame({ advanceStateFunction }) {


	const GameState = Object.freeze({
		Initial: Symbol("Initial"), 
		InProgress: Symbol("In Progress"),
		GameOver: Symbol("Game Over")
	});

	const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [timeDiffList, setTimeDiffList] = useState([]);




	const max = 30;

	const [gameState, setGameState] = useState(GameState.InProgress);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [initialMinute,initialSeconds] = [0,max];
    const [minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
	const [start, setStart] = useState(0);
	const [count, setCount] = useState(seconds);
	var timer;



	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			toast.success('Good job! (+1 seconds)', {
				position: toast.POSITION.BOTTOM_RIGHT,
			})
			setScore(score + 1);
			setCount(count + 1);
			clearTimeout(timer);
		}
		else{
			toast.error('Wrong answer, try again! (-2 seconds)', {
				position: toast.POSITION.BOTTOM_RIGHT,
			})
			setCount(count - 2);
			clearTimeout(timer);
		}

		const nextQuestion = Math.floor(Math.random() * 36);
		if (count >= 0) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	useEffect(()=>{
        if(count>0){
            timer = setTimeout(()=>setCount(count - 1),1000);
        }
		else if (count == 0) {
			setShowScore(true);
		}

    }, [count]);


	return (
		<div className='color_body'>
			<div className='colorGame'>
				{showScore ? (
					<div className='score-section'>
						You scored {score}
						<p>
						<button
							onClick={() => {
							recordData(GAMES_ENUM.COLORS, score);
							advanceStateFunction();
							}}
						>
							Finish
						</button>
						</p>
					</div>
			) : (
				<>
					<div className='timer-text'>
						<h1>{count}</h1>
					</div>
					<div className='question-section'>
						<div style={{
          color: questions[currentQuestion]["answer"],
		  "padding": "15px",
		  "justifyContent": "center",
		  "text-align": "center",
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

		<div>
			<ToastContainer />
		</div>
		</div>
	);
}