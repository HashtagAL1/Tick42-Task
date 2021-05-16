import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { deleteProjectRequest, fetchProjects, startProjectRequest, createProjectRequest, completeProjectRequest, editProjectTeamRequest } from '../../requesters/projects';
import { IProject } from '../../types/projectTypes';
import { IRootState } from '../../types/reducerTypes';
import { addProject, filterProjects, removeProject, replaceProject, setProjectStatus, setProjectTeam } from '../../utils/projectUtils';
import { getProjectsSuccessAction, getProjectsFailAction, filterProjectsByStatusAction, deleteProjectSuccessAction, deleteProjectFailAction, alterProjectCollectionAction, startProjectFailAction, startProjectSuccessAction, addProjectSuccessAction, addProjectFailAction, completeProjectSuccessAction, completeProjectFailAction, setSelectedProject, editProjectTeamSuccessAction, editProjectTeamFailAction } from '../actions/project-actions/actions';
import ProjectActionTypes from '../actions/project-actions/actionTypes';
import { AddProjectAction, AlterProjectsCollectionActionPayload, CompleteProjectAction, DeleteProjectAction, EditProjectTeamAction, EditProjectTeamActionPayload, SetSelectedProjectStatusAction, StartProjectAction } from '../actions/project-actions/types';
import { setLoading } from '../actions/shared-actions/actions';

const getStoredProjects = (state: IRootState) => state.projects.projects;
const getStoredSelectedStatus = (state: IRootState) => state.projects.selectedStatus;

export function* projectsSaga() {
    yield takeLatest(ProjectActionTypes.GET_PROJECTS, getProjects);
    yield takeLatest(ProjectActionTypes.SET_SELECTED_STATUS, filterProjectsByStatus);
    yield takeLatest(ProjectActionTypes.DELETE_PROJECT, deleteProject);
    yield takeLatest(ProjectActionTypes.START_PROJECT, startProject);
    yield takeLatest(ProjectActionTypes.ADD_PROJECT, createProject);
    yield takeLatest(ProjectActionTypes.COMPLETE_PROJECT, completeProject);
    yield takeLatest(ProjectActionTypes.EDIT_PROJECT_TEAM, editProjectTeam);
};

export function* getProjects() {
    try {
        yield put(setLoading(true));
        const response: AxiosResponse = yield call(fetchProjects);
        const { data } = response;
        yield put(getProjectsSuccessAction(data.projects));
        yield put(setLoading(false));
    } catch(e) {
        yield put(getProjectsFailAction());
        yield put(setLoading(false))
    }
};

export function* filterProjectsByStatus() {
    const projects: IProject[] = yield select(getStoredProjects);
    const selectedStatus: string = yield select(getStoredSelectedStatus);

    const filteredProjects: IProject[] = yield call(filterProjects, projects, selectedStatus);

    yield put(filterProjectsByStatusAction(filteredProjects));
};

export function* deleteProject(action: DeleteProjectAction) {
    try {
        const projects: IProject[] = yield select(getStoredProjects);
        const selectedStatus: string = yield select(getStoredSelectedStatus)

        yield put(setLoading(true));
        const response: AxiosResponse = yield call(deleteProjectRequest, action.payload);
        const { projectId } = response.data;
        const newProjects: IProject[] = yield call(removeProject, projects, projectId);
        const filteredProjects: IProject[] = yield call(filterProjects, newProjects, selectedStatus);

        const payload: AlterProjectsCollectionActionPayload = { projects: newProjects, filteredProjects };

        yield put(deleteProjectSuccessAction());
        yield put(alterProjectCollectionAction(payload));
        yield put(setLoading(false));
    } catch(e) {
        yield put(deleteProjectFailAction());
        yield put(setLoading(false));
    }
};

export function* startProject(action: StartProjectAction) {
    try {
        const projects: IProject[] = yield select(getStoredProjects);
        const selectedStatus: string = yield select(getStoredSelectedStatus);

        yield put(setLoading(true));

        const response: AxiosResponse = yield call(startProjectRequest, action.payload);
        const { projectId, status } = response.data;
        const newProjects: IProject[] = yield call(setProjectStatus, projects, projectId, status);
        const filteredProjects: IProject[] = yield call(filterProjects, newProjects, selectedStatus);

        const payload: AlterProjectsCollectionActionPayload = { projects, filteredProjects };

        yield put(startProjectSuccessAction());
        yield put(alterProjectCollectionAction(payload));
        yield put(setLoading(false));
    } catch(e) {
        yield put(startProjectFailAction());
        yield put(setLoading(false));
    }
};

export function* createProject(action: AddProjectAction) {
    try {
        const projects: IProject[] = yield select(getStoredProjects);
        const selectedStatus: string = yield select(getStoredSelectedStatus);

        yield put(setLoading(true));
        const response: AxiosResponse = yield call(createProjectRequest, action.payload);
        const { project } = response.data;

        const newProjects: IProject[] = yield call(addProject, projects, project);
        const filteredProjects: IProject[] = yield call(filterProjects, newProjects, selectedStatus);
        const payload: AlterProjectsCollectionActionPayload = { projects: newProjects, filteredProjects };

        yield put(addProjectSuccessAction());
        yield put(alterProjectCollectionAction(payload));
        yield put(setLoading(false));
    } catch(e) {
        yield put(addProjectFailAction());
        yield put(setLoading(false));
    }
};

export function* completeProject(action: CompleteProjectAction) {
    try {
        const projects: IProject[] = yield select(getStoredProjects);
        const selectedStatus: string = yield select(getStoredSelectedStatus);

        yield put(setLoading(true));
        const response: AxiosResponse = yield call(completeProjectRequest, action.payload.id, action.payload.revenue);
        const { project } = response.data;
        
        const newProjects: IProject[] = yield call(replaceProject, projects, project);
        const filteredProjects: IProject[] = yield call(filterProjects, newProjects, selectedStatus);
        const payload: AlterProjectsCollectionActionPayload = { projects: newProjects, filteredProjects };

        yield put(completeProjectSuccessAction());
        yield put(alterProjectCollectionAction(payload));
        yield put(setSelectedProject(null));
        yield put(setLoading(false));
    } catch(e) {
        yield put(completeProjectFailAction());
        yield put(setSelectedProject(null));
        yield put(setLoading(false));
    }
};

export function* editProjectTeam(action: EditProjectTeamAction) {
    try {
        const projects: IProject[] = yield select(getStoredProjects);
        const selectedStatus: string = yield select(getStoredSelectedStatus);
        
        yield put(setLoading(true));
        const response: AxiosResponse = yield call(editProjectTeamRequest, action.payload.projectId, action.payload.team);
        const { team } = response.data;

        const newProjects: IProject[] = yield call(setProjectTeam, projects, action.payload.projectId, team);
        const filteredProjects: IProject[] = yield call(filterProjects, newProjects, selectedStatus);
        const payload: AlterProjectsCollectionActionPayload = { projects: newProjects, filteredProjects };

        yield put(editProjectTeamSuccessAction());
        yield put(alterProjectCollectionAction(payload));
        yield put(setSelectedProject(null));
        yield put(setLoading(false));
    } catch(e) {
        yield put(editProjectTeamFailAction());
        yield put(setSelectedProject(null));
        yield put(setLoading(false));
    }
}

