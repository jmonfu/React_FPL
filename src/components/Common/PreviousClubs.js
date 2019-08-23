import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const PreviousClubs = ({ previousClubs, teams }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Years</th>
          <th>Team Name</th>
          <th>Apps</th>
          <th>Goals</th>
        </tr>
      </thead>
      {previousClubs &&
        previousClubs.map(prevClub => {
          return (
            <tbody key={prevClub.from}>
              <tr>
                <td>
                  {prevClub.from}-{prevClub.to > 0 ? prevClub.to : ""}
                </td>
                {teams &&
                  teams
                    .filter(team => team.id == prevClub.teamId)
                    .map(team => {
                      return (
                        <td key={prevClub.from}>
                          <div className="row valign-wrapper">
                            <div className="col s2">
                              <img
                                src={team.badge}
                                alt=""
                                className="circle responsive-img" width="30" height="30"
                              />
                            </div>
                            <div className="col s10">{team.name}</div>
                          </div>
                        </td>
                      );
                    })}
                  <td>{prevClub.apps}</td>
                <td>{prevClub.goals}</td>
              </tr>
            </tbody>
          );
        })}
    </table>
  );
};

const mapStateToProps = state => {
  return {
    teams: state.firestore.ordered.teams
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "teams", orderBy: ["name", "asc"] }])
)(PreviousClubs);
