import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas'
import reducers from './reducers'


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));


sagaMiddleware.run(sagas);
