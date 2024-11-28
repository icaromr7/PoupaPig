import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

// Estilos e temas
import {
  Container,
  HiddenInput,
  ImageInputContainer,
  ImagePreview,
} from "./style";
import theme from "../../styles/theme";

type ImageUploaderProps = {
  register: UseFormRegisterReturn; // Para integrar com React Hook Form
};

const ImageUploader: React.FC<ImageUploaderProps> = ({ register }) => {
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
        onChange={(e) => {
          handleImageChange(e); // Atualiza a pré-visualização
          register.onChange(e); // Integra ao React Hook Form
        }}
        ref={register.ref} // Integra ao React Hook Form
        name={register.name} // Integra ao React Hook Form
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
              cursor: "pointer",
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
