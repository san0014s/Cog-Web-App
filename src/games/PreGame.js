import React from "react";
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PreGame({ game, advanceStateFunction }) {

    return <>
{/* <<<<<<< HEAD */}
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Card sx={{ maxWidth: 700, maxHeigth: 700}}>
      <CardMedia
        component="img"
        style = {{width: "90%", position: "relative", marginLeft: "auto", marginRight: "auto"}}
        image={game.imgURL}
        alt="something went wrong"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.display}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {game.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          How to play: {game.howTo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={advanceStateFunction}>Play</Button>
      </CardActions>
    </Card>
    </div>
{/* =======
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
>>>>>>> ColorGame */}
    </>


}