import { useState } from "react";

export const useConvertToBase64 = () => {
  const [photoBase64, setPhotoBase64] = useState("");

  const convertToBase64 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPhotoBase64(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return { convertToBase64, photoBase64 };
};
