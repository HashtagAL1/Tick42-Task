import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../types/reducerTypes';
import Chart from '../shared/Chart';

const DashboardStatusChart: React.FC = () => {
    const onHoldProjects = useSelector<IRootState, number | null>(state => state.dashboard.onHoldProjects);
    const inProgressProjects = useSelector<IRootState, number | null>(state => state.dashboard.inProgressProjects);
    const completedProjects = useSelector<IRootState, number | null>(state => state.dashboard.completedProjects);
    
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        if (onHoldProjects !== null && inProgressProjects !== null && completedProjects !== null) {
            const data = {
                labels: ['On hold', 'In Progress', 'Completed'],
                datasets: [
                    { 
                        data: [onHoldProjects, inProgressProjects, completedProjects],
                        backgroundColor: ['rgba(235, 152, 52, 0.7)', 'rgba(13, 110, 253, 0.7)', 'rgba(55, 235, 52, 0.7)'],
                        hoverBackgroundColor: ['rgba(235, 152, 52, 1)', 'rgba(13, 110, 253, 1)', 'rgba(55, 235, 52, 1)']
                    }
                ]
            };

            setChartData(data);
        }

        return () => {
            setChartData(null);
        }
    }, [onHoldProjects, inProgressProjects, completedProjects])

    if(!chartData) return null;

    return <Chart type="pie" data={chartData}/>
};

export default DashboardStatusChart;