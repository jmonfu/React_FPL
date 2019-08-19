import React, { Component } from "react";
import PlayerSummary from './PlayersSummary';

class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.players = [
      {
        id: 1,
        playerFace:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        playerName: "Paul",
        playerSurname: "Pogba",
        teamId: 1
      },
      {
        id: 2,
        playerFace:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        playerName: "David",
        playerSurname: "De Gea",
        teamId: 1
      },
      {
        id: 3,
        playerFace:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        playerName: "Alexander",
        playerSurname: "Lacazette",
        teamId: 4
      },
      {
        id: 4,
        playerFace:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        playerName: "Patrick",
        playerSurname: "Aubemyang",
        teamId: 4
      },
      {
        id: 5,
        playerFace:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        playerName: "David",
        playerSurname: "Eriksen",
        teamId: 5
      },
      {
        id: 6,
        playerFace:
          "http://soccersurgery.net/wp-content/uploads/2016/06/arsenal-logo-128x128.jpg",
        playerName: "Harry",
        playerSurname: "Kane",
        teamId: 5
      }
    ];
  }

  render() {
    return (
      <div className="row">
        {this.players &&
          this.players.map(player => {
            return (
              <div className="col s3 offset-s1" key={player.id}>
              <span className="flow-text">
                <PlayerSummary player={player} />
              </span>
            </div>
            );
          })}
      </div>
    );
  }
}

export default PlayerList;
