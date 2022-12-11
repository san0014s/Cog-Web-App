import { MenuItem, Select, Button, Grid, Container } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import PersonalDataChart from "../components/PersonalDataChart";
import SessionState from "../components/SessionState"
import { GAMES_ENUM } from "../constants/GamesConstants";
import DataBubbles from "../components/DataBubbles";

export default function Profile() {

    const navigate = useNavigate();
    const [account, setAccount] = useState();
    const [gameType, setGameType] = useState(GAMES_ENUM.REACTION);
    const [curveData, setCurveData] = useState();

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

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/curveData/${gameType}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setCurveData(data);
        }).catch(() => {
            setCurveData(undefined);
        });
    }, [gameType]);

    if (account) {
        return <div style={{backgroundColor: '#fdf5df', paddingBottom: '200px'}}>
        <Grid container>
            <Grid item xs={3}>
                <div style={{margin: "10px"}}>
                    <h1>{account.name}</h1>
                    <h4>@{account.username}</h4>
                    <img 
                        style={{
                            width:'23vw',
                            height:'23vw',
                        }}
                        alt={account.name}
                        src={account.picture ? account.picture : "https://cog-web-app-public-assets.s3.amazonaws.com/profile-pictures/default-pfp.jpg"}
                    />
                    <p>Joined: {account.joinDate}</p>
                    <p>Interests: {account.interests}</p>
                    <br />
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
                    <br/> <br />
                    <Button
                        variant='contained'
                        style={{
                            backgroundColor: 'green',
                        }}
                        onClick={() => {
                            navigate('/decks')
                        }}
                    >
                        Go To Family Flashcards
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
                    {curveData && (
                        <Fragment>
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
                        </Fragment>
                    )}
                    {curveData === undefined && (
                        <p>
                            No data to display at this time. Try playing some <a href='/games'>Games</a> to help us gather some data about your cognitive abilities.
                        </p>
                    )}
                </Container>
            </Grid>
        </Grid>
        </div>
    }
    else {
        return <>
            <h1>Oops! Looks like you aren't logged in...</h1>
            <h4>Try visiting the <a href="/login">login</a> page to sign in to your account</h4>
        </>
    }

}