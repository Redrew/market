import React from "react";
import { getCart, clearCart } from "../utils/helper.cart";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import Cart from "../components/Cart";

const CartPage: React.FC = () => {
  // const cart = getCart();
  // const cartItems = [];

  // for (var _id in cart) {
  //   cartItems.push(
  //     <IonItem>
  //       <IonThumbnail slot="start">
  //         <IonImg src={cart[_id].image} />
  //       </IonThumbnail>
  //       <IonLabel>
  //         <h2>{cart[_id].name}</h2>
  //         <h3>Price: {cart[_id].price}</h3>
  //       </IonLabel>
  //       <IonLabel class="ion-text-end">
  //         <h3>Quantity: {cart[_id].quantity}</h3>
  //       </IonLabel>
  //     </IonItem>
  //   );
  // }

  // return (
  //   <IonPage>
  //     <IonHeader>
  //       <IonToolbar>
  //         <IonTitle>My Cart</IonTitle>
  //       </IonToolbar>
  //     </IonHeader>
  //     <IonContent>
  //       <IonHeader collapse="condense">
  //         <IonToolbar>
  //           <IonTitle size="large">My Cart</IonTitle>
  //         </IonToolbar>
  //       </IonHeader>
  //       <IonList>{cartItems}</IonList>
  //       {cartItems.length ? (
  //         <div>
  //           <IonButton
  //             onClick={() => {
  //               clearCart();
  //             }}
  //             href="/cart"
  //           >
  //             Clear Cart
  //           </IonButton>
  //           <IonButton>Checkout</IonButton>
  //         </div>
  //       ) : (
  //         <IonButton href="/shop">Continue Shopping</IonButton>
  //       )}
  //     </IonContent>
  //   </IonPage>
  // );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Cart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Cart</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Cart />
      </IonContent>
    </IonPage>
  );
};

export default CartPage;
