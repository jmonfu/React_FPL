import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTeam } from '../../store/actions/teamActions'
import { Redirect } from 'react-router-dom'

 class CreateTeam extends Component {
     state = {
         badge: '',
         description: '',
         honours : [],
         leagueId : "",
         name: "",
         nationId: ""
     }

    render() {
        // const { auth } = this.props;
        // if(!auth.uid) return <Redirect to='/signin' />
        
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Team</h5>
                    <div className="input-field">
                        <input placeholder="Team Name" id="name" type="text" class="validate" />
                        <label htmlFor="name"></label>
                    </div>
                    <div className="input-field">
                        <label htmlFor="badge"></label>
                        <input placeholder="Badge"  type="text" id="badge" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="leagueId"></label>
                        <input placeholder="LeagueID" type="text" id="leagueId" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="nationId"></label>
                        <input placeholder="NationId" type="text" id="nationId" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="description"></label>
                        <textarea placeholder="Description" id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTeam(this.state);
        this.props.history.push('/');
    }
    
    
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTeam: (team) => dispatch(createTeam(team))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam)
