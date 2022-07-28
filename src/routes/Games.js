import { Button } from "@mui/material";
import React, { useState } from "react"; 
import PreGame from "../games/PreGame";
import ReactionGame from "../games/ReactionGame"

const PAGE_STATE = Object.freeze({
    GAMES_LIST: Symbol("Games List"),
    PRE_GAME: Symbol("Pre-Game"),
    IN_GAME: Symbol("In-Game"),
    POST_GAME: Symbol("Post-Game")
})

const GAMES = [
    {
        display: "Reaction game",
        description: "Test your reaction time or whatever",
        howTo: "Click the button when it says to click it i guess",
        component: <ReactionGame/>
    }
]

export default function Games() {

    const [pageState, setPageState] = useState(PAGE_STATE.GAMES_LIST)
    const [gameToRender, setGameToRender] = useState();

    return <>
        {pageState === PAGE_STATE.GAMES_LIST && GAMES.map((game) => {
            return <div key={game}>
                <Button onClick={() => {
                    setGameToRender(game);
                    setPageState(PAGE_STATE.PRE_GAME);
                }}>
                    {game.display}
                </Button>
            </div>
        })}

        {pageState === PAGE_STATE.PRE_GAME && 
            <PreGame 
                game={gameToRender} 
                advanceStateFunction={() => {
                    setPageState(PAGE_STATE.IN_GAME);
                }}
            />}

        {pageState === PAGE_STATE.IN_GAME && gameToRender.component}
    </>
}