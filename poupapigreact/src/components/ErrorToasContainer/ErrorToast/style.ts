import styled, { css } from "styled-components";
import { animated } from "react-spring";

interface ContainerProps {
  type?: "success" | "error" | "info" | "chat";
}

const ToastTypeVariations = (type: ContainerProps["type"]) => {
  switch (type) {
    case "success":
      return css`
        background: #e6fffa;
        color: #2e656a;
      `;

    case "error":
      return css`
        background: #fddede;
        color: #c53030;
      `;

    case "chat":
    case "info":
    default:
      return css`
        background: #ebf8ff;
        color: #3172b7;
      `;
  }
};

export const ChatButton = styled.div`
  position: absolute;
  right: -2px;
  bottom: 0;

  &:hover {
    color: #ed145b;
  }
`;

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  margin: 10px;
  height: auto;
  max-height: 200px;
  overflow-y: auto;
  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${({ type }) => ToastTypeVariations(type)}

  > svg {
    margin: 4px 12px 0 0;
  }

  svg {
    height: 25px;
    width: 25px;
  }

  div {
    flex: 1;
    margin-top: 15px;
    margin: 5px;
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  @media screen and (max-width: 850px) {
    position: relative;
    width: 297px;
    padding: 0px 15px 8px 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    strong {
      margin-top: 10px;
      font-size: 1.3rem;
    }
  }

  div {
    p {
      margin-top: 10px;
      margin: 5px;
      font-size: 1.4rem;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    right: 3px;
    top: 3px;
  }

  > svg {
    margin: 2px 1px 5px 0;
  }
`;
