import React, { useState, useEffect, useContext } from "react";
import {
  IonItemSliding,
  IonLabel,
  IonList,
  IonItemOption,
  IonItemOptions,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { getProducts, deleteProduct } from "../api/shop";
import { add } from "ionicons/icons";
import { CartContext } from "../State";
import ProductItem from "./ProductItem";
import { StoreContext } from "../contexts/Store";

export interface Product {
  image: string;
  price: number;
  name: string;
  _id: string;
}

export interface ListingProps {
  isowner: boolean;
}

const Listing: React.FC<ListingProps> = ({ isowner }) => {
  const { state, dispatch } = useContext(CartContext);
  const [storeState, storeDispatch, useStore] = useContext(StoreContext);
  const store_id = ""
  const store = useStore(store_id, storeState, storeDispatch)

  return (
    <IonList>
      {store?.products?.map((product: any) => (
        <IonItemSliding key={product._id}>
          <ProductItem product={product}>
            {isowner ? null : (
              <div>
                <IonLabel>
                  {
                    state?.items.find((item: any) => item._id === product._id)
                      ?.quantity
                  }
                </IonLabel>
                <IonButton
                  onClick={() => {
                    dispatch({
                      type: "add-to-cart",
                      payload: { _id: product._id, quantity: 1 },
                    });
                  }}
                >
                  <IonIcon icon={add} />
                </IonButton>
              </div>
            )}
          </ProductItem>
          {isowner ? (
            <IonItemOptions side="end">
              <IonItemOption
                onClick={() => {
                  deleteProduct(product._id).then((res) => {
                    if (res == 200) storeDispatch({type: "delete-product", payload: {store_id: "", product_id: product._id}})
                  });
                }}
              >
                Remove
              </IonItemOption>
            </IonItemOptions>
          ) : null}
        </IonItemSliding>
      ))}
    </IonList>
  );
};

export default Listing;
