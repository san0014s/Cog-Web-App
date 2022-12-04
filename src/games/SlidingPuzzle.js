import React from "react";
import "../css/SlidingPuzzle.css";
import { recordData } from "./GameDataRecorder";
import { GAMES_ENUM } from "../constants/GamesConstants"

const getShuffledPuzzle = () => {
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const rowOne = [],
    rowTwo = [],
    rowThree = [];

  while (values.length) {
    const random = Math.floor(Math.random() * values.length);

    if (rowOne.length < 3) {
      rowOne.push(values.splice(random, 1)[0]);
    } else if (rowTwo.length < 3) {
      rowTwo.push(values.splice(random, 1)[0]);
    } else {
      rowThree.push(values.splice(random, 1)[0]);
    }
  }

  return [rowOne, rowTwo, rowThree];
};

const flattenArray = arr => {
  return arr.reduce((flatArr, subArr) => flatArr.concat(subArr), []);
};

const getInversionsCount = arr => {
  arr = flattenArray(arr).filter(n => n !== 0);

  const inversions = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const currentValue = arr[i];
    const currentInversions = arr.filter(
      (val, j) => i < j && val < currentValue
    );
    inversions.push(currentInversions.length);
  }

  const inversionsCount = inversions.reduce((total, val) => total + val, 0);

  return inversionsCount;
};

const isSolvable = puzzle => {
  return getInversionsCount(puzzle) % 2 === 0;
};

const getPuzzle = () => {
  let puzzle = getShuffledPuzzle();

  while (!isSolvable(puzzle)) {
    puzzle = getShuffledPuzzle();
  }

  return puzzle;
};

export default function SlidingPuzzle({ advanceStateFunction }) {
  const [puzzle, setPuzzle] = React.useState([]);
  const [complete, setComplete] = React.useState(false);
  const [moves, setMoves] = React.useState(0);

  React.useEffect(() => {
    setPuzzle(getPuzzle());
  }, []);

  const movePiece = (x, y) => {
    if (!complete) {
      if (checknext_box(x, y) || checknext_box(x, y, 2)) {
        const emptySlot = checknext_box(x, y) || checknext_box(x, y, 2);

        const PuzzleShift = puzzle.map(row => row.slice());

        if (x === emptySlot.x && y < emptySlot.y) {
          PuzzleShift[emptySlot.x][emptySlot.y] = puzzle[x][y + 1];
          PuzzleShift[x][y + 1] = PuzzleShift[x][y];
          PuzzleShift[x][y] = 0;
        } else if (x === emptySlot.x && y > emptySlot.y) {
          PuzzleShift[emptySlot.x][emptySlot.y] = puzzle[x][y - 1];
          PuzzleShift[x][y - 1] = PuzzleShift[x][y];
          PuzzleShift[x][y] = 0;
        }

        if (y === emptySlot.y && x < emptySlot.x) {
          PuzzleShift[emptySlot.x][emptySlot.y] = puzzle[x + 1][y];
          PuzzleShift[x + 1][y] = PuzzleShift[x][y];
          PuzzleShift[x][y] = 0;
        } else if (y === emptySlot.y && x > emptySlot.x) {
          PuzzleShift[emptySlot.x][emptySlot.y] = puzzle[x - 1][y];
          PuzzleShift[x - 1][y] = PuzzleShift[x][y];
          PuzzleShift[x][y] = 0;
        }

        setPuzzle(PuzzleShift);

        setMoves(moves + 1);

        checkCompletion(PuzzleShift);
      }
    }
  };

  const checkCompletion = puzzle => {
    if (flattenArray(puzzle).join("") === "123456780") {
      setComplete(true);
    }
  };

  const checknext_box = (x, y, d = 1) => {
    const next_box = [];

    if (puzzle[x][y] !== 0) {
      next_box.push(
        puzzle[x - d] && puzzle[x - d][y] === 0 && { x: x - d, y: y }
      );
      next_box.push(puzzle[x][y + d] === 0 && { x: x, y: y + d });
      next_box.push(
        puzzle[x + d] && puzzle[x + d][y] === 0 && { x: x + d, y: y }
      );
      next_box.push(puzzle[x][y - d] === 0 && { x: x, y: y - d });
    }

    const emptySlot = next_box.find(el => typeof el === "object");

    return emptySlot;
  };

  return (
    <div className="Slide">
      {<h1>Moves: {moves}</h1>}
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#2E7378",
          border: `5px solid ${complete ? "black" : "#2E7378"}`,
          borderRadius: 5,
          padding: 25
        }}
      >
        {puzzle.map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex"
            }}
          >
            {row.map((col, j) => {
              return (
                <div
                  key={`${i}-${j}`}
                  onClick={() => movePiece(i, j)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 250,
                    height: 250,
                    margin: 2,
                    backgroundColor: "#fdf5df",
                    borderRadius: 25,
                    cursor: complete ? "not-allowed" : "pointer",
                    userSelect: "none",
                  }}
                >
                  {(col !== 0 &&
                    <img
                      alt={col}
                      src={`${process.env.PUBLIC_URL}/sliding_puzzle_images/image_part_00${col}.png`}
                      width="100%"
                      height="100%"
                      draggable="false"
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {complete && (
        <p>
          <button
            onClick={() => {
              recordData(GAMES_ENUM.SLIDING_PUZZLE, moves);
              advanceStateFunction();
            }}
          >
            Finish
          </button>
        </p>
      )}
    </div>
  );
}
