import React, { Component } from "react";
import { connect } from 'react-redux';

class TeamHonours extends Component {
  render() {
    const { teamHonours, honours } = this.props;
    return (
      <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Winnings</th>
        </tr>
      </thead>
      {teamHonours &&
          teamHonours.map(teamHonors => {
          return (
            <tbody key={teamHonors.honour}>
              <tr>
                {honours && honours
                  .filter(honour => honour.id == teamHonors.honour)
                  .map(honour => {
                    return (
                      <td>{honour.name}</td>
                    )
                  })}
                  <td>{teamHonors.amount}</td>
              </tr>
            </tbody>
          );
        })}
    </table>
    );
  }
  
 }


const MapStateToProps = state => {
  return {
    honours: state.honours
  }
};


export default connect(MapStateToProps, null)(TeamHonours);
