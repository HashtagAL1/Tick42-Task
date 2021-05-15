import ProjectActionTypes from './actionTypes';
import { IProject } from '../../../types/projectTypes';

export interface GetProjectsAction {
    type: typeof ProjectActionTypes.GET_PROJECTS
};

export interface GetProjectsSuccessAction {
    type: typeof ProjectActionTypes.GET_PROJECTS_SUCCESS,
    payload: IProject[]
}

export interface GetProjectsFailAction {
    type: typeof ProjectActionTypes.GET_PROJECTS_FAIL
}

export interface ResetProjectsAction {
    type: typeof ProjectActionTypes.RESET_PROJECTS
}