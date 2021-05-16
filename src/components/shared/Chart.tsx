import React from 'react';
import { ChartData } from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2'

interface IProps {
    type: string,
    data: ChartData
}

const Chart: React.FC<IProps> = ({ type, data }) => {

    switch(type) {
        case 'bar': return <Bar type={type} data={data}/>;
        case 'pie': return <Pie type={type} data={data}/>;
        case 'doughnut': return <Doughnut type={type} data={data} />;
        default: return null;
    }
};

export default Chart;