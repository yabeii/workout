import React, { Component } from 'react';

import ExerciseRow from './exerciseRow';

class ExerciseForm extends Component {
  state = {
    rows: [
      {
        exercise: "bench press",
        set: "",
        rep: "",
        weight: "",
        metric: "lb",
      }
    ]
  }

  onChange = index => ({ target }) => {

    let { type, value, name } = target;

    if (type === "number") {
      value = parseInt(value);
      if (isNaN(value)) {
        value = "";
      }
    }


    this.setState(prevState => ({
      rows: [
        ...prevState.rows.slice(0, index),
        {
          ...prevState.rows[index],
          [name]: value
        },
        ...prevState.rows.slice(index + 1)
      ]
    }));
  }

  addRow = () => {
    this.setState(prevState => ({
      rows: [
        ...prevState.rows,
        {
          exercise: "bench press",
          set: "",
          rep: "",
          weight: "",
          metric: "lb",
        }
      ]
    }))
  }

  displayRow = (row, index) => <ExerciseRow key={index} value={row} onChange={this.onChange(index)} />

  submitForm = e => {
    e.preventDefault();
    console.log(this.state.rows)
  }

  render() {
    const { rows } = this.state;
    return (
      <form className="pure-form" onSubmit={this.submitForm}>
        {rows.map(this.displayRow)}
        <button type="button" onClick={this.addRow}>Add Row</button>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default ExerciseForm;