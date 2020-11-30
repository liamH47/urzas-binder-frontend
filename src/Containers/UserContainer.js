import React from 'react'
import { withRouter } from 'react-router-dom'
import User from '../Components/User'

class UserContainer extends React.Component {

    state = {
        userArray: []
    }

    
    componentDidMount = () => {
        fetch("http://localhost:3000/api/v1/users")
        .then(resp => resp.json())
        .then(data => this.setState({ userArray: data}))
    }
    
    renderUserList = () => {
       return this.state.userArray.map(userObj => <User key={userObj.id} user={userObj} />)
    }

    render(){
        return(
            <div>
                {this.renderUserList()}
            </div>
        )
    }

}

export default withRouter(UserContainer)