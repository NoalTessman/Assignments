import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Projects: [
      {
        title:"bussiness website",
        category:'Web design'
      },
      {
        title:"Test website",
        category:'Mobile Development'
      },
      {
        title:"Fun Website",
        category:'Web design'
      }
    ]
    }
  }
  render() {
    return (
      <div className="App">
       My App
       <Projects Projects={this.state.Projects}/>
      </div>
    );
  }
}

export default App;
