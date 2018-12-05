import React from 'react';

import '../../styles/button.css';

const ExerciseRow = ({ onChange, value }) => (
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
    <button className="button-error pure-button">x</button>
  </fieldset>
);


export default ExerciseRow;