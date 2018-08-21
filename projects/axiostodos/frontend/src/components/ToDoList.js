import React, { Component } from 'react'
import axios from 'axios'
import Newitem from './NewItem'
export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    
    componentWillMount(){
        axios.get('https://api.vschool.io/noal/todo/')
        .then(response =>{
            this.setState({todos:response.data})
        }).catch(err =>{
            console.log(err);
        })
    }
    clicked(itemID){
        axios.delete(`https://api.vschool.io/noal/todo/${itemID}`).then(function(response) {
                    alert("Your todo was successfully deleted!")
                }, function(response) {
                    alert("There was a problem deleting your todo :(");
                });
    }
    render(){
        function isOn(thang){
            if (thang === true){
                return <div>This is completed</div>
            }else{
                return <div>This is not completed</div>
            }
        }
    const todoLoop = this.state.todos.map(element => (
       <div>
        <span> Thing To Do: {element.title}</span><br/>
        Price: {element.price}<br/>
        Description: {element.description}
    <br/>
        {isOn(element.completed)}<br/>
        <img class="img" src={element.imgUrl}/><br/>
        <button onClick={ (e) => {e.preventDefault(); this.clicked(element._id);} }>Delete </button><br/>
        _____________________________________________
        </div>
    ));
    return (
      <div>
        <Newitem/>
        {todoLoop}
      </div>
    )
}}