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
import { signUp, signIn } from "../api/user";

const SignUp: React.FC = () => {
  var { state, dispatch } = useContext(UserContext);

  return (
    <Formik
      onSubmit={(data) => {
        signUp(data).then((res) => {
          console.log("signed up")
        });
      }}
      initialValues={{ email: "", username: "", password: "" }}
    >
      <Form>
        <IonList>
          <IonItem>
            <IonLabel>Email</IonLabel>
            <TextField name="email" type="email" />
          </IonItem>
          <IonItem>
            <IonLabel>Username</IonLabel>
            <TextField name="username" />
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <TextField name="password" type="password" />
          </IonItem>
          <IonListHeader>
            <IonButton type="submit">Sign Up</IonButton>
          </IonListHeader>
        </IonList>
        <EnableSubmit />
      </Form>
    </Formik>
  );
};

export default SignUp;
