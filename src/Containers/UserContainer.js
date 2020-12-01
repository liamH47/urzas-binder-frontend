import React from 'react'
import { withRouter } from 'react-router-dom'
// import User from '../Components/User'
// import { Route } from 'react-router-dom'
import UserCard from '../Components/UserCard'

class UserContainer extends React.Component {

    state = {
        userCardsState: [],
        currentUser: this.props.currentUser
    }

    deleteHandler = (id) => {
        const currentUserCards = this.state.userCardsState
        this.setState({ userCardsState: currentUserCards.filter(userCard => userCard.id !== id)})
        fetch(`http://localhost:3000/api/v1/user_cards/${id}`, {
            method: 'DELETE',
        })
        .then(r => r.json())
        .then(data => {
            let newArray = [...this.state.userCardsState]
            this.setState({ userCardsState: newArray })
        })
    }
    
    componentDidMount = () => {
        fetch("http://localhost:3000/api/v1/user_cards")
        .then(resp => resp.json())
        .then(data => this.setState({ userCardsState: data}))
        // console.log("plswork")
    }
    
    renderUserCards = () => {
        let filteredArray = this.state.userCardsState.filter(userCard => userCard.user.id === this.state.currentUser)
       return filteredArray.map(userCardObj => <UserCard key={userCardObj.id} userCard={userCardObj} deleteHandler={this.deleteHandler} />)
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