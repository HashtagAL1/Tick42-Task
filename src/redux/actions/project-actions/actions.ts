import { IProject } from "../../../types/projectTypes";
import ProjectActionTypes from "./actionTypes";
import { 
    AddProjectAction,
    AddProjectFailAction, 
    AddProjectSuccessAction,
    AlterProjectsCollectionAction, 
    AlterProjectsCollectionActionPayload, 
    CompleteProjectAction, 
    CompleteProjectActionPayload, 
    CompleteProjectFailAction, 
    CompleteProjectSuccessAction, 
    DeleteProjectAction, 
    DeleteProjectFailAction, 
    DeleteProjectSuccessAction, 
    EditProjectTeamAction, 
    EditProjectTeamActionPayload, 
    EditProjectTeamFailAction, 
    EditProjectTeamSuccessAction, 
    FilterProjectsByStatusAction, 
    GetProjectsAction, 
    GetProjectsFailAction, 
    GetProjectsSuccessAction, 
    ResetProjectsAction, 
    SetSelectedProjectAction, 
    SetSelectedProjectStatusAction 
} from "./types";

export const getProjectsAction = (): GetProjectsAction => {
    return { type: ProjectActionTypes.GET_PROJECTS };
};

export const getProjectsSuccessAction = (projects: IProject[]): GetProjectsSuccessAction => {
    return { type: ProjectActionTypes.GET_PROJECTS_SUCCESS, payload: projects };
};

export const getProjectsFailAction = (): GetProjectsFailAction => {
    return { type: ProjectActionTypes.GET_PROJECTS_FAIL };
};

export const setSelectedProjectStatusAction = (status: string): SetSelectedProjectStatusAction => {
    return { type: ProjectActionTypes.SET_SELECTED_STATUS, payload: status };
};

export const filterProjectsByStatusAction = (projects: IProject[]): FilterProjectsByStatusAction => {
    return { type: ProjectActionTypes.FILTER_PROJECTS_BY_STATUS, payload: projects };
};

export const deleteProjectAction = (id: string): DeleteProjectAction => {
    return { type: ProjectActionTypes.DELETE_PROJECT, payload: id };
};

export const deleteProjectSuccessAction = (): DeleteProjectSuccessAction => {
    return { type: ProjectActionTypes.DELETE_PROJECT_SUCCESS };
};

export const deleteProjectFailAction = (): DeleteProjectFailAction => {
    return { type: ProjectActionTypes.DELETE_PROJECT_FAIL };
};

export const alterProjectCollectionAction = (payload: AlterProjectsCollectionActionPayload): AlterProjectsCollectionAction => {
    return { type: ProjectActionTypes.ALTER_PROJECTS_COLLECTION, payload };
};

export const startProjectAction = (id: string) => {
    return { type: ProjectActionTypes.START_PROJECT, payload: id };
};

export const startProjectSuccessAction = () => {
    return { type: ProjectActionTypes.START_PROJECT_SUCCESS };
};

export const startProjectFailAction = () => {
    return { type: ProjectActionTypes.START_PROJECT_FAIL };
};

export const resetProjectsAction = (): ResetProjectsAction => {
    return { type: ProjectActionTypes.RESET_PROJECTS };
};

export const addProjectAction = (project: IProject): AddProjectAction => {
    return { type: ProjectActionTypes.ADD_PROJECT, payload: project };
};

export const addProjectSuccessAction = (): AddProjectSuccessAction => {
    return { type: ProjectActionTypes.ADD_PROJECT_SUCCESS };
};

export const completeProjectAction = (payload: CompleteProjectActionPayload): CompleteProjectAction => {
    return { type: ProjectActionTypes.COMPLETE_PROJECT, payload }; 
};

export const completeProjectSuccessAction = (): CompleteProjectSuccessAction => {
    return { type: ProjectActionTypes.COMPLETE_PROJECT_SUCCESS }
};

export const completeProjectFailAction = (): CompleteProjectFailAction => {
    return { type: ProjectActionTypes.COMPLETE_PROJECT_FAIL };
};

export const setSelectedProject = (project: IProject | null): SetSelectedProjectAction => {
    return { type: ProjectActionTypes.SET_SELECTED_PROJECT, payload: project };
};

export const editProjectTeamAction = (payload: EditProjectTeamActionPayload): EditProjectTeamAction => {
    return { type: ProjectActionTypes.EDIT_PROJECT_TEAM, payload }
};

export const editProjectTeamSuccessAction = (): EditProjectTeamSuccessAction => {
    return { type: ProjectActionTypes.EDIT_PROJECT_TEAM_SUCCESS };
};

export const editProjectTeamFailAction = (): EditProjectTeamFailAction => {
    return { type: ProjectActionTypes.EDIT_PROJECT_TEAM_FAIL };
};
export const addProjectFailAction = (): AddProjectFailAction => {
    return { type: ProjectActionTypes.ADD_PROJECT_FAIL };
};