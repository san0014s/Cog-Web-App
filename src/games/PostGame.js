import { Button, Container } from "@mui/material";
import React from "react";
import PersonalDataChart from "../components/PersonalDataChart";
import SessionState from '../components/SessionState';

export default function PostGame({ game, playAgain, backToGames }) {

    if (SessionState.getId() > 0) { //if the user is logged in
        return <Container style={{marginTop: '20px'}}>
            <PersonalDataChart 
                gameType={game.id}
                containerProps={{
                    width: '100%',
                    height: '600px',
                }}
            />
            <br />
            <Button
                onClick={playAgain}
                variant='outlined'
                style={{marginRight: '10px'}}
            >
                Play Again
            </Button>
            <Button onClick={backToGames} variant='outlined'>Back to Games</Button>
        </Container>
    }        
    else {
        return<>
            <h4>Start saving your preformance by <a href="/signup">Signing Up</a>, or <a href="/login">Login</a> if you already have an account!</h4>
            <Button onClick={playAgain}>Play Again</Button>
            <Button onClick={backToGames}>Back to Games</Button>
        </>
    }
    

}