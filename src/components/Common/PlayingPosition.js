import React, { Component } from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class PlayingPosition extends Component {
  render() {
    const { positions, positionId } = this.props;
    return (
      <div className="row">
      {positions &&
        positions
        .filter(position => position.id == positionId)
        .map(position => {
          return (
              <div key={positionId}>
                  <i>{position.name}</i>
              </div>
          )
          })
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    positions: state.firestore.ordered.positions
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'positions'}
  ])
)(PlayingPosition)