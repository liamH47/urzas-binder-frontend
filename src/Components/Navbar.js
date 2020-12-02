import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>

            <NavLink to="/cards">
                <button>All Cards</button>
            </NavLink>

            <NavLink to="/users">
                <button>My Binder</button>
            </NavLink>
        </div>
    )
}

export default Navbar