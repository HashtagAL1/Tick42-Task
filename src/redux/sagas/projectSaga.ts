import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProjects } from '../../requesters/projects';
import { getProjectsSuccessAction, getProjectsFailAction } from '../actions/project-actions/actions';
import ProjectActionTypes from '../actions/project-actions/actionTypes';
import { setLoading } from '../actions/shared-actions/actions';

export function* projectsSaga() {
    yield takeLatest(ProjectActionTypes.GET_PROJECTS, getProjects);
}

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
}