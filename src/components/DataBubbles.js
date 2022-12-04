import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react"
import SessionState from "./SessionState"

const bubbleStyle = {
    height: '180px',
    width: '180px',
    backgroundColor: '#bbb',
    borderRadius: '50%',
    textAlign: "center",
    padding: '56px 0',
    margin: "auto",
};

export default function DataBubbles({ gameType }) {

    const [percentile, setPercentile] = useState();
    const [average, setAverage] = useState();
    const [bestStat, setBestStat] = useState();
    const [recentStat, setRecentStat] = useState();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/curveData/${gameType}/percentile`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setPercentile(Math.round(data));
        }).catch((error) => { // catch any errors
            console.error(error)
        })
    }, [gameType, SessionState])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/personalData/${gameType}/average`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setAverage( Math.round(data * 100) / 100 );
        }).catch((error) => { // catch any errors
            console.error(error)
        })
    }, [gameType, SessionState])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/curveData/${gameType}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setBestStat(data.bestStat);
            setRecentStat(data.recentStat);
        }).catch((error) => { // catch any errors
            console.error(error)
        })
    }, [gameType, SessionState])

    return <Grid container>
        
        <Grid item xs={3}>
            <div style={bubbleStyle}>
                <p style={{ fontSize: "1rem" }}>
                    Best Score:
                </p>
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    {bestStat}
                </p>
            </div>
        </Grid>

        <Grid item xs={3}>
            <div style={bubbleStyle}>
                <p style={{ fontSize: "1rem" }}>
                    Percentile:
                </p>
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    {percentile}th
                </p>
            </div>
        </Grid>

        <Grid item xs={3}>
            <div style={bubbleStyle}>
                <p style={{ fontSize: "1rem" }}>
                    Average Score:
                </p>
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    {average}
                </p>
            </div>
        </Grid>

        <Grid item xs={3}>
            <div style={bubbleStyle}>
                <p style={{ fontSize: "1rem" }}>
                    Recent Score:
                </p>
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    {recentStat}
                </p>
            </div>
        </Grid>
    </Grid>
}