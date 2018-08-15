import React, { Component } from 'react'
import Typing from "react-typing-animation"
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
        I want to be a full stack or front end developer.
        </div>
      </Typing>
      </div>
      <div className="LinkContainer" >
        <div className="Link">
        <ScrollAnimation animateIn="bounceInRight">
          Skills
        </ScrollAnimation>
        </div>
        <div className="Link" >
        <ScrollAnimation animateIn="bounceInLeft">
          Work
        </ScrollAnimation>
        </div>
        <div className="Link">
        <ScrollAnimation animateIn="bounceInRight">
          Contact
        </ScrollAnimation>
        </div>
      </div>
      </div>
    )
  }
}
