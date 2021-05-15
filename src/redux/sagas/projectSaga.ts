import { AxiosResponse } from 'axios';
import { call, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchProjects } from '../../requesters/projects';
import { IProject } from '../../types/projectTypes';
import { IRootState } from '../../types/reducerTypes';
import { filterProjects } from '../../utils/projectUtils';
import { getProjectsSuccessAction, getProjectsFailAction, setSelectedProjectStatusAction, filterProjectsByStatusAction } from '../actions/project-actions/actions';
import ProjectActionTypes from '../actions/project-actions/actionTypes';
import { SetSelectedProjectStatusAction } from '../actions/project-actions/types';
import { setLoading } from '../actions/shared-actions/actions';

const getStoredProjects = (state: IRootState) => state.projects.projects;
const getStoredSelectedStatus = (state: IRootState) => state.projects.selectedStatus;

export function* projectsSaga() {
    yield takeLatest(ProjectActionTypes.GET_PROJECTS, getProjects);
    yield takeLatest(ProjectActionTypes.SET_SELECTED_STATUS, filterProjectsByStatus);
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