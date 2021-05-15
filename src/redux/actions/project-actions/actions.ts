import { IProject } from "../../../types/projectTypes";
import ProjectActionTypes from "./actionTypes";
import { GetProjectsAction, GetProjectsFailAction, GetProjectsSuccessAction, ResetProjectsAction } from "./types";

export const getProjectsAction = (): GetProjectsAction => {
    return { type: ProjectActionTypes.GET_PROJECTS };
};

export const getProjectsSuccessAction = (projects: IProject[]): GetProjectsSuccessAction => {
    return { type: ProjectActionTypes.GET_PROJECTS_SUCCESS, payload: projects };
};

export const getProjectsFailAction = (): GetProjectsFailAction => {
    return { type: ProjectActionTypes.GET_PROJECTS_FAIL };
};

export const resetProjectsAction = (): ResetProjectsAction => {
    return { type: ProjectActionTypes.RESET_PROJECTS };
};