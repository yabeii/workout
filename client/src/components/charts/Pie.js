import React from 'react';
import { Pie } from 'react-chartjs-2';

import { string, number, arrayOf } from 'prop-types';

const PieChart = ({ labels, data, backgroundColor, hoverBackgroundColor }) => {
  const chartData = {
    labels, // Array of strings
    datasets: [{
      data, // Array of integers
      backgroundColor, // Array of string type HEX colors, needs to match data length
      hoverBackgroundColor // Array of string type HEX colors, OPTIONAL
    }]
  };

  return <Pie data={chartData} />;
}

PieChart.propTypes = {
  labels: arrayOf(string).isRequired,
  data: arrayOf(number).isRequired,
  backgroundColor: arrayOf(string).isRequired,
  hoverBackgroundColor: arrayOf(string)
}

export default PieChart;