import React from "react";
import { Link } from 'react-router-dom';
import TeamDetails from './TeamDetails';

const TeamSummary = ({ team }) => {
  return (
    <div className="card card-sticky z-depth-0">
      <div className="card-image">
        <img src={team.badge} width="100px" height="100px" />
      </div>
      <div className="card-content">  
          <span className="card-title grey-text text-darken-4">
          <Link to={'/teamDetails/' + team.id} key={team.id}>
          {team.teamName}
        </Link>
        </span>
      </div>
    </div>
  );
};
export default TeamSummary;
