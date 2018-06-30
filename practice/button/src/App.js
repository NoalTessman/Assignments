import React,{Component} from 'react';
import handleClick from './Person.js';
class App extends Component{
    constructor(){
        super();
        this.state = {
            counter: 1
        }
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
    }
        up(){this.setState((state) => ({counter: state.counter+1}))}
        down(){
            this.setState((prevState) => ({counter: prevState.counter-1}))
        }
    render(){
        return(
            <div className="Test"> 
                <button onClick={this.up}>Up</button>
                <button onClick={this.down}>Down</button>
                <h1>{this.state.counter}</h1>
            </div>
        )
    };
}

export default App