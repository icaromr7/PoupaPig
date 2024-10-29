/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from "react";

import { FiXCircle } from "react-icons/fi";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { ToastMessage, useToast } from "../../../hooks/toast";
import { Container, ChatButton } from "./style";

interface ToastProps {
  message: ToastMessage;
  style: any;
}

const Toast: React.FC<ToastProps> = ({ message, style }: ToastProps) => {
  const { removeToast } = useToast();

  let propsAddiDiv = {};
  if (message.click) {
    propsAddiDiv = {
      onClick: message.click,
      style: { cursor: "click" },
      role: "button",
      tabIndex: 0,
      onKeyUp: (event: any) => {
        if (event.code === "Enter" && message.click) {
          message.click();
        }
      },
    };
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} style={style}>
      <div {...propsAddiDiv}>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={20} />
      </button>

      {message.type === "chat" && (
        <ChatButton {...propsAddiDiv}>
          <BiMessageRoundedAdd size={18} />
        </ChatButton>
      )}
    </Container>
  );
};

export default Toast;
