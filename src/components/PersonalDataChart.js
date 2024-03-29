import React, { useEffect, useState, Fragment } from "react";
import SessionState from "./SessionState";

import {CanvasJSChart} from 'canvasjs-react-charts'

const GAME_DATA = [
    {
        graphTitle: "Average Reaction Time over Time",
        yAxisTitle: "Average Reaction Time (milliseconds)",
        suffix: "ms",
    },
    {
        graphTitle: "Matches Made in Memory Game",
        yAxisTitle: "Matches Made",
        suffix: " matches",
    },
    {
        graphTitle: "Total Moves Needed to Finish Sliding Puzzle",
        yAxisTitle: "Total Moves",
        suffix: " moves",
    },
    {
        graphTitle: "Total Matches Made in Color Matching Game",
        yAxisTitle: "Total Matches Made",
        suffix: " matches",
    }
]

export default function PersonalDataChart({ gameType, containerProps }) {

    const [personalData, setPersonalData] = useState([]);

    const options = {
        animationEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: GAME_DATA[gameType-1].graphTitle,
        },
        axisY: {
            title: GAME_DATA[gameType-1].yAxisTitle,
            suffix: GAME_DATA[gameType-1].suffix
        },
        axisX: {
            interval: 1,
        },
        data: [{
            type: "line",
            toolTipContent: `{y}${GAME_DATA[gameType-1].suffix}`,
            dataPoints: personalData
        }]
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/personalData/${gameType}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            let newPersonalData = [];
            for (let i = 0; i < data.length; i++) {
                newPersonalData.push({x: i, y: data[i].stat});
            }
            setPersonalData(newPersonalData);
        }).catch((error) => { // catch any errors
            console.error(error)
        })
    }, [gameType]);

    return <Fragment>
        <CanvasJSChart options = {options} containerProps={containerProps}/>
    </Fragment>
}