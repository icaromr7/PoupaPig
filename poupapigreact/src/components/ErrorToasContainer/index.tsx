import React from "react";
import { useTransition } from "react-spring";
import Toast from "./ErrorToast";
import { ToastMessage } from "../../hooks/toast";
import { Container } from "./style";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    from: { right: "120%", opacity: 0 },
    enter: { right: "0%", opacity: 1 },
    leave: { right: "120%", opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransitions((props, item, key) => (
        <Toast message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
