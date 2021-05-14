import { combineReducers } from 'redux';
import { IRootState } from '../../types/reducerTypes';
import { dashboardReducer } from './dashboardReducer';
import { projectReducer } from './projectReducer';
import { sharedReducer } from './sharedReducer';

const rootReducer = combineReducers<IRootState>({
    shared: sharedReducer,
    projects: projectReducer,
    dashboard: dashboardReducer
})

export default rootReducer;