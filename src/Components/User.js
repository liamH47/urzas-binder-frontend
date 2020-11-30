import React from 'react'


class User extends React.Component {

    render() {
        const { user } = this.props;
        return(
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        )
    }

}

export default User