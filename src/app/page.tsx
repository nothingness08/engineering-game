//TODO
// figure out how to store players and enemies
// Enemy movement
// Take turns
// Sidebar to display health and attack
// When click attack in sidebar, highlight range and enemies
"use client"
import { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import { player } from "../const/types";
import { fighterClass } from "../const/details";
const GRIDSIZE = 8;
const GREY = "#808080";

function isNextTo(p: player, tilePos: number[]): boolean {
  const [playerX, playerY] = p.position;
  const [tileX, tileY] = tilePos;

  const dx = Math.abs(playerX - tileX);
  const dy = Math.abs(playerY - tileY);
  //king movement
  // if(dx === 0 && dy === 0){
  //   return false;
  // }
  // return (dx + dy <= p.class.movement);

  //rook movement
  if(dx === 0 && dy === 0){
    return false;
  }
  if((dy === 0 && dx <= p.class.movement) || (dx === 0 && dy <= p.class.movement)){
    return true
  }
  else{
    return false;
  }
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
    //temp
    const player1: player = {
      health: 10,
      class: fighterClass,
      position: [0,0],
      isMoving: false
    }
    setPlayerArr([player1]);
  }

  function handleCellClick(pos: number[]){
    const updatedPlayers = playerArr.map((p) => {
    let newPlayer = { ...p };

    if (newPlayer.position[0] === pos[0] && newPlayer.position[1] === pos[1]) {
      newPlayer.isMoving = !newPlayer.isMoving;
    } else if (isNextTo(newPlayer, pos) && newPlayer.isMoving) {
      newPlayer = { ...newPlayer, position: pos, isMoving: false };
    }

    return newPlayer;
    });

    setPlayerArr(updatedPlayers);
  }

  if(!playerArr[0]){return(<div></div>)}
  return(
    <div className={styles.gameContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.board}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
              let tileColor = "white";
              playerArr.forEach((p) => {
                if(p.position[0] === rowIndex && p.position[1] === colIndex){
                  tileColor = p.class.color;
                }
                if(isNextTo(p, [rowIndex, colIndex]) && p.isMoving){
                  tileColor = GREY;
                }
              })
            return(
              <button
                className={styles.cell}
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleCellClick([rowIndex, colIndex])}
                style={{
                  backgroundColor: tileColor
                }}
              >{cell}</button>
            )
          })
        )}
        </div>
      </div>
      <div className={styles.sideBar}></div>
    </div>
    
  );
}
