import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import Listing from '../components/Listing';
import { cart } from 'ionicons/icons';

const ShopPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Shop</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Listing isowner={false}/>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton href="/cart">
            <IonIcon icon={cart} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default ShopPage;
