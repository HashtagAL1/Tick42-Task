import { IProjectReducerState } from "../../types/reducerTypes";
import ProjectActionTypes from '../actions/project-actions/actionTypes';

export const initState: IProjectReducerState = {
    projects: [],
    filteredProjects: [],
    selectedStatus: 'All',
    statuses: ['All', 'On hold', 'In Progress', 'Completed']
};

export const projectReducer = (state = initState, action: any): IProjectReducerState => {
    switch (action.type) {
        case ProjectActionTypes.GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.payload,
                filteredProjects: action.payload,
                selectedStatus: 'All'
            }
        case ProjectActionTypes.GET_PROJECTS_FAIL:
            return {
                ...state,
                projects: [],
                filteredProjects: []
            }
        case ProjectActionTypes.SET_SELECTED_STATUS:
            return {
                ...state,
                selectedStatus: action.payload
            }
        case ProjectActionTypes.FILTER_PROJECTS_BY_STATUS:
            return {
                ...state,
                filteredProjects: action.payload
            }
        case ProjectActionTypes.ALTER_PROJECTS_COLLECTION:
            return {
                ...state,
                projects: action.payload.projects,
                filteredProjects: action.payload.filteredProjects
            }
        case ProjectActionTypes.RESET_PROJECTS:
            return {
                ...initState
            }
        default: return state;
    }
};