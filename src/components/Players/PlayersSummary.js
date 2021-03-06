import React from "react";
import { Link } from "react-router-dom";

const PlayerSummary = ({ player }) => {
  return (
    <div className="col s12 m8 offset-m2 l6 offset-l3">
      <div className="card-panel grey lighten-5 z-depth-2">
        <div className="row valign-wrapper">
          <div className="col s3">
            <img src={player.profilePic} alt="" className="circle responsive-img" />
          </div>
          <div className="col s9">
            <span className="link-title-text">
              <Link to={"/playerDetails/" + player.id} key={player.id}>
                {player.name} {player.surname}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayerSummary;
