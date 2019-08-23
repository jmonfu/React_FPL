import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import TeamHonours from "./TeamHonours";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Nation from "../Common/Nation";


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
                    <Nation nationId={team.nationId} />
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
    teams: state.firestore.ordered.teams
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'teams', orderBy: ['name', 'asc']}
  ])
)(TeamDetails)