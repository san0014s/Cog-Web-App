import { Button } from "@mui/material";
import React, { useState } from "react"; 
import PostGame from "../games/PostGame";
import PreGame from "../games/PreGame";
import ReactionGame from "../games/ReactionGame"
import MemoryGame from "../games/MemoryGame"
import SlidingPuzzle from "../games/SlidingPuzzle"
import ColorGame from "../games/ColorGame.js"
import { GAMES_ENUM } from "../constants/GamesConstants";


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
            id: GAMES_ENUM.REACTION,
            display: "Reaction game",
            description: "Test your reaction time!",
            howTo: "When one of the two buttons changes, click on it as quickly as possible. Repeat this five times to get your score.",
            component: <ReactionGame advanceStateFunction={() => setPageState(PAGE_STATE.POST_GAME)}/>,
            imgURL: 'reactionImage.png'
        },
        {
            id: GAMES_ENUM.MEMORY,
            display: "Memory game",
            description: "Test your memory by matching shapes in an increasing challenging version of a classic memory game!",
            howTo: "Search around the board to find and match like shapes and complete as many boards as you can. You have three lives to start, and get an extra life after each successful board clear, but you lose a life for each incorrect match.",
            component: <MemoryGame advanceStateFunction={() => setPageState(PAGE_STATE.POST_GAME)}/>,
            imgURL: 'memoryImage.png'
        },
        {
            id: GAMES_ENUM.SLIDING_PUZZLE,
            display: "Sliding Puzzle",
            description: "Test your spatial reasoning by completing a simple sliding puzzle!",
            howTo: "To slide a piece, simply click on a piece that is adjacent to the empty square. Rearrange the segements of the shape to recrate it as shown in the image.",
            component: <SlidingPuzzle advanceStateFunction={() => setPageState(PAGE_STATE.POST_GAME)}/>,
            imgURL: 'slidingPuzzleFinish.png'
        },
        {
            id: GAMES_ENUM.COLORS,
            display: "Color Game",
            description: "Test your cognitive processing!",
            howTo: "Pick the color/hue of the word that is on screen. For example, the answer to a word Blue colored Red would be Red. You have 30 seconds to get as many correct as you can, however incorrectly guessing will reduce that time by 2 seconds, but getting a question correct will add 2 seconds.",
            component: <ColorGame advanceStateFunction={() => setPageState(PAGE_STATE.POST_GAME)}/>,
            imgURL: 'colorGameImg.png'
        }
    ]
    

    return <>
    <div style={{    "position": "fixed",
            width: "100vw",
            height: "100vh",
            overflow: "auto",
            "background-color": "#fdf5df" }}>
        {pageState === PAGE_STATE.GAMES_LIST && GAMES.map((game) => {
            return <div key={game.display}>
                    <Button style={{display:"grid",
  "grid-auto-flow": "row", "top": "125px", "margin": "auto", height:"150px", width: "400px",
           "backgroundColor": "#2E7378", "color": "#fdf5df", "font": "Brush Script MT", gap: "50px", justifyContent: "center"}}onClick={() => {
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
                game={gameToRender}
                playAgain={() => setPageState(PAGE_STATE.PRE_GAME)}
                backToGames={() => setPageState(PAGE_STATE.GAMES_LIST)}
            />}
    </div>
    </>
    
}