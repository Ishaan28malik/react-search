import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagas from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]

export const store = createStore(reducers, {}, applyMiddleware(...middleware))

sagaMiddleware.run(sagas);