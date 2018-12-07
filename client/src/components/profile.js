import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Profile Page</h1>
                {/* <img src={require('../assets/bmi-chart.png')}/> */}
                <h3>Calculate your BMI</h3>
                <div>
                    <select name="gender" id="">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Age" />
                </div>
                <div>
                    <input type="text" placeholder="Weight" />
                </div>
                <div>
                    <input type="text" placeholder="Height" />
                    <p>or</p>
                    <select name="feet" id="">
                        <option value="1">1'</option>
                        <option value="2">2'</option>
                        <option value="3">3'</option>
                        <option value="4">4'</option>
                        <option value="5">5'</option>
                        <option value="6">6'</option>
                        <option value="7">7'</option>
                    </select>
                    <select name="inches" id="">
                        <option value="1">1"</option>
                        <option value="2">2"</option>
                        <option value="3">3"</option>
                        <option value="4">4"</option>
                        <option value="5">5"</option>
                        <option value="6">6"</option>
                        <option value="7">7"</option>
                        <option value="8">8"</option>
                        <option value="9">9"</option>
                        <option value="10">10"</option>
                        <option value="11">11"</option>
                    </select>
                </div>
                <button>Calculate BMI</button>
            </div>
        );
    }
}

export default Profile;