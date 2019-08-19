import React from "react";
import { Link } from 'react-router-dom';

const PlayerSummary = ({ player }) => {
  return (
    <div className="card card-sticky z-depth-0">
      <div className="card-image">
        <img src={player.playerFace} width="100px" height="100px" />
      </div>
      <div className="card-content">  
          <span className="card-title grey-text text-darken-4">
          <Link to={'/playerDetails/' + player.id} key={player.id}>
          {player.playerName} {player.playerSurname}
        </Link>
        </span>
      </div>
    </div>
  );
};
export default PlayerSummary;
