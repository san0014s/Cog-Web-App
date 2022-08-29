import React from "react";
import { Button } from "@mui/material";

export default function PreGame({ game, advanceStateFunction }) {

    return <>
        <body class="format">
        <h1>{game.display}</h1>
        <h4>{game.description}</h4>
        <p>How to play: {game.howTo}</p>
        <Button onClick={advanceStateFunction}>Play</Button>
        </body>
    </>

}