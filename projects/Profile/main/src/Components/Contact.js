import React, { Component } from 'react'
import Overlay from "../Components/Overlay"

import replit from '../images/replIt.png'
import github from '../images/gitHUb.png'
import linkedin from '../images/linkedIN.png'
import gmail from '../images/gmail.png'

import Animation from 'react-animate-on-scroll'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Overlay />
        <div id="contactContainer">
        <div id="contactTitle">
        Contact me, I would love to make your website excellent. 
        </div>
        <div className="contactCardHolderServices">
        <Animation animateIn="fadeInRight">
        <div className="contactCard">
        <img src={github} className="contactCardImg"/>
        <div className="contactCardTitle">
        https://github.com/NoalTessman
        </div>
        </div>
        </Animation>
        <Animation animateIn="fadeInLeft">
        <div className="contactCard">
        <img src={replit} className="contactCardImg"/>
        <div className="contactCardTitle">
        https://repl.it/@Noal900
        </div>
        </div>
        </Animation>
        <Animation animateIn="fadeInRight">
        <div className="contactCard">
        <img src={linkedin} className="contactCardImg"/>
        <div className="contactCardTitle">
        https://www.linkedin.com/in/noal-tessman-1b602aaa/
        </div>
        </div>
        </Animation>
        <Animation animateIn="fadeInLeft">
        <div className="contactCard">
        <img src={gmail} className="contactCardImg"/>
        <div className="contactCardTitle">
        http://www.noal900@gmail.com
        </div>
        </div>
        </Animation>
        </div>
        </div>
      </div>
    )
  }
}