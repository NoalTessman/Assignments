import React, { Component } from 'react'
import Overlay from './Overlay';

import Animation from 'react-animate-on-scroll'
import mobileDog from '../DogHotelMobile.PNG'
import dogFromDogHotel from '../Capture.PNG';
export default class Work extends Component {
  render() {
    return (
      <div id="workContainer">
          <Overlay />
        <div id="workTitle">
        My Work
        </div>
        <div id="cardContainer">
        <div className="websiteCard">
        <img src={dogFromDogHotel} className="websiteImage"/>
        <img src={mobileDog} className="websiteImageMobile"/>
        <div className ="websiteCardWords">
        <p className="websiteCardTitle">
        Dog Hotel
        </p>
        <p className="websiteCardDesc">
            This was before I learned how to use react, 
            I learned a lot about responsiveness and styling with this website., I'm still not good at creating fake bussiness names
            </p>
            </div>
        </div>
        <div className="websiteCard" >
        <img src={dogFromDogHotel} className="websiteImage"/>
        <img src={mobileDog} className="websiteImageMobile"/>
        <div className ="websiteCardWords">
        <p className="websiteCardTitle">
        Dog Hotel
        </p>
        <p className="websiteCardDesc">
            This was before I learned how to use react, 
            Learned a lot about responsiveness and styling with this one.
            </p>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
