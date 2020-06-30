import React, { PropsWithChildren } from "react";
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/react";
import { Product } from "../contexts/Store";

interface ContainerProps {
    product: Product;
}

const ProductItem: React.FC<ContainerProps> = (props) => {

  return (
    <IonItem>
      <IonThumbnail slot="start">
        <IonImg src={props.product.image} />
      </IonThumbnail>
      <IonLabel>
        <h2>{props.product.name}</h2>
        <h3>Price: {props.product.price}</h3>
      </IonLabel>
      {props.children}
    </IonItem>
  );
};

export default ProductItem;
