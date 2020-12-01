import React from 'react'
import { withRouter } from 'react-router-dom'
// import User from '../Components/User'
// import { Route } from 'react-router-dom'
import UserCard from '../Components/UserCard'

class UserContainer extends React.Component {

    state = {
        userCardsState: []
    }
    
    componentDidMount = () => {
        fetch("http://localhost:3000/api/v1/user_cards")
        .then(resp => resp.json())
        .then(data => this.setState({ userCardsState: data}))
        // console.log("plswork")
    }
    
    renderUserCards = () => {
       return this.props.userCards.map(userCardObj => <UserCard key={userCardObj.id} userCard={userCardObj} />)
    }

    render(){
        return(
            <div>
                {this.renderUserCards()}
            </div>
        )
    }
    
}

export default withRouter(UserContainer)
/* <Route path="/users/26" render={() => console.log("plswork")} />
{this.renderUserList()} */