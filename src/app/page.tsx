"use client"
import { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import { player } from "../const/types";
import { fighterClass } from "../const/details";
const GRIDSIZE = 5;

export default function Home() {
  const [board, setBoard] = useState(
    Array(GRIDSIZE).fill(null).map(() => Array(GRIDSIZE).fill(null))
  );
  const [tileColor, setTileColor] = useState("");
  const [playerArr, setPlayerArr] = useState<player[]>([]);

  useEffect(() => {
    gameStart();
  }, []);

  function gameStart(){
    let intialBoard = [...board];
    for(let i=0; i<GRIDSIZE; i++){
      for(let j=0; j<GRIDSIZE; j++){
        intialBoard[i][j] = i + j;
      }
    }
    setBoard(intialBoard);
    const player1: player = {
      health: 10,
      class: fighterClass,
      position: [0,0]
    } 
    setPlayerArr([player1]);
  }

  function handleCellClick(rowIndex: number, colIndex: number){
    let newBoard = [...board];
    newBoard[rowIndex][colIndex] +=1;
    setBoard(newBoard);
  }
  return(
    <div className={styles.gameContainer}>
      <div className={styles.board}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          // {
          //   setTileColor("white");
          //   playerArr.forEach((p) => {
          //     if(p.position[0] === rowIndex && p.position[1] === colIndex){
          //       setTileColor(p.class.image)
          //     }
          //   })
          // }
          return(
            <button
              className={styles.cell}
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              style={{
                backgroundColor: playerArr[0].class.image
              }}
            >{board[rowIndex][colIndex]}</button>
          )
        })
      )}
      </div>
    </div>
    
  );
}
