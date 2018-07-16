import React from "react";
import { Component } from "react";
import Authors from "./Components/Authors"
import store from "./store"
class AuthorPage extends Component{
    render(){
    return(
        <div id ="container">
        <Authors />
        </div>
    )}
}

export default AuthorPage