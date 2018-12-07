import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <form className="form" action="">
                <input type="text" name="username" placeholder="Username"/>
                <input type="text" name="password" placeholder="Password"/>
                <button>Login</button>
                </form>
            </div>

        );
    }
}

export default Login;