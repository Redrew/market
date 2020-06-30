import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonListHeader,
  IonButton,
} from "@ionic/react";
import AddProduct from "../components/AddProduct";
import Listing from "../components/Listing";

const StorePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Store</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Store</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AddProduct />
        <IonListHeader>
          <h2>My Items</h2>
        </IonListHeader>
        <Listing isowner={true} />
      </IonContent>
    </IonPage>
  );
};

export default StorePage;
