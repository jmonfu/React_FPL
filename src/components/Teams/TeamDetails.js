import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import TeamHonours from "./TeamHonours";

class TeamDetails extends Component {
  render() {
    const { teams } = this.props;
    this.id = this.props.match.params.id;

    return (
      <div className="container">
        <div className="row">
          {teams &&
            teams
              .filter(team => team.id == this.id)
              .map(team => {
                return (
                  <div className="row center" key={team.id}>
                    <div className="col s12 m4 l2">
                      <p>
                        <img
                          src={team.badge}
                          alt=""
                          className="circle responsive-img"
                        />
                      </p>
                    </div>
                    <div className="col s12 m4 l8">
                      <h5 className="center">
                        <b>{team.name}</b>
                      </h5>
                      <p>
                        <i>{team.description}</i>
                      </p>
                      
                      <TeamHonours teamHonours={team.honours} />
                      
                      <Link
                        className="waves-effect waves-light btn red darken-2"
                        to={"/players/" + this.id}
                      >
                        Players List
                        <i className="material-icons right">send</i>
                      </Link>
                    </div>
                    <div className="col s12 m4 l2">
                      <p>
                        <img
                          src={team.nationBadge}
                          alt=""
                          className="circle responsive-img"
                        />
                      </p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}


const MapStateToProps = state => {
  return {
    teams: state.teams
  }
};

export default connect(MapStateToProps, null)(TeamDetails);
