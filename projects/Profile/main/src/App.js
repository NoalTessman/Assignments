import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'
import {BrowserRouter as Router, Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Home/>
      <Route path="/" exact="true" Component={Home} />
      </div>
      </Router>
    );
  }
}

export default App;
