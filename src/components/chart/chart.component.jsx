import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComp = () => {
    return (
        <div className="chart">
            <Line
                data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
                    datasets: [{
                        fill: 'start',
                        lineTension: 0.3,
                        label: 'Temp(°C)',
                        data: [3, 4, 1, 3, 2, 4, 4, 2, 6],
                        backgroundColor: 'rgba(167, 167, 255, 0.6)',
                        borderColor: 'rgb(167, 167, 255)',
                        borderWidth: 1
                    }],
                }}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />

        </div>
    )
}
export default ChartComp;