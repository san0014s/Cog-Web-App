import { MenuItem, Select, Button, Grid, Container } from "@mui/material";
import React, { useEffect, useState } from "react"
import PersonalDataChart from "../components/PersonalDataChart";
import SessionState from "../components/SessionState"
import { GAMES_ENUM } from "../constants/GamesConstants";
import { useNavigate } from 'react-router-dom';
import DataBubbles from "../components/DataBubbles";

export default function Profile() {

    const navigate = useNavigate();

    const [account, setAccount] = useState();
    const [gameType, setGameType] = useState(GAMES_ENUM.REACTION);

    useEffect(() => {
        if (SessionState.getId() < 0) {
            return;
        }

        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}`, { // TODO: make protocol, ip address, and port(?) configurable
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setAccount(data);
        }).catch((error) => { // catch any errors
            console.error(error)
        })
    }, [])

    if (account) {
        return <Grid container>
            <Grid item xs={3}>
                <div style={{margin: "10px"}}>
                    <h1>{account.name}</h1>
                    <h4>@{account.username}</h4>
                    <img 
                        width="95%"
                        alt={account.name}
                        src={account.picture ? account.picture : "https://cog-web-app-public-assets.s3.amazonaws.com/profile-pictures/default-pfp.jpg"}
                    />
                    <p>Joined: {account.joinDate}</p>
                    <p>Interests: {account.interests}</p>
                    <Button variant="outlined" onClick = {
                        () => navigate('/FFC_Select')
                    }>
                        Go To Your Decks
                    </Button>
                    <br/> 
                    <Button variant="outlined" onClick = {() => {
                        navigate(
                            '/profile/edit',
                            {
                                state: { 
                                    profile: account
                                }
                            }
                        );
                    }}>
                        Edit Profile
                    </Button>
                    <br/> 
                </div>
            </Grid>
            <Grid item xs={9}>
                <Container style={{marginTop: '10px'}}>
                    <Select 
                        value={gameType}
                        onChange={(e) => {setGameType(e.target.value)}}
                        style={{marginBottom: '20px'}}
                    >
                        <MenuItem value={GAMES_ENUM.REACTION}>Reaction Game</MenuItem>
                        <MenuItem value={GAMES_ENUM.MEMORY}>Memory Game</MenuItem>
                        <MenuItem value={GAMES_ENUM.SLIDING_PUZZLE}>Sliding Puzzle Game</MenuItem>
                        <MenuItem value={GAMES_ENUM.COLORS}>Color Matching Game</MenuItem>
                    </Select>
                    <div style={{marginBottom: '20px'}}>
                        <DataBubbles gameType={gameType}/>
                    </div>
                    <PersonalDataChart
                        gameType={gameType}
                        containerProps={{
                            width: '100%',
                            height: '500px',
                        }}
                    />
                </Container>
            </Grid>
        </Grid>
    }
    else {
        return <>
            <h1>Oops! Looks like you aren't logged in...</h1>
            <h4>Try visiting the <a href="/login">login</a> page to sign in to your account</h4>
        </>
    }

}