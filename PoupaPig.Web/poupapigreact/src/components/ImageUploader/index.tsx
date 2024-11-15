import React, { useState } from "react";

//style, assets e icons
import {
  Container,
  Label,
  HiddenInput,
  ImageInputContainer,
  ImagePreview,
} from "./style";
import theme from "../../styles/theme";

const ImageUploader: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return (
    <Container>
      <HiddenInput
        type="file"
        accept="image/*"
        id="file-upload"
        onChange={handleImageChange}
      />
      <ImageInputContainer>
        {imagePreview ? (
          <ImagePreview src={imagePreview} alt="Foto de perfil" />
        ) : (
          <label
            htmlFor="file-upload"
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: theme.colors.blue038,
            }}
          >
            +
          </label>
        )}
      </ImageInputContainer>
    </Container>
  );
};

export default ImageUploader;
