import React, { Component } from "react";

class PlayerDetails extends Component {
  constructor(props) {
    super(props);

    this.player = [
      {
        id: 1,
        playerFace:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        playerName: "Paul",
        playerSurname: "Pogba",
        playerDOB: "15/03/1993",
        playerPosition: "Midfielder",
        playerNationalFlag:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/flag-for-france_1f1eb-1f1f7.png",
        playerNationality: "France",
        previousClubs: [
          {
            years: "2011-2012",
            teamId: 1,
            teamName: "Manchester United",
            teamBadge: "",
            apps: "3",
            goals: "0"
          },
          {
            years: "2012-2016",
            teamId: 100,
            teamName: "Juventus",
            teamBadge: "",
            apps: "124",
            goals: "28"
          },
          {
            years: "2016-",
            teamId: 1,
            teamName: "Manchester United",
            teamBadge: "",
            apps: "94",
            goals: "24"
          }
        ],
        teamId: 1
      }
    ];
  }

  render() {
    return (
      <div className="container">
        <div class="row">
          {this.player &&
            this.player.map(player => {
              return (
                <div className="row center">
                  <div class="col s12 m4 l2">
                    <p>
                      <img
                        src={player.playerFace}
                        alt=""
                        class="circle responsive-img"
                      />
                    </p>
                  </div>
                  <div class="col s12 m4 l8">
                    <h5 class="center">
                      <b>
                        {player.playerName} {player.playerSurname}
                      </b>
                    </h5>
                    <p>
                      {player.playerDOB}
                      <br />
                      <i>{player.playerPosition}</i>
                    </p>
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
                      {player.previousClubs &&
                        player.previousClubs.map(prevClub => {
                          return (
                            <tbody key={prevClub.teamId}>
                              <tr>
                                <td>{prevClub.years}</td>
                                <td>{prevClub.teamName}</td>
                                <td>{prevClub.teamBadge}</td>
                                <td>{prevClub.apps}</td>
                                <td>{prevClub.goals}</td>
                              </tr>
                            </tbody>
                          );
                        })}
                    </table>
                  </div>
                  <div class="col s12 m4 l2">
                    <p>
                      <img
                        src={player.playerNationalFlag}
                        alt=""
                        class="circle responsive-img"
                      />
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default PlayerDetails;
