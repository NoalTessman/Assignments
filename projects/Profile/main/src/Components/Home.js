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
        I want to become a Full stack Developer
        </div>
      </Typing>
      </div>
      <div className="LinkContainer" >
        <div className="Link">
        <ScrollAnimation animateIn="fadeInRight">
        <Link to="/Skills"  className="homeLink">
          My Skills
          </Link>
        </ScrollAnimation>
        </div>
        <div className="Link" >
        <ScrollAnimation animateIn="fadeInLeft">
        <Link to="/Work"  className="homeLink">
          My Work
          </Link>
        </ScrollAnimation>
        </div>
        <div className="Link">
        <ScrollAnimation animateIn="fadeInRight">
        <Link to="/Contact" className="homeLink">
          Contact
          </Link>
        </ScrollAnimation>
        </div>
      </div>
      </div>
    )
  }
}
