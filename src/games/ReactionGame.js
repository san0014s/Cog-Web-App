import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import moment from 'moment';

const NOT_YET = "Not Yet...";
const CLICK_NOW = "Click me now!!";
const COMPLETE = "Success!";
const TOO_EARLY = "Clicked too early, try again";

// this is just an immutable enum type to keep track of where the game is at
const GameState = Object.freeze({
    Initial: Symbol("Initial"), 
    InProgress: Symbol("In Progress"),
    Completed: Symbol("Complete"),
    TooEarly: Symbol("TooEarly") // TODO use clearTimeout() to get rid of setTimeout when this game state is detected
});

const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
`

export default function ReactionGame() {

    const [gameState, setGameState] = useState(GameState.Initial);
    const [buttonText, setButtonText] = useState('');
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [timeDiffList, setTimeDiffList] = useState([]);

    useEffect(() => { // this callback is essentially executed any time the gameState variable changes
        if (gameState === GameState.Initial) { // in the initial state, set a random time before the game transitions to the InProgress state
            console.log("Initial game state detected");
            setButtonText(NOT_YET);
            setTimeout(() => { // this callback will be executed in 5000 milliseconds (TODO: randomize this time)
                setGameState(GameState.InProgress);
            }, 5000)
        }
        else if (gameState === GameState.InProgress) { // in progress means we are now timing the player until they click the button
            console.log("In Progress Game State Detected");
            setStartTime(moment());
            setButtonText(CLICK_NOW);
        }
        else if (gameState === GameState.Completed) {
            console.log("completed game detected")
            var reactionTime = endTime - startTime;
            setTimeDiffList(timeDiffList.concat(reactionTime));
            setTimeout(() => {
                setGameState(GameState.Initial);
            }, 1000)
        }
    }, [gameState]);

    function onClickFunction() {
        console.log("button was clicked");
        if (gameState === GameState.InProgress) {
            setButtonText(COMPLETE);
            setEndTime(moment());
            setGameState(GameState.Completed);
        }
    }

    return <>
        <div>Reacted in {timeDiffList.slice(-1)} ms, Average is X ms, Attempts so far X/10</div>
        <Button onClick={onClickFunction}>
            {buttonText}
        </Button>
    </>
}