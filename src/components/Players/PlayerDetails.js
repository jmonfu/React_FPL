import React, { Component } from "react";

class PlayerDetails extends Component {
  constructor(props) {
    super(props);

    this.playerDetails = [
      {
        id: 1,
        playerFace:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        playerName: "Paul",
        playerSurname: "Pogba",
        playerDOB: "15/03/1993",
        playerPosition: "Midfielder",
        playerNationalFlag:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        playerNationality: "France",
        previousClubs: [
          {
            teamId: 100
          },
          {
            teamId: 101
          },
          {
            teamId: 102
          }
        ],
        teamId: 1
      }
    ];
  }

  render() {
    return (
      <div class="row">
        {this.playerDetails &&
          this.playerDetails.map(playerDetails => {
            return (
              <div className="col s3 offset-s1" key={playerDetails.id}>
                <span className="flow-text">
                  <img
                    src={playerDetails.playerFace}
                    width="50px"
                    height="50px"
                  />
                </span>
                <span className="flow-text">
                  {playerDetails.playerName} {playerDetails.playerSurname}
                </span> <br></br>
                <span className="flow-text">{playerDetails.DOB}</span>
                <span className="flow-text">
                  {playerDetails.playerPosition}
                </span><br></br>
                <span className="flow-text">
                  <img
                    src={playerDetails.playerNationalFlag}
                    width="50px"
                    height="50px"
                  />
                  {playerDetails.playerNationality}
                </span>
              </div>
            );
          })}
      </div>
    );
  }
}

export default PlayerDetails;
