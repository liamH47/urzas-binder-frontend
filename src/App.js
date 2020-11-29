import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import Homepage from './Components/Homepage.js'
import Header from './Components/Header'

class App extends React.Component {
    render() { 
      return (
        <div>
          <Header />,
          {/* <Route path="/home" render={() => <Homepage /> } /> */}
          <Homepage />
        </div>
        
    
    );
  }
}

export default App;
