import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { Payload, defaultPayload } from "../api/fetchPayload";
import { getProducts, deleteProduct, addProduct } from "../api";
import PayloadResource from "./Resource";
import {
  REQUEST_PAYLOAD_STORE,
  FETCH_PAYLOAD_STORE,
  RECEIVE_PAYLOAD_STORE,
  DELETE_PRODUCT_STORE,
  ADD_PRODUCT_STORE,
} from "../actions";

export interface Product {}

export interface Store {
  storeId: string;
  products: Product[];
}

const initialStore: Payload<Store> = {
  ...defaultPayload,
  data: { storeId: "", products: [] },
};

class StoreResource extends PayloadResource<Store> {
  getPayload = (action: AnyAction) => getProducts(action.storeId);
  retrieveStorage = (): any => {
    try {
      return JSON.parse(localStorage["store"]);
    } catch {
      return null;
    }
  };
  saveToStorage = (payload?: Payload) => {
    localStorage["store"] = JSON.stringify(payload);
  };
  isValid = (payload: any, action: any) =>
    payload && payload.data?.storeId === action.storeId;
  initialState = initialStore;
  delayTime = 5000;
  REQUEST_PAYLOAD = REQUEST_PAYLOAD_STORE;
  FETCH_PAYLOAD = FETCH_PAYLOAD_STORE;
  RECEIVE_PAYLOAD = RECEIVE_PAYLOAD_STORE;
  DELETE_PRODUCT = DELETE_PRODUCT_STORE;
  ADD_PRODUCT = ADD_PRODUCT_STORE;

  constructor() {
    super();
    this.deleteProduct = this.deleteProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }
  *deleteProduct(action: AnyAction) {
    const payload = yield call(
      deleteProduct,
      action.productId,
      action.storeId,
      action.token
    );
    if (payload.ok) {
      yield put({ type: this.FETCH_PAYLOAD });
    }
  }
  *addProduct(action: AnyAction) {
    const payload = yield call(
      addProduct,
      action.product,
      action.storeId,
      action.token
    );
    if (payload.ok) {
      yield put({ type: this.FETCH_PAYLOAD });
    }
  }
}

export const storeResource = new StoreResource();
