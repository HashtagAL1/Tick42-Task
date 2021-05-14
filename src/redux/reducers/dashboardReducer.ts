import { IDashboardReducerState } from "../../types/reducerTypes";

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
        default: return state;
    }
};