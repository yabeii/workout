import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'purecss';


class MacroTracker extends Component {
    state = {
        carbs: '',
        protein: '',
        fat: '',
        calories: '',
        daily_weight: '',
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
            
        })
    }





    render() {

        return (
            <div>
                <div>
                    <h1>Tracked Macros</h1>
                    
                </div>
                <form className="pure-form pure-form-stacked">
                    <fieldset>
                        <legend>Enter your macros</legend>

                        <label>Carbs</label>
                        <input 
                        placeholder="Carbs"
                        />
                        <label>Protein</label>
                        <input placeholder="Protein" />
                        <label>Fat</label>
                        <input placeholder="Fat" />
                        

                        <button type="submit" class="pure-button pure-button-primary">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(MacroTracker);
