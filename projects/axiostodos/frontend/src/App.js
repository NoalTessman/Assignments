import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList'

class App extends Component {
  render() {
    return (
      <div className="wholeLottaEffort">
        Hello
        <ToDoList/>
      </div>
    );
  }
}

export default App;
