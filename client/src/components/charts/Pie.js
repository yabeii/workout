import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = props => {
    const chartData = {
        labels: props.labels, // Array of strings
        datasets: [{
            data: props.data, // Array of integers
            backgroundColor: props.colors, // Array of string type HEX colors, needs to match data length
            hoverBackgroundColor: props.hover // Array of string type HEX colors, OPTIONAL
        }]
    }
    return (
        <div>
            <Pie data={chartData} />
        </div>
    );
}

export default PieChart;