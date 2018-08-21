import React, { Component } from 'react'
import axios from 'axios'

export default class Newitem extends Component {
    state = {
        name: "",
        price: "",
        description:"",
        img: "",
        completed:""
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = event => {
    event.preventDefault();

    const newTodo = {
        title: this.state.name,
        description: this.state.description,
        price: this.state.price,
        imgUrl: this.state.img,
        completed: this.state.completed
    }

    axios.post('https://api.vschool.io/noal/todo', newTodo)
    .then(res =>{
        console.log(res);
        console.log(res.data)
    } )
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>
              todo Name:
              <input type="text" name="name" onChange={this.handleChange}/>
            </label>
            <label>
              todo Price:
              <input type="number" name="price" onChange={this.handleChange}/>
            </label>
            <label>
              todo Description:
              <input type="text" name="description" onChange={this.handleChange}/>
            </label>
            <label>
              todo Image:
              <input type="text" name="img" onChange={this.handleChange}/>
            </label>
            <label>
              Hit this radio if completed(not a real radio):
              <input type="radio" name="completed" onChange={this.handleChange}/>
            </label>
            <button type="submit"> add item</button>
        </form>
    )
  }}
