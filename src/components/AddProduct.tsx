import React from "react";
import { Formik, FormikProps, Form } from "formik";
import {
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonButton,
} from "@ionic/react";
import { addProduct } from "../api/shop";
import TakePhoto from "./TakePhoto";
import TextField, { EnableSubmit } from "../utils/helper.form";

const AddProduct: React.FC = () => {
  return (
    <Formik
      initialValues={{
        name: "Apple",
        image:
          "https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/7v/2w/p07v2wjn.jpg",
        price: 3,
      }}
      onSubmit={(data) => {
        addProduct(data).then((res) => {
          if (res == 200) window.location.reload(false);
        });
      }}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <IonList>
            <IonListHeader>
              <h2>Add Items</h2>
            </IonListHeader>
            <IonItem lines="inset">
              <IonLabel>Name</IonLabel>
              <TextField name="name" />
            </IonItem>
            <IonItem lines="inset">
              <IonLabel>Picture</IonLabel>
              <TextField name="image" />
            </IonItem>
            <IonItem lines="inset">
              <IonLabel>Price</IonLabel>
              <TextField name="price" type="number"/>
            </IonItem>
            <IonListHeader>
              <IonButton type="submit">Add</IonButton>
            </IonListHeader>
          </IonList>
          <EnableSubmit />
        </Form>
      )}
    </Formik>
  );
};

export default AddProduct;
