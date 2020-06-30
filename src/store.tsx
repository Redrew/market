import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import {sagas, reducer} from "./resources";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(sagas);

// render the application
