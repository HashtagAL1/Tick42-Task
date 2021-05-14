import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDashboardData } from '../../requesters/dashboard';
import { setDashboardDataFail, setDashboardDataSuccess } from '../actions/dashboard-actions/actions';
import DashboardActionTypes from '../actions/dashboard-actions/actionTypes';
import { setLoading } from '../actions/shared-actions/actions';

export function* dashboardSaga() {
    yield takeLatest(DashboardActionTypes.GET_DASHBOARD_DATA, getDashboardData);
}

export function* getDashboardData() {
    try {
        yield put(setLoading(true));
        const response: AxiosResponse = yield call(fetchDashboardData);
        const { data } = response;
        yield put(setDashboardDataSuccess(data));
        yield put(setLoading(false));
    } catch(e) {
        yield put(setDashboardDataFail());
        yield put(setLoading(false));
    }
}