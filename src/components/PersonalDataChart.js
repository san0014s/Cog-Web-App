import React, { useEffect, useState, Fragment } from "react";
import SessionState from "./SessionState";

import {CanvasJSChart} from 'canvasjs-react-charts'

export default function PersonalDataChart() {

    const [personalData, setPersonalData] = useState([]);

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Average Reaction Time over Time"
        },
        axisY: {
            title: "Average Reaction Time (milliseconds)",
            suffix: "ms"
        },
        axisX: {
            title: "",
            prefix: "",
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "{x}: {y}ms",
            dataPoints: personalData
        }]
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${SessionState.getId()}/personalData`, { // TODO: make protocol, ip address, and port(?) configurable
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
    }, []);

    return <Fragment>
        <CanvasJSChart options = {options}/>
    </Fragment>
}