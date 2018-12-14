// @ts-check
import React, { Component } from 'react';
import ExerciseForm from './exerciseForm';

import { connect } from 'react-redux';
import LineChart from '../charts/Line';

import { getEntriesGraph } from '../../helpers';

class ExerciseEntry extends Component {
  state = {
    exercise: '',
    set: '',
    rep: '',
    start: false
  }

  changeHandler = ({ target }) => {
    let { type, value, name } = target;

    if (type === "number") {
      value = parseInt(value);
      if (isNaN(value)) {
        value = "";
      }
    }

    this.setState({
      [name]: value
    })
  }

  render() {
    let { exercise, set, rep, start } = this.state;
    let entries = getEntriesGraph({ exercise, set, rep }, this.props.workoutEntries);
    if (!start && Object.keys(this.props.exercises).length > 0) {
      this.setState({ start: true, exercise: Object.keys(this.props.exercises)[0] })
    }
    return (
      <div>
        <LineChart
          title="Hello"
          labels={entries.map(e => e.date)}
          backgroundColor='rgba(75,192,192,1)'
          borderColor='rgba(75,192,192,1)'
          pointBorderColor='rgba(75,192,192,1)'
          pointHoverBackgroundColor='rgba(75,192,192,1)'
          pointHoverBorderColor='rgba(220,220,220,1)'
          data={entries.map(({ entry }) => entry.weight)}
        />
        <ExerciseForm />
        {
          Object.keys(this.props.exercises).length > 0 && (
            <React.Fragment>
              <select value={exercise} name="exercise" onChange={this.changeHandler}>
                {
                  Object.keys(this.props.exercises).map((name, index) =>
                    index === 0
                      ? <option key={index} defaultChecked value={name}>{name}</option>
                      : <option key={index} value={name}>{name}</option>
                  )
                }
              </select>
              <input type="number" name="set" value={set} placeholder="Set" onChange={this.changeHandler} />
              <input type="number" name="rep" value={rep} placeholder="Rep" onChange={this.changeHandler} />
            </React.Fragment>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = ({ exerciseReducer }) => ({
  exercises: exerciseReducer.exercises,
  workoutEntries: exerciseReducer.workoutEntries
});

export default connect(mapStateToProps)(ExerciseEntry);