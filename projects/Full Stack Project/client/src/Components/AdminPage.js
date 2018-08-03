import React, { Component } from 'react';
import FurnitureList from "./FurnitureList"
import router from "react-router";
import ItemModal from "./itemModal"
class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemModal/>
        <FurnitureList/>
        </div>
    );
  }
}

export default App;
