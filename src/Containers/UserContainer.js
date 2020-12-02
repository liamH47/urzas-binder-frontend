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

    editTagHandler = (id) => {
        fetch(`http://localhost:3000/api/v1/user_cards/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify
        }).then(r => r.json())
          .then(newTag => {
              let copiedArray = [...this.state.userCardsState]
              let index = copiedArray.findIndex(tag => tag.id === newTag.id)
              copiedArray[index] = newTag
              this.setState({ userCardsState: copiedArray})
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
       return filteredArray.map(userCardObj => <UserCard editTagHandler={this.editTagHandler} key={userCardObj.id} userCard={userCardObj} deleteHandler={this.deleteHandler} />)
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

//what's wrong with my delete
//how can I make the usercards group by tag?
//is the way to add multiple tags to turn the tags attribute into an array?