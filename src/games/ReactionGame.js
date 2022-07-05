import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import moment from 'moment';

const GAME_TYPE = 1;
const ROUNDS_TO_PLAY = 5;

const NOT_YET = "Not Yet...";
const CLICK_NOW = "Click me now!!";
const COMPLETE = "Success!";
const TOO_EARLY = "Clicked too early, try again";
const GAME_OVER = "Game over!";

// this is just an immutable enum type to keep track of where the game is at
const GameState = Object.freeze({
    Initial: Symbol("Initial"), 
    InProgress: Symbol("In Progress"),
    Completed: Symbol("Complete"),
    TooEarly: Symbol("Too Early"),
    GameOver: Symbol("Game Over")
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
                if (timeDiffList.length === ROUNDS_TO_PLAY - 1) { // subtracting rounds to play by 1 because useStates update asynchronously on each render (even though I append to the list on the final round, the length at this point will still be 1 less than the final round #)
                    setGameState(GameState.GameOver);
                }
                else {
                    setGameState(GameState.Initial);
                }
            }, 1000)
        }
        else if (gameState === GameState.TooEarly) {
            clearTimeout(initialStateTimeoutId); // get rid of the thing that would have started the game
            setButtonText(TOO_EARLY);
            setTimeout(() => { // after 1 second, go back to the initial state to restart the game
                setGameState(GameState.Initial);
            }, 1000);
        }
        else if (gameState === GameState.GameOver) {
            setButtonText(GAME_OVER);
            recordData(GAME_TYPE, getAverage());
        }
    }, [gameState]); // putting the gameState variable here means that the useEffect will watch this var and react to any updates that happen to it

    /**
     * Changes button state when clicked. If the game is "in progress" (i.e. we're timing the player), then we record
     *  the time that they clicked and transition to the "Game Completed" state. If the game hasn't yet started and the
     *  player clicks early, we switch to the "Too Early" state
     */
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

    /**
     * Takes the average of the timeDiffList and returns it. If there's nothing in the list, it returns
     *  an "X" character because that's what I want displayed on the screen
     * 
     * @returns - the average of timeDiffList or the character 'X' if that list is empty
     */
    function getAverage() {
        if (timeDiffList.length === 0)
            return "X"
        else
            return timeDiffList.reduce((a, b) => a + b) / timeDiffList.length; // lol stack overflow
    }

    /**
     * Hits the storeData endpoint of the REST server to store a stat and gameType
     * 
     * @param {int} gameType - enumerable property representing the game type (i've arbitrarily chosen 1 for this game, TODO: standardize that server side)
     * @param {num} stat - whatever stat needs recorded for this game
     */
    function recordData(gameType, stat) { // TODO this should be a utility function used by all games & thus shouldn't be contained in this component in the future
        let personalData = {
            "gameType":gameType,
            "stat":stat,
            "accountId":24 //TODO: replace with session prop
        }

        fetch('http://localhost:8080/storeData', { // TODO: make protocol, ip address, and port(?) configurable
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(personalData)
        }); // TODO: possibly apply a .then() and .catch() or return the promise so that callers can handle .then and/or .catch
    }

    return <>
        <div>Reacted in {timeDiffList.slice(-1)} ms, Average is {getAverage()} ms, Attempts so far {timeDiffList.length}/{ROUNDS_TO_PLAY}</div>
        <Button onClick={onClickFunction}>
            {buttonText}
        </Button>
    </>
}