import React, { useEffect, useState } from "react";
import { Board } from "./Board";
import { GameState } from "./GameState";
import { GameResult } from "./GameResult";
import { CalculateWinner } from "./CalculateWinner";
import gameOverSoundtrack from "../sounds/src_sounds_game_over.wav";
import gameClickSoundtrack from "../sounds/src_sounds_click.wav";
import gameCongratsSoundtrack from "../sounds/CongratsSoundtrack.mp3";

const gameOverSound = new Audio(gameOverSoundtrack);
gameOverSound.volume = 0.3;
const gameClickSound = new Audio(gameClickSoundtrack);
gameClickSound.volume = 0.5;
const gameCongratsSound = new Audio(gameCongratsSoundtrack);
gameCongratsSound.volume = 0.5;

export const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)); // null !== " "
  const [playerTurn, setPlayerTurn] = useState("X");
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleSquareClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }
    if (squares[index] !== null) {
      return;
    }
    const newSquare = [...squares];
    newSquare[index] = playerTurn;
    setSquares(newSquare);

    if (playerTurn === "O") {
      setPlayerTurn("X");
    } else {
      setPlayerTurn("O");
    }
  };

  const handleRestart = () => {
    setGameState(GameState.inProgress);
    setSquares(Array(9).fill(null));
    setPlayerTurn("X");
    const el = document.querySelectorAll(".highlighted");
    el.forEach((e) => {
      e.classList.remove("highlighted");
    });
  };

  useEffect(() => {
    CalculateWinner({ squares, setGameState });
  }, [squares]);

  // every()
  useEffect(() => {
    if (squares.some((square) => square !== null)) {
      gameClickSound.play();
    }
  }, [squares]);

  useEffect(() => {
    if (gameState !== GameState.inProgress) {
      if (gameState == GameState.draw) {
        gameOverSound.play();
      } else {
        gameCongratsSound.play();
      }
    }
  }, [gameState]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        onSquareClick={handleSquareClick}
        squares={squares}
        playerTurn={playerTurn}
      />
      <GameResult gameState={gameState} reStart={handleRestart} />
    </div>
  );
};
