import { storeResource } from "./resources/StoreResource";

export const REQUEST_PAYLOAD_STORE = "REQUEST_PAYLOAD_STORE";
export const FETCH_PAYLOAD_STORE = "FETCH_PAYLOAD_STORE";
export const RECEIVE_PAYLOAD_STORE = "RECEIVE_PAYLOAD_STORE";
export const DELETE_PRODUCT_STORE = "DELETE_PRODUCT_STORE"
export const ADD_PRODUCT_STORE = "ADD_PRODUCT_STORE"

export const requestStoreAction = (storeId: string) => ({
  type: REQUEST_PAYLOAD_STORE,
  storeId,
});
export const fetchStoreAction = (storeId: string, keepOutdated = false) => ({
  type: FETCH_PAYLOAD_STORE,
  storeId,
  keepOutdated,
});
