import React, { Component } from "react";
import { connect } from 'react-redux';
import PreviousClubs from "../Common/PreviousClubs";
import Nation from "../Common/Nation";
import PlayingPosition from "../Common/PlayingPosition";
import moment from 'moment'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class PlayerDetails extends Component {

  render() {
    const { players } = this.props;
    this.id = this.props.match.params.id;
    return (
      <div className="container">
        <div className="row">
          {players &&
            players
            .filter(player => player.id == this.id)
            .map(player => {
              return (
                <div className="row center" key={player.id}>
                  <div className="col s12 m4 l2">
                    <p>
                      <img
                        src={player.profilePic}
                        alt=""
                        className="circle responsive-img"
                      />
                    </p>
                  </div>
                  <div className="col s12 m4 l8">
                    <h5 className="center">
                      <b>
                        {player.name} {player.surname}
                      </b>
                    </h5>
                    <p>
                      {player.dob}
                    </p>
                      <PlayingPosition positionId= {player.positionId} />
                      <PreviousClubs previousClubs={player.previousClubs} /> 
                    </div>
                    <Nation nationId={player.nationId} />
                </div>
              );
            })}
        </div>
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
)(PlayerDetails)