import axios from 'axios';
import { DashboardData } from '../types/dashboardTypes';

export const fetchDashboardData = () => {
    return axios.get<DashboardData>('http://localhost:3001/other/dashboard')
};