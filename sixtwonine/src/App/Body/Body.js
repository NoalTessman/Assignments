import React, {Component} from 'react'


class Body extends Component{
    constructor(){
        super()
        this.state = {
            name: 'name'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleChange.bind(this)
    }
    handleChange(e){
        console.log(e.target)
        e.preventDefault()
        this.setState({name:e.target.value })
    }
    handleSubmit (e){
        e.preventDefault()
        alert(`Hello my name is ${this.state.name}`)
    }
    render(){
    return(
        <div className="body-card">
            <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} name='name' onChange={this.handleChange}/>
            <input type="number" value={this.state.age} name="age"/>
            <button>Submit</button>
            </form>
        </div>
        );
    }
}



export default Body
