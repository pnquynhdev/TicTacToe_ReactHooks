import { GameState } from "./GameState";

export const CalculateWinner = ({ squares, setGameState }) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] !== null &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      if (squares[a] === "X") {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }
      lines[i].forEach((index) => {
        document
          .querySelectorAll(".square")
          [index].classList.add("highlighted");
      });
      return;
    }
  }

  const areAllSquaresFilledIn = squares.every((square) => square !== null);
  if (areAllSquaresFilledIn) {
    setGameState(GameState.draw);
  }
};
