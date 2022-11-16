import { Button } from "@mui/material";
import React from "react";
import PersonalDataChart from "../components/PersonalDataChart";
import SessionState from '../components/SessionState';
import { useNavigate } from 'react-router-dom';

export default function PostGame({ game, playAgain, backToGames }) {

    const navigate = useNavigate();

    if (SessionState.getId() > 0) { //if the user is logged in
        return <>
            <PersonalDataChart gameType={game.id}/>
            <Button onClick={playAgain}>Play Again</Button>
            <Button onClick={backToGames}>Back to Games</Button>
        </>
    }        
    else {
        return<>
            <h4>Start saving your preformance by <a href="/signup">Signing Up</a>, or <a href="/login">Login</a> if you already have an account!</h4>
            <Button onClick={playAgain}>Play Again</Button>
            <Button onClick={backToGames}>Back to Games</Button>
        </>
    }
    

}