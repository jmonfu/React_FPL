import React, { Component } from "react";
import TeamList from "./Teams/TeamList";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <TeamList />
      </div>
    );
  }
}

export default Dashboard;
