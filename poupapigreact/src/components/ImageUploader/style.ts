import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

export const ImageInputContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${theme.colors.blueE5F};
  border: 3px solid ${theme.colors.blue038};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  object-fit: cover;
`;

export const HiddenInput = styled.input`
  display: none;
`;
