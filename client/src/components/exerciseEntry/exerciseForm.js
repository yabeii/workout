// @ts-check
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addEntry } from '../../redux/actions/exerciseEntry';

import { func } from 'prop-types';

import ExerciseRow from './exerciseRow';


const formatDate = () => {
  let d = new Date();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

class ExerciseForm extends Component {
  state = {
    date: formatDate(),
    rows: [
      {
        exercise: "bench press",
        set: "",
        rep: "",
        weight: "",
        metric: "lb"
      }
    ]
  }

  rowChangeHandler = index => ({ target }) => {

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

  removeRow = index => e => {
    e.preventDefault();
    this.setState(prevState => ({
      rows: [
        ...prevState.rows.slice(0, index),
        ...prevState.rows.slice(index + 1)
      ]
    }));
  }

  displayRow = (row, index) => (
    <ExerciseRow
      key={index}
      value={row}
      onChange={this.rowChangeHandler(index)}
      // @ts-ignore
      removeRow={this.removeRow(index)}
    />
  );

  submitForm = e => {
    e.preventDefault();

    const { rows, date } = this.state;

    this.props.addEntry(rows, date);

    this.setState({
      rows: [
        {
          exercise: "bench press",
          set: "",
          rep: "",
          weight: "",
          metric: "lb"
        }
      ]
    });
  }

  render() {
    const { rows, date } = this.state;
    return (
      <form className="pure-form" onSubmit={this.submitForm}>
        {rows.map(this.displayRow)}
        <input type="date" required value={date} onChange={e => this.setState({ date: e.target.value })} />
        <button type="button" onClick={this.addRow}>Add Row</button>
        <button type="submit">submit</button>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  addEntry: (workoutEntries, date) => dispatch(addEntry(workoutEntries, date))
});

ExerciseForm.propTypes = {
  addEntry: func.isRequired
}

export default connect(null, mapDispatchToProps)(ExerciseForm);