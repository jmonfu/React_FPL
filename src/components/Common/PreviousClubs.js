import React from "react";

const PreviousClubs = ({ previousClubs }) => {
  return (
    <table>
    <thead>
      <tr>
        <th>Years</th>
        <th>Team Name</th>
        <th />
        <th>Apps</th>
        <th>Goals</th>
      </tr>
    </thead>
    {previousClubs &&
        previousClubs.map(prevClub => {
        return (
          <tbody key={prevClub.years}>
            <tr>
              <td>{prevClub.years}</td>
              <td>{prevClub.teamName}</td>
              <td>{prevClub.teamBadge}</td>
              <td>{prevClub.apps}</td>
              <td>{prevClub.goals}</td>
            </tr>
          </tbody>
        );
      })}
  </table>
  );
};
export default PreviousClubs;
