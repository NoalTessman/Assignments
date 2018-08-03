import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FurnitureList from "./Components/FurnitureList"
import router from "react-router";
import { Provider } from 'react-redux';
import store from './store';
import { Link, Switch, Route } from 'react-router-dom'
import ItemModal from "./Components/itemModal"
import Header from "./Components/Header"
import Testing from "./Components/Testing"
import AdminPage from "./Components/AdminPage"
import ItemLoader from './Components/ItemLoader';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="container"> 
          <Header/>
        <div id="body">
        <Switch>
          <Route exact path="/" component={Testing} />
          <Route exact path="/Admin" component={AdminPage}/>
          <Route exact path="/Furniture" component={ItemLoader}/>
        </Switch>
        </div>
        <div id="footer">
          Property of a furniture store. 
          Do not buy things here 
          {/* Icon credit goes to here
          https://www.flaticon.com/packs/social-media-3 */}
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
