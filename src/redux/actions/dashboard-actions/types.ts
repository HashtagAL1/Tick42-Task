import { DashboardData } from '../../../types/dashboardTypes';
import DashboardActionTypes from './actionTypes';

export interface GetDashboardData {
    type: typeof DashboardActionTypes.GET_DASHBOARD_DATA
};

export interface ResetDashboardAction {
    type: typeof DashboardActionTypes.RESET_DASHBOARD
};

export type GetDashboardDataFailAction = {
    type: typeof DashboardActionTypes.GET_DASHBOARD_DATA_FAIL
};

export type GetDashboardDataSuccessAction = {
    type: typeof DashboardActionTypes.GET_DASHBOARD_DATA_SUCCESS,
    payload: DashboardData
};