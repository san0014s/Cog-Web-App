import React, { Fragment, useEffect, useMemo, useState } from "react"
import SessionState from "./SessionState"

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
            setPercentile(data);
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

    return <Fragment>
        <div
            style={{
                height: '15vw',
                width: '15vw',
                backgroundColor: '#bbb',
                borderRadius: '50%',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                {percentile}th
            </p>
            <p style={{ fontSize: "1rem" }}>
                percentile
            </p>
        </div>

        <div
            style={{
                height: '15vw',
                width: '15vw',
                backgroundColor: '#bbb',
                borderRadius: '50%',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                {average}
            </p>
            <p style={{ fontSize: "1rem" }}>
                average
            </p>
        </div>

        <div
            style={{
                height: '15vw',
                width: '15vw',
                backgroundColor: '#bbb',
                borderRadius: '50%',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                {bestStat}
            </p>
            <p style={{ fontSize: "1rem" }}>
                best
            </p>
        </div>

        <div
            style={{
                height: '15vw',
                width: '15vw',
                backgroundColor: '#bbb',
                borderRadius: '50%',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                {recentStat}
            </p>
            <p style={{ fontSize: "1rem" }}>
                recent
            </p>
        </div>
    </Fragment>
}