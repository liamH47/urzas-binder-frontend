import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="nav-bar">

            <NavLink to="/cards">
                <button id="all-cards-btn">All Cards</button>
            </NavLink>

            <NavLink to="/users">
                <button>My Binder</button>
            </NavLink>
        </div>
    )
}

export default Navbar