// eslint-disable-next-line
import React, { useState, useEffect, useRef } from "react";
import Grid from "../components/Grid";
import "../css/MemoryGame.css";
import SessionState from "../components/SessionState";


var counter = 0;
var newG = 1;
var oldGame = 1;
const GAME_TYPE = 2;

//Image Array
var imgs = ['https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000', 
            'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80', 
            'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?cs=srgb&dl=pexels-wojciech-kumpicki-2071873.jpg&fm=jpg/',
            'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9',
            'https://styles.redditmedia.com/t5_2r5i1/styles/communityIcon_x4lqmqzu1hi81.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstq5jDn2PIVgzt-5XgS4X37MTV6tpDyfSP0Racgf6rCJSxYw4MQSVNtaxQM6hI9IJrTs&usqp=CAU',
            'https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg',
            'https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d'];
    
            
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

  /**
     * Hits the storeData endpoint of the REST server to store a stat and gameType
     * 
     * @param {int} gameType - enumerable property representing the game type (i've arbitrarily chosen 1 for this game, TODO: standardize that server side)
     * @param {num} stat - whatever stat needs recorded for this game
     */
   function recordData(gameType, stat) { // TODO this should be a utility function used by all games & thus shouldn't be contained in this component in the future
    let personalData = {
        "gameType":gameType,
        "stat":stat,
        "accountId":SessionState.getId() //TODO: perhaps we should check to be sure this value is valid?
    }

    fetch('http://localhost:8080/storeData', { // TODO: make protocol, ip address, and port(?) configurable
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personalData)
    })
    .catch(e => console.error(e)); // TODO: possibly apply a .then() and .catch() or return the promise so that callers can handle .then and/or .catch
}


//Main Function
export default function MemoryGame() {

  const [newGame, setNewGame] = useState(false);
  const [list] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [finishedItems, setFinishedItems] = useState([]);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);


  //Check Items to See if they match or not
  const checkItems = (firstIndex, secondIndex) => {
    if (
      firstIndex[0] !== secondIndex[0] &&
      firstIndex[1] === secondIndex[1]
    ) {
      setFinishedItems([...finishedItems, firstIndex, secondIndex]);
    } else {
      setTimeout(() => {
        setVisibleItems([]);
      }, 600);

      //Lives Counter
      counter += 1;
      if (counter >= 3){
        setLoser(true);
        recordData(GAME_TYPE, newG);
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
                <font size="+5">You Win</font>
                <br />
                <font size="-5">Finished in seconds</font>
                <br />
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
                  className="btn btn-warning mb-4"
                >
                  Next Round
                </button> }
              </div>
            )}
          {loser && (
            <div>
              <font size="+5">You Lose</font>
              <br />
              <button href="http://localhost:3000/games"> Play Again </button>
              <br />
              {/* { <button
                onClick={() => {
                  while(list.length >0){
                    list.pop();
                  }
                  setNewGame(!newGame);
                  setVisibleItems([]);
                  setFinishedItems([]);
                  counter = 0;
                  oldGame = 1;
                  newG = 1;
                }}
                className="btn btn-warning mb-4"
              >
                Restart
              </button> } */}
            </div>
          )}
        </div>
    </div>
    
  );
}
