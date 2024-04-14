import React from "react";
import { Square } from "./Square";
import "./Board.css";

export const Board = ({ onSquareClick, squares, playerTurn }) => {
  return (
    <div className="board">
      <Square
        playerTurn={playerTurn}
        className="right-border bottom-border"
        value={squares[0]}
        onClick={() => onSquareClick(0)}
      />
      <Square
        playerTurn={playerTurn}
        className="right-border bottom-border "
        value={squares[1]}
        onClick={() => onSquareClick(1)}
      />
      <Square
        playerTurn={playerTurn}
        className="bottom-border "
        value={squares[2]}
        onClick={() => onSquareClick(2)}
      />
      <Square
        playerTurn={playerTurn}
        className="right-border bottom-border"
        value={squares[3]}
        onClick={() => onSquareClick(3)}
      />
      <Square
        playerTurn={playerTurn}
        className="right-border bottom-border "
        value={squares[4]}
        onClick={() => onSquareClick(4)}
      />
      <Square
        playerTurn={playerTurn}
        className=" bottom-border"
        value={squares[5]}
        onClick={() => onSquareClick(5)}
      />
      <Square
        playerTurn={playerTurn}
        className="right-border "
        value={squares[6]}
        onClick={() => onSquareClick(6)}
      />
      <Square
        playerTurn={playerTurn}
        className="right-border"
        value={squares[7]}
        onClick={() => onSquareClick(7)}
      />
      <Square
        playerTurn={playerTurn}
        value={squares[8]}
        onClick={() => onSquareClick(8)}
      />
    </div>
  );
};
