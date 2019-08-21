import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class TeamDetails extends Component {
  render() {
    const { teams } = this.props;
    this.id = this.props.match.params.id;

    return (
      <div className="container">
        <div class="row">
          {teams &&
            teams
              .filter(team => team.id == this.id)
              .map(team => {
                return (
                  <div className="row center">
                    <div class="col s12 m4 l2">
                      <p>
                        <img
                          src={team.badge}
                          alt=""
                          class="circle responsive-img"
                        />
                      </p>
                    </div>
                    <div class="col s12 m4 l8">
                      <h5 class="center">
                        <b>{team.teamName}</b>
                      </h5>
                      <p>
                        <i>{team.description}</i>
                      </p>
                      <table>
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Winnings</th>
                          </tr>
                        </thead>
                        {team.honours &&
                          team.honours.map(teamHonors => {
                            return (
                              <tbody key={teamHonors.Title}>
                                <tr>
                                  <td>{teamHonors.Title}</td>
                                  <td>{teamHonors.Winnings}</td>
                                </tr>
                              </tbody>
                            );
                          })}
                      </table>
                      <Link
                        className="waves-effect waves-light btn red darken-2"
                        to={"/players/" + this.id}
                      >
                        Players List
                        <i class="material-icons right">send</i>
                      </Link>
                    </div>
                    <div class="col s12 m4 l2">
                      <p>
                        <img
                          src={team.nationBadge}
                          alt=""
                          class="circle responsive-img"
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

const MapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(MapStateToProps, MapDispatchToProps)(TeamDetails);
