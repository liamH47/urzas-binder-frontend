 import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CardContainer from './Containers/CardContainer.js'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
// import Signup from './Components/Signup'
import UserContainer from './Containers/UserContainer';
import CardSearchForm from './Components/CardSearchForm'
import SearchByTag from './Components/SearchByTag';

class App extends React.Component {

    state = {
      currentUserId: 32,
      userCards: [],
      cardsApi: [],
      searchValue: "",
      tagSearch: ""
    }

    componentDidMount = () => {
      fetch("http://localhost:3000/api/v1/cards")
      .then(resp => resp.json())
      .then(data => this.setState({ cardsApi: data }))
    }

    changeHandler = (event) => {
      this.setState({searchValue: event.target.value })
    }
    
    tagSearchHandler = (event) => {
      this.setState({tagSearch: event.target.value })
    }

    addToCollection = (userCardObj) => {
      fetch("http://localhost:3000/api/v1/user_cards", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify(userCardObj)
      })
      .then(r => r.json())
      .then(newUserCard => this.setState({ userCards: [...this.state.userCards, newUserCard] }))
    }



    render() { 
      return (
        <div className="wrapper">
          <Header />
          <Navbar /> 
          <CardSearchForm changeHandler={this.changeHandler} searchValue={this.state.searchValue}/>
          <Switch>
          <Route path="/users" render={() => <UserContainer tagSearch={this.state.tagSearch} changeHandler={this.tagSearchHandler} currentUser={this.state.currentUserId} userCards={this.state.userCards} />} />
          <Route path="/cards" render={() => <CardContainer searchValue={this.state.searchValue} cardsApi={this.state.cardsApi} currentUser={this.state.currentUserId} addToCollection={this.addToCollection}/>} />
          </Switch>
        </div>
        
    
    );
  }
}

export default App;

//save all cards to array here for performance