import React, { Component } from 'react';

import './App.css';

import { Security, SecureRoute, ImplicitCallback} from '@okta/okta-react'

import Navbar from './components/Navbar';
import Staff from './components/pages/Staff';
import Home from './components/pages/Home';
import Login from './components/auth/Login';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function onAuthRequired({history}){
  history.push('/login');
} 

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-747508.oktapreview.com/oauth2/default'
                  client_id='0oafxfs33uckNCiwW0h7'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired}>
      <div className="App">
      Hello
      <Navbar />
      <div>
      <Route path ="/" exact={true} Component={Home}/>
      <SecureRoute path ="/staff" exact={true} Component={Staff}/>
      <Route path="/login" render = {() => (<Login baseURL='https://dev-747508.oktapreview.com'/>)}/>
      <Route path="/implicit/callback" component={ImplicitCallback}/>
      </div>
      </div>
      </Security>
      </Router>
    );
  }
}

export default App;
