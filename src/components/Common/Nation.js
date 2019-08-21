import React, { Component } from "react";
import { connect } from 'react-redux';

class Nation extends Component {
  render() {
    const { nations, nationId } = this.props;
    return (
      <div className="row">
      {nations &&
        nations
        .filter(nation => nation.id == nationId)
        .map(nation => {
          return (
            <div className="col s12 m4 l2" key={nationId}>
            <p>
              <img
              src={nation.flag}
              alt=""
              className="circle responsive-img"
            />
          </p>
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
    nations: state.nations
  }
};


export default connect(MapStateToProps, null)(Nation);
