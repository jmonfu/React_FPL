import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
        <li><NavLink to='/createTeam'>New Team</NavLink></li>
        <li><NavLink to='/'>Teams</NavLink></li>
        <li><NavLink to='/players'>Players</NavLink></li>
        </ul>
    )
}


export default SignedInLinks