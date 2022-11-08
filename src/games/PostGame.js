import { Button } from "@mui/material";
import React from "react";
import PersonalDataChart from "../components/PersonalDataChart";

export default function PostGame({ game, playAgain, backToGames }) {

    return <>
        <PersonalDataChart gameType={game.id}/>
        <Button onClick={playAgain}>Play Again</Button>
        <Button onClick={backToGames}>Back to Games</Button>
    </>

}