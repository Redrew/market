import React, { useContext } from "react";
import { IonButton, IonList, IonLabel } from "@ionic/react";
import { CartContext } from "../State";
import { StoreContext } from "../contexts/Store";
import ProductItem from "./ProductItem";

const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext);
  const [storeState, storeDispatch, useStore] = useContext(StoreContext);
  const store_id = "";
  const store = useStore(store_id, storeState, storeDispatch);

  return (
    <>
      <IonList>
        {state.items.map((item: any) => {
          const product = store?.products?.find(
            (product: any) => product._id === item._id
          );
          return product ? <ProductItem product={product} key={product._id}>
              <div>
              <IonLabel>
                  Price: {product.price} AUD
              </IonLabel>
              <IonLabel>
                  Quantity: {item.quantity} units
              </IonLabel>
              </div>
          </ProductItem> : null;
        })}
      </IonList>
      {state?.items.length ? (
        <div>
          <IonButton
            onClick={() => {
              dispatch({ type: "clear-cart" });
            }}
          >
            Clear Cart
          </IonButton>
          <IonButton>Checkout</IonButton>
        </div>
      ) : (
        <IonButton href="/shop">Continue Shopping</IonButton>
      )}
    </>
  );
};

export default Cart;
