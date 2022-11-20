// eslint-disable-next-line
import React, { useState, useEffect, useRef } from "react";
import Grid from "../components/Grid";
import { GAMES_ENUM } from "../constants/GamesConstants";
import "../css/MemoryGame.css";
import { recordData } from "./GameDataRecorder";


var counter = 0;
var newG = 1;
var oldGame = 1;

//Image Array
const imgs = ['circle.png',
              'decagon.png',
              'hexagon.png',
              'octagon.png',
              'pentagon.png',
              'rhombus.png',
              'square.png',
              'star.png',
              'trapezoid.png',
              'triangle.png',]
    
            
//Shuffle Images in Grid
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

//Main Function
export default function MemoryGame({ advanceStateFunction }) {

  const [newGame, setNewGame] = useState(false);
  const [list] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [finishedItems, setFinishedItems] = useState([]);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [matchesMade, setMatchesMade] = useState(0);
  const [round, setRound] = useState(0);


  //Check Items to See if they match or not
  const checkItems = (firstIndex, secondIndex) => {
    if (
      firstIndex[0] !== secondIndex[0] &&
      firstIndex[1] === secondIndex[1]
    ) {
      setFinishedItems([...finishedItems, firstIndex, secondIndex]);
      setMatchesMade(matchesMade + 1);
    } else {
      setTimeout(() => {
        setVisibleItems([]);
      }, 600);

      //Lives Counter
      counter += 1;
      if (counter >= 3){
        setLoser(true);
      }
    }
  };


  
  //If New Game is Reached
  if (parseInt(newG) === parseInt(oldGame)){
    if(newG !== 1){
      counter -= 1;
    }
    setLoser(false);

    //Add images to List to send to Grid to create image Cards
    for (let i = 0; i < newG; i++) {
      list.push(
      [i, imgs[i]]
      );

    } 
    
    for (let i = 0; i < newG; i++) {
      list.push(
      [i + newG, imgs[i]]
      );
    } 

    shuffle(list);
    newG += 1;
  }

  //Find Winner
  useEffect(
    () => {
      if (finishedItems.length > 0 && finishedItems.length === list.length) {
        setWinner(true);
      }
    },
    [finishedItems]
  );

  useEffect(()=>{
    if (counter == 3){
      setLoser(true);
      recordData(GAMES_ENUM.MEMORY, matchesMade)
      advanceStateFunction()
      counter = 0;
      newG = 1;
      oldGame = 1;
      setNewGame(newGame);
    }
  }, [counter]);

  return (
    <div className="background">
      <div className="liveBox">
      <h1 className="lives">Lives: {3-counter}</h1>
      </div>
      <div className="text-center p-4 d-flex flex-column">
        <div className="game"> Game {oldGame}</div>
        <div className="boxed">
        {list.length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div>
            <Grid
              list= {list}
              visibleItems={visibleItems}
              setVisibleItems={setVisibleItems}
              finishedItems={finishedItems}
              checkItems={checkItems}
            />
            </div>
          )}
          </div>
            {winner && (
              <div className="game">
                { <button
                  onClick={() => {
                    
                    //Clear Image List so we can repopulate for next round
                    while(list.length > 0){
                      list.pop();
                    }
                    setNewGame(!newGame);
                    setVisibleItems([]);
                    setFinishedItems([]);
                    setWinner(false);
                    oldGame += 1;
                  }}
                  className="btn btn-primary btn-lg"
                >
                  Next Round
                </button> }
              </div>
            )}
          {loser && (
            <div>
              <font size="+5">You Lose</font>
              <br />
              <br />
            </div>
          )}
        </div>
    </div>
    
  );
}
