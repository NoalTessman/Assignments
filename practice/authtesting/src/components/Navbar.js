import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
          <Link to="/">
            Acme Staff Portal
          </Link>
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/staff">
                  Staff
                </Link>
      </div>
    )
  }
}

export default Navbar