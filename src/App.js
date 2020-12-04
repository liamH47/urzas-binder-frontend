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

class App extends React.Component {

    state = {
      currentUserId: 32,
      userCards: [],
      cardsApi: [],
      searchValue: ""
    }

    componentDidMount = () => {
      fetch("http://localhost:3000/api/v1/cards")
      .then(resp => resp.json())
      .then(data => this.setState({ cardsApi: data }))
    }

    changeHandler = (event) => {
      this.setState({searchValue: event.target.value })
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

    // componentDidMount() {
    //   Promise.all([fetch("http://localhost:3000/api/v1/users/32"), fetch("http://localhost:3000/api/v1/cards")])
    //   .then(([r1, r2]) => {
    //     return Promise.all([r1.json(), r2.json()])
    //   })
    //   .then(([r1, r2]) => {
    //     this.setState({ cardsApi: r2})
    //   })
    // }


    render() { 
      return (
        <div className="wrapper">
          <Header />
          <Navbar /> 
          <CardSearchForm changeHandler={this.changeHandler} searchValue={this.state.searchValue}/>
          <Switch>
          <Route path="/users" render={() => <UserContainer currentUser={this.state.currentUserId} userCards={this.state.userCards} />} />
          <Route path="/cards" render={() => <CardContainer searchValue={this.state.searchValue} cardsApi={this.state.cardsApi} currentUser={this.state.currentUserId} addToCollection={this.addToCollection}/>} />
          {/* <Route path="/home" render={() => <Signup />} /> */}
          </Switch>
        </div>
        
    
    );
  }
}

export default App;

//save all cards to array here for performance