import React, { Component } from 'react'
import {Link } from 'react-router-dom'
export default class Overlay extends Component {
  render() {
    return (
      <div id="overlayMain">
          <div className="overlayItems">
          <Link to="/">
            Noal Tessman
            </Link>
        </div>
        <div className="overlayItems">
        <Link to="/Work">
            Work
            </Link>
        </div>
        <div className="overlayItems">
        <Link to="/Skills">
            Skills
            </Link>
        </div>
        <div className="overlayItems">
        <Link to="/Contact">
            Contact
            </Link>
        </div>        
      </div>
    )
  }
}
