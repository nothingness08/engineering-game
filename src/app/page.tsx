"use client"
import { useEffect, useState } from "react";
import styles from "../styles/page.module.css";

const GRIDSIZE = 5;

export default function Home() {
  const [board, setBoard] = useState(
    Array(GRIDSIZE).fill(null).map(() => Array(GRIDSIZE).fill(null))
  );


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
          return(
            <button
              className={styles.cell}
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >{board[rowIndex][colIndex]}</button>
          )
        })
      )}
      </div>
    </div>
    
  );
}
