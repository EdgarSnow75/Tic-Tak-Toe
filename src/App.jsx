import { useState } from "react";
import GameGrid from "./components/GameGrid";
import PlayerInfo from "./components/PlayerInfo";
import Turns from "./components/Turns";

function App() {
  const [firstPlayer, setFirstPlayerName] = useState("Player First");
  const [secondPlayer, setSecondPlayerName] = useState("Player Second");
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSquareSelect(rowIndex, colIndex) {
    setCurrentPlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
    setGameTurns((prevGameTurns) => {
      let playerSymbol = "X";
      let playerName = firstPlayer;

      if (prevGameTurns.length > 0 && prevGameTurns[0].player.symbol === "X") {
        playerSymbol = "O";
        playerName = secondPlayer;
      }

      const updatedGameTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: { playerName: playerName, symbol: playerSymbol },
        },
        ...prevGameTurns,
      ];

      return updatedGameTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            playerName={firstPlayer}
            setPlayerName={setFirstPlayerName}
            playerSymbol="X"
            isActive={currentPlayer === "X"}
          />
          <PlayerInfo
            playerName={secondPlayer}
            setPlayerName={setSecondPlayerName}
            playerSymbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        <GameGrid onSquareSelect={handleSquareSelect} gameTurns={gameTurns} />
      </div>
      <Turns gameInfo={gameTurns} />
    </main>
  );
}

export default App;
