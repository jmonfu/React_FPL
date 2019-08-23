import React, { Component } from "react";
import PlayerSummary from "./PlayersSummary";
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class PlayerList extends Component {
  render() {
    const { players } = this.props;
    this.teamId = this.props.match.params.id;
    return (
      <div className="row">
        {players &&
          players
            .filter(
              this.teamId != undefined
                ? player => player.teamId == this.teamId
                : player => player
            )
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

const mapStateToProps = (state) => {
  return {
    players: state.firestore.ordered.players
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'players'}
  ])
)(PlayerList)