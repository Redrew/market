import { useState } from "react";
import { useCamera } from "@ionic/react-hooks/camera";
import { CameraResultType, CameraSource } from "@capacitor/core";

export interface Photo {
  filepath: string;
  webviewPath?: string;
  base64?: string;
}

const usePhoto = () => {
  const { getPhoto } = useCamera();
  const [photo, setPhoto] = useState<Photo>({ filepath: "" });
  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const filename = new Date().getTime() + ".jpeg";
    const newPhoto = { filepath: filename, webviewPath: cameraPhoto.webPath };
    setPhoto(newPhoto);
  };

  return {
    takePhoto,
    photo,
  };
};
export default usePhoto;
