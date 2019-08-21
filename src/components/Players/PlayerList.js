import React, { Component } from "react";
import PlayerSummary from './PlayersSummary';
import { connect } from 'react-redux';

class PlayerList extends Component {

  render() {
    const { players } = this.props;
    this.teamId = this.props.match.params.id;

    return (
      <div className="row">
        {players &&
          players
          .filter(player => player.teamId == this.teamId)
          .map(player => {
            return (
              <div className="col s4" key={player.id}>
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

const MapStateToProps = state => {
  console.log(state);
  return {
    players: state.players
  }
};


export default connect(MapStateToProps, null)(PlayerList);
