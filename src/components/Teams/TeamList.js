import React, { Component } from "react";
import TeamSummary  from '../Teams/TeamSummary';

const TeamList = ({teams}) => {
  return (
    <div className="row">
    {teams &&
      teams.map(team => {
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
