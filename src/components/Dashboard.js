import React, { Component } from "react";
import TeamList from "./Teams/TeamList";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Dashboard extends Component {
  render() {
    const { teams } = this.props;
    return (
      <div className="row">
        <TeamList teams={teams}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    teams: state.firestore.ordered.teams
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'teams', orderBy: ['name', 'asc']}
  ])
)(Dashboard)