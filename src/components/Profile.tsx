import React, { useContext } from "react";
import { IonLabel, IonItem, IonNote, IonButton } from "@ionic/react";
import { UserContext } from "../State";
const Profile: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  return (
    <>
      <IonItem>
        <IonLabel>Username</IonLabel>
        {state?.username}
      </IonItem>
      <IonItem>
        <IonLabel>Email</IonLabel>
        {state?.email}
      </IonItem>
      <IonButton
        onClick={() => {
          dispatch({ type: "logout" });
        }}
      >
        Log Out
      </IonButton>
    </>
  );
};

export default Profile;
