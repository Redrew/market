import { createContext, useState, useEffect } from "react";
import { ContextType } from "../State";
import { getProducts } from "../api/shop";
import { deleteProduct } from "../api/user";


const StoreContext = createContext<Partial<any[]>>([]);

export interface StoreState {
  store_directory?: string[];
  stores: Store[];
}

export interface Store {
  store_id: string;
  name?: string;
  products: Product[];
}

export interface Product {
  image: string;
  price: number;
  name: string;
  _id: string;
}

const initialStore = {
  store_directory: [],
  stores: [],
};

const storeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "set-store":
      // TODO make store id dependent, to support multiple stores
      return { ...state, stores: [action.payload] };
    case "delete-product":
        const store = state.stores.find((store: Store) => store.store_id === action.payload.store_id)
        if (store) store.products = store.products.filter((product: Product) => product._id != action.payload.product_id)
        return {...state}
    default:
      return state;
  }
};

const useStore = (store_id: string, state: StoreState, dispatch: any) => {
  const [store, setStore] = useState<Store | null>();
  useEffect(() => {
    var store_ = state?.stores?.find((s) => s.store_id === store_id);
    if (store_) setStore(store_);
    else
      getProducts().then((products) =>
        dispatch({
          type: "set-store",
          payload: { store_id: "", name: "Test Store", products: products },
        })
      );
  }, [store_id, state, dispatch, setStore]);
  useEffect(() => console.log("Store State updated"), [store])

  return store
};

const asyncStoreDispatchWrapper = (dispatch: React.Dispatch<any>) => async (
  action: any
) => {
  switch (action.type) {
    case "delete-product":
        deleteProduct(action.payload).then(res => {if (res == 200) dispatch(action);})
    default:
        dispatch(action)
  }
};

export { storeReducer, initialStore, StoreContext, asyncStoreDispatchWrapper, useStore};
