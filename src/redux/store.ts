import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

export default store;

