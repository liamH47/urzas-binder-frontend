import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CardContainer from './Containers/CardContainer.js'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import UserContainer from './Containers/UserContainer';

class App extends React.Component {
    render() { 
      return (
        <div>
          <Header />
          <Navbar /> 
          <Switch>
          <Route path="/users" render={() => <UserContainer />} />
          <Route path="/cards" render={() => <CardContainer />} />
          <Route path="/home" render={() => <Signup />} />
          </Switch>
        </div>
        
    
    );
  }
}

export default App;
