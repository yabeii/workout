import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div class="pure-menu pure-menu-horizontal">
                <a href="/" class="pure-menu-heading pure-menu-link">Workout</a>
                <ul class="pure-menu-list">
                    <li class="pure-menu-item"><a href="/exercises" class="pure-menu-link">Exercises</a></li>
                    <li class="pure-menu-item"><a href="/diet" class="pure-menu-link">Diet</a></li>
                    <li class="pure-menu-item"><a href="/profile" class="pure-menu-link">Profile</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;