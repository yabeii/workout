import React from 'react';

import { func, shape, oneOfType, string, number } from 'prop-types';

import '../../styles/button.css';

const ExerciseRow = ({ onChange, value, removeRow }) => (
  <fieldset>
    <select value={value.exercise} name="exercise" onChange={onChange}>
      <option defaultChecked value="bench press">Bench Press</option>
      <option value="squat">Squat</option>
      <option value="deadlift">Deadlift</option>
    </select>

    <input required type="number" placeholder="Set" name="set" value={value.set} onChange={onChange} />
    <input required type="number" placeholder="Rep" name="rep" value={value.rep} onChange={onChange} />
    <input required type="number" placeholder="Weight" name="weight" value={value.weight} onChange={onChange} />
    <select name="metric" value={value.metric} onChange={onChange}>
      <option defaultChecked value="lb">lb</option>
      <option value="kg">kg</option>
    </select>
    <button className="button-error pure-button" onClick={removeRow}>x</button>
  </fieldset>
);


ExerciseRow.propTypes = {
  removeRow: func.isRequired,
  onChange: func.isRequired,
  value: shape({
    exercise: string.isRequired,
    set: oneOfType([ string, number ]).isRequired,
    rep: oneOfType([ string, number ]).isRequired,
    weight: oneOfType([ string, number ]).isRequired,
    metric: string.isRequired
  }).isRequired
}


export default ExerciseRow;