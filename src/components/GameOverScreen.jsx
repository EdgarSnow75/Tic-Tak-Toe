import React from "react";

const GameOverScreen = ({ winner, handleReset }) => {
  return (
    <div id="game-over">
      <h2>Game is over !!</h2>
      {winner && <p>{winner} has won !</p>}
      {!winner && <p>You guys are equal in smarts !</p>}
      <button onClick={handleReset}>Rematch !</button>
    </div>
  );
};

export default GameOverScreen;
