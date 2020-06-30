import { Payload } from "../api/fetchPayload";
import { put, delay, call } from "redux-saga/effects";
import { AnyAction } from "redux";

abstract class PayloadResource<T=any> {
  // method to get data from network
  abstract getPayload(action: AnyAction): Promise<Payload<T>>;
  abstract retrieveStorage(): any;
  abstract saveToStorage(payload?: Payload<T>): void;
  // checks if payload is in a valid state, payloads from bad network calls are still valid
  // if a payload is not valid it will be overwritten by next fetch call
  abstract isValid(payload: any, action: any): boolean;
  abstract initialState: Payload<T>;
  abstract REQUEST_PAYLOAD: string;
  abstract FETCH_PAYLOAD: string;
  abstract RECEIVE_PAYLOAD: string;
  // milliseconds to wait before refetching
  delayTime = 5000;

  constructor() {
    this.reducer = this.reducer.bind(this);
    this.requestSaga = this.requestSaga.bind(this);
    this.fetchSaga = this.fetchSaga.bind(this);
  }

  reducer(
    state = this.initialState,
    { type, payload }: { type: string; payload: any }
  ): Payload<T> {
    switch (type) {
      case this.RECEIVE_PAYLOAD:
        return payload;
      default:
        return state;
    }
  }
  // Get payload from storage, if valid, trigger dispatch else fetch payload from network
  *requestSaga(action: AnyAction) {
    console.log("Saga request called");
    const payload = this.retrieveStorage();
    if (this.isValid(payload, action)) {
      // trigger dispatch
      yield put({ type: this.RECEIVE_PAYLOAD, payload });
    } else {
      // fetch payload from network and overwrite storage
      yield put({ ...action, type: this.FETCH_PAYLOAD, keepOutdated: false });
    }
  }

  // Fetch data from network, retry if we encounter network error
  *fetchSaga(action: AnyAction) {
    console.log("Saga fetch called");
    const payload: Payload = yield call(this.getPayload, action);
    // If the payload was bad but we should keep outdated resources
    if (!payload.ok && action.keepOutdated) {
      let oldPayload = this.retrieveStorage();
      payload.data = oldPayload?.data;
    }
    // Save payload to storage and trigger request payload to cycle to dispatch
    this.saveToStorage(payload);
    yield put({ ...action, type: this.REQUEST_PAYLOAD });
    // If there is an network error call fetch again after delay
    if (payload.networkError) {
      yield delay(this.delayTime);
      yield put({ ...action, type: this.FETCH_PAYLOAD });
    }
  }
}

export default PayloadResource;
