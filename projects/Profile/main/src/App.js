import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'
import Work from "./Components/Work"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
      <Route path="/" exact="true" component={Home} />
      <Route path="/Contact" exact="true" component={Contact} />
      <Route path="/Skills" exact="true" component={Skills} />
      <Route path="/Work" exact="true" component={Work} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
