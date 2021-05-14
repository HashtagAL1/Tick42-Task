import { IDashboardReducerState } from "../../types/reducerTypes";
import DashboardActionTypes from "../actions/dashboard-actions/actionTypes";

export const initState: IDashboardReducerState = {
    employees: null,
    projects: null,
    completedProjects: null,
    onHoldProjects: null,
    inProgressProjects: null,
    profitableProjects: null,
    nonProfitableProjects: null,
    totalRevenue: null,
    totalExpectedRevenue: null
};

export const dashboardReducer = (state = initState, action: any): IDashboardReducerState => {
    switch(action.type) {
        case DashboardActionTypes.GET_DASHBOARD_DATA_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case DashboardActionTypes.GET_DASHBOARD_DATA_FAIL:
            return {
                ...initState
            }
        case DashboardActionTypes.RESET_DASHBOARD:
            return {
                ...initState
            }
        default: return state;
    }
};