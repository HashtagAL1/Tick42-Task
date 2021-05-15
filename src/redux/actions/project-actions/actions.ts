import { IProject } from "../../../types/projectTypes";
import ProjectActionTypes from "./actionTypes";
import { FilterProjectsByStatusAction, GetProjectsAction, GetProjectsFailAction, GetProjectsSuccessAction, ResetProjectsAction, SetSelectedProjectStatusAction } from "./types";

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

export const resetProjectsAction = (): ResetProjectsAction => {
    return { type: ProjectActionTypes.RESET_PROJECTS };
};