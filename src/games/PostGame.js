import { Button } from "@mui/material";
import React from "react";

export default function PostGame({ playAgain, backToGames }) {

    return <>
        <div class="format">
        <Button onClick={playAgain}>Play Again</Button>
        <Button onClick={backToGames}>Back to Games</Button>
        </div>
    </>

}