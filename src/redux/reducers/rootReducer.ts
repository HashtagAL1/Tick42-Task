import { combineReducers } from 'redux';
import { IRootState } from '../../types/reducerTypes';
import { dashboardReducer } from './dashboardReducer';
import { employeeReducer } from './employeeReducer';
import { projectReducer } from './projectReducer';
import { sharedReducer } from './sharedReducer';

const rootReducer = combineReducers<IRootState>({
    shared: sharedReducer,
    projects: projectReducer,
    dashboard: dashboardReducer,
    employees: employeeReducer
})

export default rootReducer;