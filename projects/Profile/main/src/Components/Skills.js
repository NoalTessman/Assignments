import React, { Component } from 'react'
import Overlay from "../Components/Overlay"
export default class Skills extends Component {
  render() {
    return (
      <div>
        <Overlay />
        <div id="skillsContainer">
        <div id="skillsTitle">
        What I use to get things done
        </div>
        <div className="langCrate">
            <p className="skillsLang">React</p>
            <p className="skillsLang">Javascript</p>
            <p className="skillsLang">CSS3</p>
            <p className="skillsLang">Css Grid</p>
            <p className="skillsLang">FlexBox</p>
            <p className="skillsLang">Redux</p>
            <p className="skillsLang">MongoDB</p>
            <p className="skillsLang">Express</p>
            <p className="skillsLang">OKTA</p>
            <p className="skillsLang">Adobe Photoshop, inDesign</p>
            <p className="skillsLang">HTML5</p>   
            <p className="skillsLang">MariaDB</p>   
            <p className="skillsLang">Ruby</p>   
            </div>
        </div>
      </div>
    )
  }
}
