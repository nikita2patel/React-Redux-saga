import {legacy_createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './Reducer/Index';
import Mysaga from './Saga/Mysaga'
const SagaMiddleware = createSagaMiddleware();
export const store = legacy_createStore(rootReducer,applyMiddleware(SagaMiddleware))
SagaMiddleware.run(Mysaga)