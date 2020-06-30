import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
import usePhoto from '../hooks/usePhoto'

const TakePhoto = () => {
    const {takePhoto} = usePhoto();
    return (
        <IonFab slot="fixed" horizontal="center" vertical="bottom">
            <IonFabButton onClick={takePhoto}>
                <IonIcon icon={camera} />
            </IonFabButton>
        </IonFab>
    )
}
export default TakePhoto;