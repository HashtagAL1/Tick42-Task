import { DashboardData } from "../../../types/dashboardTypes";
import DashboardActionTypes from "./actionTypes";
import { 
    GetDashboardData, 
    GetDashboardDataFailAction, 
    GetDashboardDataSuccessAction, 
    ResetDashboardAction 
} from "./types";

export const getDashboardDataAction = (): GetDashboardData => {
    return { type: DashboardActionTypes.GET_DASHBOARD_DATA };
};

export const setDashboardDataSuccess = (dashboardData: DashboardData): GetDashboardDataSuccessAction => {
    return { type: DashboardActionTypes.GET_DASHBOARD_DATA_SUCCESS, payload: dashboardData };
};

export const setDashboardDataFail = (): GetDashboardDataFailAction => {
    return { type: DashboardActionTypes.GET_DASHBOARD_DATA_FAIL };
};

export const resetDashboardAction = (): ResetDashboardAction => {
    return { type: DashboardActionTypes.RESET_DASHBOARD }
};