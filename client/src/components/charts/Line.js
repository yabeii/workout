import React from 'react';
import { Line } from 'react-chartjs-2';
// import { sampleLineChartData } from '../charts/sampleData'

const LineChart = props => {
    const lineData = {
        labels: props.labels, // Array of strings
        datasets: [
            {
                label: props.title, // String
                fill: false,
                lineTension: 0.1,
                backgroundColor: props.backgroundColor, // String
                borderColor: props.borderColor, // String
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: props.pointBorderColor, // String
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: props.pointHoverBackgroundColor, // String
                pointHoverBorderColor: props.pointHoverBorderColor, // String
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: props.data // Array of integers
            }
        ]
    }
    return (
        <div>
            <Line data={lineData} />
        </div>
    );
}

export default LineChart;