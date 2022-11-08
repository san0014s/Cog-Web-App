import { Button } from "@mui/material";
import React, { useState } from "react"; 
import PostGame from "../games/PostGame";
import PreGame from "../games/PreGame";
import ReactionGame from "../games/ReactionGame"
import FamilyCard from "../games/FamilyCard"
import MemoryGame from "../games/MemoryGame"
import ColorGame from "../games/ColorGame"




const PAGE_STATE = Object.freeze({
    GAMES_LIST: Symbol("Games List"),
    PRE_GAME: Symbol("Pre-Game"),
    IN_GAME: Symbol("In-Game"),
    POST_GAME: Symbol("Post-Game")
})

export default function Games() {
        
    const [pageState, setPageState] = useState(PAGE_STATE.GAMES_LIST)
    const [gameToRender, setGameToRender] = useState();

    const GAMES = [
        {
            display: "Reaction game",
            description: "Test your reaction time or whatever",
            howTo: "Click the button when it says to click it i guess",
            component: <ReactionGame advanceStateFunction={() => setPageState(PAGE_STATE.POST_GAME)}/>
        },
        {
            display: "Memory game",
            description: "Test your memory",
            howTo: "Match Images",
            component: <MemoryGame/>
        },
        {
            display: "Matching game",
            description: "Test processing",
            howTo: "Click the color corresponding",
            component: <MatchingGame/>
        }
    ]
    

    return <>
        {pageState === PAGE_STATE.GAMES_LIST && GAMES.map((game) => {
            return <div key={game.display}>
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

        {pageState === PAGE_STATE.POST_GAME && 
            <PostGame
                playAgain={() => setPageState(PAGE_STATE.PRE_GAME)}
                backToGames={() => setPageState(PAGE_STATE.GAMES_LIST)}
            />}
    </>
}