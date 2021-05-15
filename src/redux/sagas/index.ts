import { fork, all } from '@redux-saga/core/effects';
import { dashboardSaga } from './dashboardSaga';
import { projectsSaga } from './projectSaga'

export default function* rootSaga() {
    yield all([
        fork(dashboardSaga),
        fork(projectsSaga)
    ])
}