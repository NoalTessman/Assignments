import React, { Component } from 'react'
import Typing from "react-typing-animation"
import {Link} from "react-router-dom"
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll"
export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
      <div className="HeadContainer">
      <Typing>
      Noal Tessman<br/>
      Web developer
      </Typing>
      </div>
      <div className="DescContainer">
      <Typing>
        I make websites. 
        <div>
        <Typing.Speed ms={50}/>
        I want to make them for you.
        </div>
      </Typing>
      </div>
      <div className="LinkContainer" >
        <div className="Link">
        <ScrollAnimation animateIn="bounceInRight">
        <Link to="/Skills">
          My Skills
          </Link>
        </ScrollAnimation>
        </div>
        <div className="Link" >
        <ScrollAnimation animateIn="bounceInLeft">
        <Link to="/Work">
          My Work
          </Link>
        </ScrollAnimation>
        </div>
        <div className="Link">
        <ScrollAnimation animateIn="bounceInRight">
        <Link to="/Contact">
          Contact
          </Link>
        </ScrollAnimation>
        </div>
      </div>
      </div>
    )
  }
}
