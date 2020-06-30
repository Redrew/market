import React, { useContext } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonToggle,
  IonLabel,
  IonItem,
} from "@ionic/react";
import SignIn from "../components/SignIn";
import { UserContext, initialUser } from "../State";
import SignUp from "../components/SignUp";
import Profile from "../components/Profile";

const ProfilePage: React.FC = () => {
  var { state, dispatch } = useContext(UserContext);
  state = state || initialUser;
  // state.has_account = true;

  const pageToRender = state?.accessToken
    ? "profile"
    : state?.has_account
    ? "sign in"
    : "sign up";
  // const title =
  //   pageToRender == "profile"
  //     ? "My Profile"
  //     : pageToRender == "sign in"
  //     ? "Sign In"
  //     : "Sign Up";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        {pageToRender === "profile" ? <Profile /> : (
          <IonItem lines="full">
            <IonLabel>
              {pageToRender === "sign up" ? "Sign Up" : "Sign In"}
            </IonLabel>
            <IonToggle
              slot="start"
              onIonChange={(e) => {
                dispatch({
                  type: "set",
                  payload: { has_account: !state?.has_account },
                });
              }}
              checked={pageToRender === "sign up"}
            />
          </IonItem>
        )}
        {pageToRender === "profile" ? null : pageToRender === "sign in" ? (
          <SignIn />
        ) : (
          <SignUp />
        )}
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
