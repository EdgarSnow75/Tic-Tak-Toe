import React, { useState } from "react";

const PlayerInfo = ({ player, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player);

  function handleChange(event) {
    setPlayerName(event.target.value);
    console.log("Input Event : ", event);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            required
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((editing) => !editing)}>
        {isEditing ? "Save" : "Update"}
      </button>
    </li>
  );
};

export default PlayerInfo;
