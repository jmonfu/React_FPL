import React, { Component } from "react";
import { Link } from 'react-router-dom';

class TeamDetails extends Component {
    constructor(props) {
      super(props);
  
      this.id = this.props.match.params.id;
    }
  
    render() {
      return (
        <div className="row">
            TeamID is {this.id}<br></br>
            <Link to={'/players/' + this.id}>
                Players List
            </Link>
        </div>
      );
    }
  }
  
  export default TeamDetails;
