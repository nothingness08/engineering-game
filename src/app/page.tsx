"use client"
import { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import { player } from "../const/types";
import { fighterClass } from "../const/details";
const GRIDSIZE = 5;
const GREY = "#808080";

function isNextTo(playerPos: number[], tile: number[]): boolean {
  const [playerX, playerY] = playerPos;
  const [tileX, tileY] = tile;

  const dx = Math.abs(playerX - tileX);
  const dy = Math.abs(playerY - tileY);

  return dx + dy === 1;
}

export default function Home() {
  const [board, setBoard] = useState(
    Array(GRIDSIZE).fill(null).map(() => Array(GRIDSIZE).fill(null))
  );
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
      position: [0,0],
      isMoving: false
    } 
    setPlayerArr([player1]);
  }

  function handleCellClick(rowIndex: number, colIndex: number){
    playerArr.forEach((p) => {

    })
    let newBoard = [...board];
    newBoard[rowIndex][colIndex] +=1;
    setBoard(newBoard);
  }

  if(!playerArr[0]){return(<div></div>)}
  return(
    <div className={styles.gameContainer}>
      <div className={styles.board}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
            let tileColor = "white";
            let pTile;
            playerArr.forEach((p) => {
              if(p.position[0] === rowIndex && p.position[1] === colIndex){
                tileColor = p.class.color;
              }
              if(isNextTo(p.position, [rowIndex, colIndex]) ){
                tileColor = GREY;
              }
            })
          return(
            <button
              className={styles.cell}
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              style={{
                backgroundColor: tileColor
              }}
            >{cell}</button>
          )
        })
      )}
      </div>
    </div>
    
  );
}
