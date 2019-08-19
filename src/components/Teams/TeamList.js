import React, { Component } from "react";
import TeamSummary  from '../Teams/TeamSummary';

class TeamList extends Component {
  constructor(props) {
    super(props);

    this.teams = [
      {
        id: 1,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Manchester United"
      },
      {
        id: 2,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Aston Villa"
      },
      {
        id: 3,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Liverpool"
      },
      {
        id: 4,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Arsenal"
      },
      {
        id: 5,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Spurs"
      },
      {
        id: 6,
        badge:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        teamName: "Manchester City"
      }
    ];
  }

  render() {
    return (
      <div className="row">
        {this.teams &&
          this.teams.map(team => {
            return (
              <div className="col s3 offset-s1" key={team.id}>
              <span className="flow-text">
                <TeamSummary team={team} />
              </span>
            </div>
            );
          })}
      </div>
    );
  }
}

export default TeamList;
