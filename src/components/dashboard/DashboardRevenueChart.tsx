import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../types/reducerTypes';
import Chart from '../shared/Chart';

const DashboardRevenueChart: React.FC = () => {
    const profitableProjects = useSelector<IRootState, number | null>(state => state.dashboard.profitableProjects)
    const nonProfitableProjects = useSelector<IRootState, number | null>(state => state.dashboard.nonProfitableProjects);

    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {

        if(profitableProjects !== null && nonProfitableProjects !== null) {
            const data = {
                labels: ['Exceeded expected revenue', 'Did not exceed expected revenue'],
                datasets: [
                    {
                        data: [profitableProjects, nonProfitableProjects],
                        backgroundColor: ['rgba(13, 110, 253, 0.7)', 'rgba(240, 26, 26, 0.7)'],
                        hoverBackgroundColor: ['rgba(13, 110, 253, 1)', 'rgba(240, 26, 26, 1)']
                    }
                ]
            }

            setChartData(data);
        }

        return () => {
            setChartData(null);
        }
    }, [profitableProjects, nonProfitableProjects]);

    return <Chart type="pie" data={chartData} />
};

export default DashboardRevenueChart;