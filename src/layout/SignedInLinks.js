import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/team'>Teams</NavLink></li>
            <li><NavLink to='/'>Dashboard</NavLink></li>
        </ul>
    )
}


export default SignedInLinks