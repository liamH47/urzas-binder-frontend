 import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CardContainer from './Containers/CardContainer.js'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
// import Signup from './Components/Signup'
import UserContainer from './Containers/UserContainer';

class App extends React.Component {

    state = {
      currentUserId: 32,
      userCards: []
    }

    addToCollection = (userCardObj) => {
      // console.log("clicked")
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

    componentDidMount() {
      fetch("http://localhost:3000/api/v1/users/32")
      .then(r => r.json())
      .then(userObj => this.setState({ currentUserId: userObj.id}))
    }


    render() { 
      return (
        <div>
          <Header />
          <Navbar /> 
          <Switch>
          <Route path="/users" render={() => <UserContainer currentUser={this.state.currentUserId} userCards={this.state.userCards} />} />
          <Route path="/cards" render={() => <CardContainer currentUser={this.state.currentUserId} addToCollection={this.addToCollection}/>} />
          {/* <Route path="/home" render={() => <Signup />} /> */}
          </Switch>
        </div>
        
    
    );
  }
}

export default App;
