import React from 'react';
import { Line } from 'react-chartjs-2';
// import { sampleLineChartData } from '../charts/sampleData'

import { string, number, arrayOf } from 'prop-types';

const LineChart = ({
  labels,
  title,
  backgroundColor,
  borderColor,
  pointBorderColor,
  pointHoverBackgroundColor,
  pointHoverBorderColor,
  data
}) => {
  const lineData = {
    labels, // Array of strings
    datasets: [
      {
        label: title, // String
        fill: false,
        lineTension: 0.1,
        backgroundColor, // String
        borderColor, // String
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor, // String
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor, // String
        pointHoverBorderColor, // String
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data // Array of integers
      }
    ]
  }
  return <Line data={lineData} />;
}

LineChart.propTypes = {
  labels: arrayOf(string).isRequired,
  title: string.isRequired,
  data: arrayOf(number).isRequired,
  backgroundColor: string.isRequired,
  borderColor: string.isRequired,
  pointBorderColor: string,
  pointHoverBackgroundColor: string,
  pointHoverBorderColor: string
};

export default LineChart;