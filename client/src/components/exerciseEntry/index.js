import React from 'react';
import ExerciseForm from './exerciseForm';

import { Line } from 'react-chartjs-2';
import { sampleLineDataWithWeight } from '../charts/sampleData';


const ExerciseEntry = () => (
  <div>
    {/* <Line data={sampleLineDataWithWeight} /> */}
    <ExerciseForm />
  </div>
);

export default ExerciseEntry;