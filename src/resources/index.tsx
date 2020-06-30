import { combineReducers } from "redux";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { storeResource } from "./StoreResource";
import store from "../store";

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* sagas() {
  yield all([
    takeLatest(storeResource.REQUEST_PAYLOAD, storeResource.requestSaga),
    takeLatest(storeResource.FETCH_PAYLOAD, storeResource.fetchSaga),
    takeLatest(storeResource.DELETE_PRODUCT, storeResource.deleteProduct),
    takeLatest(storeResource.ADD_PRODUCT, storeResource.addProduct),
  ]);
}

export const reducer = combineReducers({store: storeResource.reducer})
