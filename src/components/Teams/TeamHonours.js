import React, { Component } from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

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
                .filter(honour => honour.id === teamHonors.honour)
                .map(honour => {
                  return (
                    <td key={teamHonors.honour}>{honour.name}</td>
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

 const mapStateToProps = (state) => {
  return {
    honours: state.firestore.ordered.honours
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'honours'}
  ])
)(TeamHonours)