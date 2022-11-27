import React from "react";
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PreGame({ game, advanceStateFunction, goBackStateFunction }) {

    return <>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: '10px'}}>
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
        <Button size="large" onClick={goBackStateFunction}>Back</Button>
      </CardActions>
    </Card>
    </div>
    </>


}