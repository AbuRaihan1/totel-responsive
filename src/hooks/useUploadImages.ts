import { useState } from "react";
import { ImageData } from "typings";

export function useUploadImages(){
    const [selectedImages, setSelectedImages] = useState<ImageData[]>([]);
  const handleSelectedImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles);
      const newImages = filesArray.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setSelectedImages((prevSelectedImages) => [
        ...prevSelectedImages,
        ...newImages,
      ]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.filter((_, i) => i !== index)
    );
  };

    return { selectedImages, handleSelectedImage, handleRemoveImage };
}