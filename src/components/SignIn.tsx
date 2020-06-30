import React, { useContext } from "react";
import { UserContext } from "../State";
import { Formik, Form } from "formik";
import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonListHeader,
} from "@ionic/react";
import TextField, { EnableSubmit } from "../utils/helper.form";
import { signIn } from "../api/user";

const SignIn: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <Formik
      onSubmit={(data) => {
        signIn(data).then((res) => {
          dispatch({type: "set", payload: res})
        });
      }}
      initialValues={{ username: "", password: "" }}
    >
      <Form>
        <IonList>
          <IonItem>
            <IonLabel>Username</IonLabel>
            <TextField name="username" type="username" />
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <TextField name="password" type="password" />
          </IonItem>
          <IonListHeader>
            <IonButton type="submit">Sign In</IonButton>
          </IonListHeader>
        </IonList>
        <EnableSubmit />
      </Form>
    </Formik>
  );
};

export default SignIn;
