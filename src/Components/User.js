import React from 'react'
import { NavLink } from 'react-router-dom'


class User extends React.Component {

    render() {
        const { user } = this.props;
        return(
            <NavLink to={`/instructors/${user.id}`}>
                <p>{user.name}</p>
            </NavLink>

        )
    }

}

export default User