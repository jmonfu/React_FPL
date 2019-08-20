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
        {this.player &&
          this.player.map(player => {
            return (
              <div className="col s12 m8 offset-m2 l6 offset-l3">
              <div className="card-panel grey lighten-5 z-depth-2">
                <div className="row valign-wrapper">
                  <div className="col s3">
                    <img
                      src={player.playerFace}
                      alt=""
                      class="circle responsive-img"
                    />
                  </div>
                  <div className="col s9">
                    <span class="link-title-text">
                      {player.playerName} {player.playerSurname}
                    </span>
                  </div>
                </div>
                <div className="row valign-wrapper">
                  <div className="col s12">
                    <span class="link-title-text">{player.DOB}</span>
                  </div>
                </div>
                <div className="row valign-wrapper">
                  <div className="col s12">
                    <span class="link-title-text">
                      {player.playerPosition}
                    </span>
                  </div>
                </div>
                <div className="row valign-wrapper">
                  <div className="col s3">
                    <img
                      src={player.playerNationalFlag}
                      alt=""
                      class="circle responsive-img"
                    />
                  </div>
                  <div className="col s9">
                    <span class="link-title-text">playerNationality</span>
                  </div>
                </div>
              </div>
            </div>              
            );
          })}
      </div>
    );
  }
}

export default PlayerDetails;
