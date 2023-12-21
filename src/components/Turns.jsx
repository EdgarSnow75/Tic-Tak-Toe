import React from "react";

const Turns = ({ gameInfo }) => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#000000",
        padding: "1rem",
      }}
    >
      <h2>Logs</h2>
      {gameInfo.length > 0 ? (
        <ol id="log">
          {gameInfo.map((turn) => (
            <li key={`${turn.square.row}, ${turn.square.col}`}>
              <p>
                {turn.player} played on row {turn.square.row} and column{" "}
                {turn.square.col}
              </p>
            </li>
          ))}
        </ol>
      ) : (
        <p>There are no player activities yet.</p>
      )}
    </div>
  );
};

export default Turns;
