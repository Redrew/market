import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonListHeader,
  IonLabel,
  IonButton,
  IonItem,
  IonList,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { IonExampleItem } from "../examples/ionic.examples";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonExampleItem />
    </IonPage>
  );
};

export default Tab1;
