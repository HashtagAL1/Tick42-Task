import { AxiosResponse } from 'axios';
import { call, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { deleteProjectRequest, fetchProjects } from '../../requesters/projects';
import { IProject } from '../../types/projectTypes';
import { IRootState } from '../../types/reducerTypes';
import { filterProjects, removeProject } from '../../utils/projectUtils';
import { getProjectsSuccessAction, getProjectsFailAction, setSelectedProjectStatusAction, filterProjectsByStatusAction, deleteProjectAction, deleteProjectSuccessAction, deleteProjectFailAction } from '../actions/project-actions/actions';
import ProjectActionTypes from '../actions/project-actions/actionTypes';
import { DeleteProjectAction, DeleteProjectSuccessActionPayload, SetSelectedProjectStatusAction } from '../actions/project-actions/types';
import { setLoading } from '../actions/shared-actions/actions';

const getStoredProjects = (state: IRootState) => state.projects.projects;
const getStoredSelectedStatus = (state: IRootState) => state.projects.selectedStatus;

export function* projectsSaga() {
    yield takeLatest(ProjectActionTypes.GET_PROJECTS, getProjects);
    yield takeLatest(ProjectActionTypes.SET_SELECTED_STATUS, filterProjectsByStatus);
    yield takeLatest(ProjectActionTypes.DELETE_PROJECT, deleteProject);
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

        const payload: DeleteProjectSuccessActionPayload = { projects: newProjects, filteredProjects };

        yield put(deleteProjectSuccessAction(payload));
        yield put(setLoading(false));

    } catch(e) {
        yield put(deleteProjectFailAction());
        yield put(setLoading(false));
    }
};