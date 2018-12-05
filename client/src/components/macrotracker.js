import React, { Component } from 'react';
import 'purecss';


class MacroTracker extends Component {
    state = {
        carbs: '',
        protein: '',
        fat: '',
        calories: '',
        daily_weight: '',

    }
    render() {





        return (
            <div>
                <form className="pure-form pure-form-stacked">
                    <fieldset>
                        <legend>Macro Tracker</legend>

                        <label>Carbs</label>
                        <input placeholder="Carbs" />
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
    mapStateToProps,
    mapDispatchToProps
)(MacroTracker);
