import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <ul>
            <NavLink to="/cards">
                <li>All Cards</li>
            </NavLink>
            <NavLink to="/home">
                <li>Home/SignIn</li>
            </NavLink>
        </ul>
    )
}

export default Navbar