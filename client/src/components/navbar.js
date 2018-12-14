import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="pure-menu pure-menu-horizontal">
        <a href="/" className="pure-menu-heading pure-menu-link">Workout</a>
        <ul className="pure-menu-list">
          <li className="pure-menu-item"><Link to="/exercises" className="pure-menu-link">Exercises</Link></li>
          <li className="pure-menu-item"><Link to="/diet" className="pure-menu-link">Diet</Link></li>
          <li className="pure-menu-item"><Link to="/profile" className="pure-menu-link">Profile</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;