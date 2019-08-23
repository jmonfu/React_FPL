import React, { Component } from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Nation extends Component {
  render() {
    const { nations, nationId } = this.props;
    return (
      <div className="row">
      {console.log(nations)}
      {console.log(nationId)}
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

const mapStateToProps = (state) => {
  return {
    nations: state.firestore.ordered.nations
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'nations'}
  ])
)(Nation)