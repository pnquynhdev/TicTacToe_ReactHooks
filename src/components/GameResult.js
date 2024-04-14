import { GameState } from "./GameState";
import "./GameResult.css";

export const GameResult = ({ gameState, reStart }) => {
  if (gameState === GameState.inProgress) {
    return;
  }
  let winstatus = null;
  let status;
  switch (gameState) {
    case GameState.playerOWins:
      status = "O Wins";
      winstatus = "win-status";
      break;
    case GameState.playerXWins:
      status = "X Wins";
      winstatus = "win-status";
      break;
    case GameState.draw:
      status = "Draw";
      break;
    default:
      status = "";
  }

  return (
    <div className="game-result-background">
      <div className="game-result-container">
        <div className={`game-status ${winstatus}`}>{status}</div>
        <div className="reset-button">
          <button onClick={reStart}>Play Again</button>
        </div>
      </div>
    </div>
  );
};
