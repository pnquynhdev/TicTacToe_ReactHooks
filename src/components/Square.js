import React from "react";
import "./Square.css";

export const Square = ({ className, onClick, value, playerTurn }) => {
  let hoverClass = null;
  if (value == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  return (
    <div className={`square ${className} ${hoverClass} `} onClick={onClick}>
      {value}
    </div>
  );
};
