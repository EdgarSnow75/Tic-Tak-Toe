import React, { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameGrid = ({ onSquareSelect, gameTurns }) => {
  let gameBoard = initialBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    const { playerName, symbol } = player;

    gameBoard[row][col] = symbol;
  }

  // const handlePlayerInput = (rowIndex, colIndex) => {
  //   setGameBoard((prevBoard) => {
  //     const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //     let selectedSquare = updatedBoard[rowIndex][colIndex];
  //     if (selectedSquare === null) {
  //       updatedBoard[rowIndex][colIndex] = currentPlayer;
  //       onSquareSelect();
  //     }

  //     return updatedBoard;
  //   });
  // };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSquareSelect(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameGrid;
