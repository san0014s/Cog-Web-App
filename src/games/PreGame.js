import React from "react";
import { Button } from "@mui/material";

export default function PreGame({ game, advanceStateFunction }) {

    return <>
        <div style={{    "position": "absoute",
  width: "100vw",
  height: "120vh",
  overflow: "hidden",
  "background-position": "center",
  "background-repeat": "no-repeat",
  "background-size": "cover",
  "background-color": "#fdf5df" }}>
        <div style={{  "position":"relative", "width": "600px",
  "height": "600px",
  "top" : "20vh",
  "border-radius": "50px",
  "background-color": "#2E7378",
  "margin": "auto",
  "box-sizing" : "content-box"}}>
            <h1 style={{"position":"relative", "top":"250px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>{game.display}</h1>
            <h4 style={{"position":"relative", "top":"250px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>{game.description}</h4>
            <p style={{"position":"relative", "top":"300px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","color": "#fdf5df", "font": "Brush Script MT"}}>How to play: {game.howTo}</p>
            <Button style={{"position":"relative", "top":"350px", "left": "33%", height:"100px", width: "200px", 
             "text-align": "center",
             "justify-content": "center",
             "align-items": "center","backgroundColor": "#fdf5df", "color": "#72a8a1", "font": "Brush Script MT"}} onClick={advanceStateFunction}>Play</Button>
        </div>
        </div>
    </>


}