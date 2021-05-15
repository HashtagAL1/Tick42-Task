import ProjectActionTypes from './actionTypes';
import { IProject } from '../../../types/projectTypes';

export interface GetProjectsAction {
    type: typeof ProjectActionTypes.GET_PROJECTS
};

export interface GetProjectsSuccessAction {
    type: typeof ProjectActionTypes.GET_PROJECTS_SUCCESS,
    payload: IProject[]
};

export interface GetProjectsFailAction {
    type: typeof ProjectActionTypes.GET_PROJECTS_FAIL
};

export interface SetSelectedProjectStatusAction {
    type: typeof ProjectActionTypes.SET_SELECTED_STATUS,
    payload: string
};

export interface FilterProjectsByStatusAction {
    type: typeof ProjectActionTypes.FILTER_PROJECTS_BY_STATUS,
    payload: IProject[]
};

export interface ResetProjectsAction {
    type: typeof ProjectActionTypes.RESET_PROJECTS
};
