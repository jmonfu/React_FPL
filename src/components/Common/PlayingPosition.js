import React, { Component } from "react";
import { connect } from 'react-redux';

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

const MapStateToProps = state => {
  return {
    positions: state.positions
  }
};


export default connect(MapStateToProps, null)(PlayingPosition);
