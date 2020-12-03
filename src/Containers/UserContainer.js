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
        .catch(console.log)
    }

    editTagHandler = (user_tag, id) => {
        console.log(user_tag, id)
        fetch(`http://localhost:3000/api/v1/user_cards/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify ({ user_tag })
        }).then(r => r.json())
          .then(newTag => {
            let copiedArray = [...this.state.userCardsState]
            let index = copiedArray.findIndex(newTag => newTag.id === id)
            copiedArray[index] = newTag
            newTag.user_tag = user_tag
            this.setState({ userCardsState: copiedArray})
          })
          .catch(console.log)
    }
    
    componentDidMount = () => {
        fetch("http://localhost:3000/api/v1/user_cards")
        .then(resp => resp.json())
        .then(data => this.setState({ userCardsState: data}))
        // console.log("plswork")
    }
    
    renderUserCards = () => {
        let filteredArray = this.state.userCardsState.filter(userCard => userCard.user.id === this.state.currentUser)
       return filteredArray.map(userCardObj => <UserCard currentUser={this.props.currentUser} editTagHandler={this.editTagHandler} key={userCardObj.id} userCard={userCardObj} deleteHandler={this.deleteHandler} />)
    }

    render(){
        return(
            <div className="cards-area">
                {this.renderUserCards()}
            </div>
        )
    }
    
}

export default withRouter(UserContainer)
//how can I make the usercards group by tag?
//new component that filtered based off of words in tag
//is the way to add multiple tags to turn the tags attribute into an array?


//add hover or some other way of enlarging/zooming in on a card
//perhaps to the right of each tag a small button to remove that tag? this would only be useful if we can get multiple tags on a card
//have a column on the left side of both /cards and /user/id that has a searchform for cards
//expand current search functionality, potentially with dropdown menu filters for card attributes such as color, type, set, maybe tags?
//different sorting orders such as by mana cost 
//maybe clean up remove from collection button so that it is a simple x that appears when you hover over a card

