import React, {Component} from "react";
import { connect } from 'react-redux';

const PreviousClubs = ({ previousClubs, teams }) => {
  return (
    <table>
    <thead>
      <tr>
        <th>Years</th>
        <th>Team Name</th>
        <th />
        <th>Apps</th>
        <th>Goals</th>
      </tr>
    </thead>
    {previousClubs &&
        previousClubs.map(prevClub => {
        return (
          <tbody key={prevClub.years}>
            <tr>
              <td>{prevClub.years}</td>
              {teams && teams
                .filter(team => team.id == prevClub.teamId)
                .map(team => {
                  return (
                    <td key={prevClub.years}>{team.name}</td>
                  )
                })
              }
                <td>{prevClub.teamBadge}</td>
              <td>{prevClub.apps}</td>
              <td>{prevClub.goals}</td>
            </tr>
          </tbody>
        );
      })}
  </table>
  );
};

const MapStateToProps = state => {
  return {
    teams: state.teams
  }
};


export default connect(MapStateToProps, null)(PreviousClubs);
