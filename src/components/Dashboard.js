import React, { Component } from "react";
import TeamList from "./Teams/TeamList";
import { connect } from 'react-redux';


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


const MapStateToProps = state => {
  return {
    teams: state.teams
  }
};


export default connect(MapStateToProps, null)(Dashboard);
