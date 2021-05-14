import { fork, all } from '@redux-saga/core/effects';
import { dashboardSaga } from './dashboardSaga';

export default function* rootSaga() {
    yield all([
        fork(dashboardSaga)
    ])
}