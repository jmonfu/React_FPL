import React from "react";
import TeamSummary  from '../Teams/TeamSummary';

const TeamList = ({teams}) => {
  return (
    <div className="row">
    {teams &&
      teams
      .filter(team => team.leagueId == "rcnF3m4a6SdkiLptUn9W")
      .map(team => {
        return (
          <div className="col s4" key={team.id}>
          <span className="flow-text">
            <TeamSummary team={team} />
          </span>
        </div>
        );
      })}
  </div>
)
}

export default TeamList;
