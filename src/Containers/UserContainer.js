import React from 'react'
import { withRouter } from 'react-router-dom'
// import User from '../Components/User'
// import { Route } from 'react-router-dom'
import UserCard from '../Components/UserCard'
import SearchByTag from '../Components/SearchByTag'


class UserContainer extends React.Component {

    state = {
        userCardsState: [],
        currentUser: this.props.currentUser,
        searchValue: ""
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

    }

    searchHandler = (event) => {
        this.setState({searchValue: event.target.value})
    }
    
    renderUserCards = () => {
        let filteredArray = this.state.userCardsState.filter(userCard => userCard.user.id === this.state.currentUser && userCard.user_tag.toLowerCase().includes(this.state.searchValue.toLowerCase())) 
       return filteredArray.map(userCardObj => <UserCard currentUser={this.props.currentUser} editTagHandler={this.editTagHandler} key={userCardObj.id} userCard={userCardObj} deleteHandler={this.deleteHandler} />)
    }

    render(){
        return(
            <>
            <>
                <SearchByTag id="tag-search-bar" changeHandler={this.props.changeHandler}  searchValue={this.props.tagSearch} />
            </>
            <div className="cards-area">
                <br/>
                {this.renderUserCards()}
            </div>
            </>
        )
    }
    
}

export default withRouter(UserContainer)

