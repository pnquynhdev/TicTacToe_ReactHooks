import React from "react";
import "./App.css";
import { TicTacToe } from "./components/TicTacToe";

export const App = () => {
  return <TicTacToe/>
};

// Square
  // value (prop)
  // onClick function (prop)

// board
  // state
    // boardState
    // turnState
  // handleCLick
    // copy of our board state
    // if the index of the board is filled, return
    // mutate that copy, and add X or O
    // calculate next turn
    // set the state of the board
    // set the state of the turn

  // function that calculates the winner