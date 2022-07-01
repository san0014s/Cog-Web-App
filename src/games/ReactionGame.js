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
    const [initialStateTimeoutId, setInitialStateTimeoutId] = useState(); // stores the ID associated with the thread that will start the game

    useEffect(() => { // this callback is executed any time the gameState variable changes (this is the behavior of a useEffect). it basically just handles game state transitions
        if (gameState === GameState.Initial) { // in the initial state, set a random time before the game transitions to the InProgress state
            setButtonText(NOT_YET);
            setInitialStateTimeoutId( // i need to capture the return value of setTimeout and store it in this variable
                setTimeout(() => { // this callback will be executed in 5000 milliseconds (TODO: randomize this time)
                    setGameState(GameState.InProgress);
                }, 5000));
        }
        else if (gameState === GameState.InProgress) { // in progress means we are now timing the player until they click the button
            setStartTime(moment());
            setButtonText(CLICK_NOW);
        }
        else if (gameState === GameState.Completed) {
            setButtonText(COMPLETE);
            var reactionTime = endTime - startTime;
            setTimeDiffList(timeDiffList.concat(reactionTime)); // record reaction time
            setTimeout(() => { // after 1 second, go back to the initial state to restart the game
                setGameState(GameState.Initial);
            }, 1000)
        }
        else if (gameState === GameState.TooEarly) {
            clearTimeout(initialStateTimeoutId); // get rid of the thing that would have started the game
            setButtonText(TOO_EARLY);
            setTimeout(() => { // after 1 second, go back to the initial state to restart the game
                setGameState(GameState.Initial);
            }, 1000);
        }
    }, [gameState]); // putting the gameState variable here means that the useEffect will watch this var and react to any updates that happen to it

    function onClickFunction() {
        console.log("button was clicked");
        if (gameState === GameState.InProgress) {
            setEndTime(moment());
            setGameState(GameState.Completed);
        }
        else if (gameState === GameState.Initial) {
            setGameState(GameState.TooEarly);
        }
    }

    return <>
        <div>Reacted in {timeDiffList.slice(-1)} ms, Average is X ms, Attempts so far X/10</div>
        <Button onClick={onClickFunction}>
            {buttonText}
        </Button>
    </>
}