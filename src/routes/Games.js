import { Button, Grid } from "@mui/material";
import React, { useState } from "react"; 
import PostGame from "../games/PostGame";
import PreGame from "../games/PreGame";
import ReactionGame from "../games/ReactionGame"
import MemoryGame from "../games/MemoryGame"
import SlidingPuzzle from "../games/SlidingPuzzle"
import ColorGame from "../games/ColorGame.js"
import { GAMES_ENUM } from "../constants/GamesConstants";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system';

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
            imgURL: `${process.env.PUBLIC_URL}/reactionImage.png`
        },
        {
            id: GAMES_ENUM.MEMORY,
            display: "Memory game",
            description: "Test your memory by matching shapes!",
            howTo: "Search around the board to find and match like shapes and complete as many boards as you can. You have three lives to start, and get an extra life after each successful board clear, but you lose a life for each incorrect match.",
            component: <MemoryGame advanceStateFunction={() => setPageState(PAGE_STATE.POST_GAME)}/>,
            imgURL: `${process.env.PUBLIC_URL}/memoryImage.png`
        },
        {
            id: GAMES_ENUM.SLIDING_PUZZLE,
            display: "Sliding Puzzle",
            description: "Test your spatial reasoning!",
            howTo: "To slide a piece, simply click on a piece that is adjacent to the empty square. Rearrange the segements of the shape to recrate it as shown in the image.",
            component: <SlidingPuzzle advanceStateFunction={() => setPageState(PAGE_STATE.POST_GAME)}/>,
            imgURL: `${process.env.PUBLIC_URL}/slidingPuzzleFinish.png`
        },
        {
            id: GAMES_ENUM.COLORS,
            display: "Color Game",
            description: "Test your cognitive processing!",
            howTo: "Pick the color/hue of the word that is on screen. For example, the answer to a word Red colored Blue would be Blue. You have 10 seconds to get as many correct as you can, however incorrectly guessing will reduce that time by 2 seconds, but getting a question correct will add 1 second.",
            component: <ColorGame advanceStateFunction={() => setPageState(PAGE_STATE.POST_GAME)}/>,
            imgURL: `${process.env.PUBLIC_URL}/colorGameImg.png`
        }
    ]
    

    return <>
    <div style={{    "position": "relative",
            width: "100vw",
            height: "120vh",
            overflow: "auto",
            "background-color": "#fdf5df" }}>
        {pageState === PAGE_STATE.GAMES_LIST && (
            <Grid container>
            {GAMES.map((game) => {
                return <Grid item xs={6} style={{height: '100% !important'}}>
                        <div key={game.display} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <Card 
                                sx={{ 
                                    m: 2, 
                                    border: 1, 
                                    borderColor: "primary.main", 
                                    width: 350, 
                                    height: 400,
                                    color: "#fdf5df", 
                                    backgroundColor: "#2E7378"
                                }}
                            >
                                <CardContent>
                                    <img
                                        src={game.imgURL}
                                        alt="something went wrong"
                                        style = {{
                                            width: "100%", 
                                            height: 200, 
                                            position: "relative", 
                                            marginLeft: "auto", 
                                            marginRight: "auto", 
                                            padding: "10px"
                                        }}
                                    />
                                    <Typography gutterBottom variant="h5" component="div">
                                    {game.display}
                                    </Typography>
                                    <Typography variant="body1" color="#fdf5df">
                                    {game.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        size="large" 
                                        variant="contained" 
                                        onClick={() => {
                                            setGameToRender(game);
                                            setPageState(PAGE_STATE.PRE_GAME);
                                        }}
                                        style={{
                                            width: '80%',
                                            marginLeft: '10%',
                                            marginRight: '10%',
                                            marginBottom: '10%',
                                            color: '#fdf5df',
                                            backgroundColor: 'gray',
                                        }}
                                    >
                                        Play
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Grid>
                }
            )}
            </Grid>
        )}





        {pageState === PAGE_STATE.PRE_GAME && 
            <PreGame 
                game={gameToRender} 
                advanceStateFunction={() => {
                    setPageState(PAGE_STATE.IN_GAME);
                }}
                goBackStateFunction={() => {
                    setPageState(PAGE_STATE.GAMES_LIST);
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