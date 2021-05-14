import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardDataAction, resetDashboardAction } from '../../redux/actions/dashboard-actions/actions';
import { IRootState } from '../../types/reducerTypes';
import DashboardCardContent from '../dashboard/DashboardCardContent'
import Card from '../shared/Card';

const Dashboard: React.FC = () => {

    const dispatch = useDispatch();

    const numberOfProjects = useSelector<IRootState, number | null>(state => state.dashboard.projects);
    const numberOfEmployees = useSelector<IRootState, number | null>(state => state.dashboard.employees);
    const totalExpectedRevenue = useSelector<IRootState, number | null>(state => state.dashboard.totalExpectedRevenue);
    const totalRevenue = useSelector<IRootState, number | null>(state => state.dashboard.totalRevenue);

    useEffect(() => {
        dispatch(getDashboardDataAction());

        return () => {
            dispatch(resetDashboardAction())
        }
    }, [dispatch])

    return <div className="main-content">
        <div className="flex-row-container">
            <Card className="pl-1 pt-2 pb-2 text-center" shouldDisplay={numberOfProjects !== null}>
                <DashboardCardContent label="Projects" 
                    value={numberOfProjects} 
                    isCurrency={false} 
                />
            </Card>
            <Card className="pl-1 pt-2 pb-2 text-center" shouldDisplay={numberOfEmployees !== null}>
                <DashboardCardContent label="Employees" 
                    value={numberOfEmployees} 
                    isCurrency={false} 
                />
            </Card>
            <Card className="pl-1 pt-2 pb-2 text-center" shouldDisplay={totalExpectedRevenue !== null}>
                <DashboardCardContent label="Total expected revenue" 
                    value={totalExpectedRevenue} 
                    isCurrency={true} 
                />
            </Card>
            <Card className="pl-1 pt-2 pb-2 text-center"  shouldDisplay={totalRevenue !== null}>
                <DashboardCardContent label="Total revenue" 
                    value={totalRevenue} 
                    isCurrency={true} 
                />
            </Card>
        </div>
    </div>
};

export default Dashboard;