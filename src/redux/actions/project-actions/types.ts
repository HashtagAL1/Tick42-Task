import ProjectActionTypes from './actionTypes';
import { IProject } from '../../../types/projectTypes';
import { IEmployee } from '../../../types/employeeTypes';

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

export interface DeleteProjectAction {
    type: typeof ProjectActionTypes.DELETE_PROJECT,
    payload: string
};

export interface AlterProjectsCollectionActionPayload {
    projects: IProject[],
    filteredProjects: IProject[]
};

export interface StartProjectAction {
    type: typeof ProjectActionTypes.START_PROJECT,
    payload: string
};

export interface StartProjectSuccessAction {
    type: typeof ProjectActionTypes.START_PROJECT_SUCCESS
};

export interface StartProjectFailAction {
    type: typeof ProjectActionTypes.START_PROJECT_FAIL
};

export interface AlterProjectsCollectionAction {
    type: typeof ProjectActionTypes.ALTER_PROJECTS_COLLECTION,
    payload: AlterProjectsCollectionActionPayload
};

export interface DeleteProjectSuccessAction {
    type: typeof ProjectActionTypes.DELETE_PROJECT_SUCCESS
};

export interface DeleteProjectFailAction {
    type: typeof ProjectActionTypes.DELETE_PROJECT_FAIL
};

export interface AddProjectAction {
    type: typeof ProjectActionTypes.ADD_PROJECT,
    payload: IProject
};

export interface AddProjectSuccessAction {
    type: typeof ProjectActionTypes.ADD_PROJECT_SUCCESS
};

export interface AddProjectFailAction {
    type: typeof ProjectActionTypes.ADD_PROJECT_FAIL
};

export interface CompleteProjectActionPayload {
    revenue: number | undefined,
    id: string | undefined
}

export interface CompleteProjectAction {
    type: typeof ProjectActionTypes.COMPLETE_PROJECT,
    payload: CompleteProjectActionPayload
};

export interface CompleteProjectSuccessAction {
    type: typeof ProjectActionTypes.COMPLETE_PROJECT_SUCCESS
};

export interface CompleteProjectFailAction {
    type: typeof ProjectActionTypes.COMPLETE_PROJECT_FAIL;
};

export interface SetSelectedProjectAction {
    type: typeof ProjectActionTypes.SET_SELECTED_PROJECT,
    payload: IProject | null
};

export interface EditProjectTeamActionPayload {
    projectId: string | undefined,
    team: IEmployee[]
}

export interface EditProjectTeamAction {
    type: typeof ProjectActionTypes.EDIT_PROJECT_TEAM,
    payload: EditProjectTeamActionPayload
};

export interface EditProjectTeamSuccessAction {
    type: typeof ProjectActionTypes.EDIT_PROJECT_TEAM_SUCCESS
};

export interface EditProjectTeamFailAction {
    type: typeof ProjectActionTypes.EDIT_PROJECT_TEAM_FAIL
};

export interface ResetProjectsAction {
    type: typeof ProjectActionTypes.RESET_PROJECTS
};
