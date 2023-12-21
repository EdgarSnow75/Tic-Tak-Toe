import { useState } from "react";
import GameGrid from "./components/GameGrid";
import PlayerInfo from "./components/PlayerInfo";
import Turns from "./components/Turns";
import { WinningCombinations } from "./constants/WinningCombinations";
import GameOverScreen from "./components/GameOverScreen";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = [...initialBoard.map((array) => [...array])];
  let winner;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WinningCombinations) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const currentPlayer = deriveActivePlayer(gameTurns);

  function handleBoardResetting() {
    setGameTurns([]);
  }

  function handleSquareSelect(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      const activePlayer = deriveActivePlayer(prevGameTurns);

      const updatedGameTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: activePlayer,
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
            player="First Player"
            symbol="X"
            isActive={currentPlayer == "X"}
          />
          <PlayerInfo
            player="SecondPlayer"
            symbol="O"
            isActive={currentPlayer == "O"}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOverScreen winner={winner} handleReset={handleBoardResetting} />
        )}
        <GameGrid onSquareSelect={handleSquareSelect} gameBoard={gameBoard} />
      </div>
      <Turns gameInfo={gameTurns} />
    </main>
  );
}

export default App;
