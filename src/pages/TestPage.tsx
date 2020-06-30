import React, { useState, useEffect } from "react";
import { IonPage, IonContent } from "@ionic/react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, login } from "../api";
import {
  requestStoreAction,
  fetchStoreAction,
  DELETE_PRODUCT_STORE,
  ADD_PRODUCT_STORE,
} from "../actions";

const TestPage: React.FC = () => {
  const [text, setText] = useState("");
  const store = useSelector((state: any) => {
    return state.store;
  });
  const dispatch = useDispatch();
  const dispatchRequest = () => {
    dispatch(requestStoreAction("1"));
  };
  const dispatchFetch = () => {
    dispatch(fetchStoreAction("1"));
  };
  const defaultProduct = {"name":"Apple","image":"https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/7v/2w/p07v2wjn.jpg","price":3}
  useEffect(dispatchRequest, [dispatch]);

  return (
    <IonPage>
      <IonContent>
        <div>
          <button
            onClick={() => {
              getProducts("1").then((res) => setText(JSON.stringify(res)));
            }}
          >
            Get Products from network
          </button>
          <button onClick={() => {login("andrew", "p").then((res) => setText(JSON.stringify(res)));}}>Sign in</button>
          <div>Return result: {text}</div>
          <button onClick={dispatchFetch}>Refresh store</button>
          <button
            onClick={() =>
              dispatch({
                type: DELETE_PRODUCT_STORE,
                productId:
                  store.data.products[store.data.products.length - 1]._id,
                storeId: "1",
                token: "token",
              })
            }
          >
            Delete last product{" "}
            {store.data.products[store.data.products.length - 1]?._id}
          </button>
          <button onClick={() => dispatch({type: ADD_PRODUCT_STORE, product: defaultProduct, storeId: "1", token: "token"})}>Add product</button>
          <div>Store: {JSON.stringify(store)}</div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TestPage;
