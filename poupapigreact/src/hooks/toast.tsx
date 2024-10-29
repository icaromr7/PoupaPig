import React, {
  ReactNode,
  createContext,
  useContext,
  useCallback,
  useState,
} from "react";
import { v4 } from "uuid";
import ToastContainer from "../components/ErrorToasContainer";

export interface ToastMessage {
  id: string;
  type?: "success" | "error" | "info" | "chat";
  title: string;
  description?: string;
  click?: () => void;
}

export interface ToastContextData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback<ToastContextData["addToast"]>(
    ({ title, type, description, click }) => {
      const id = v4();

      const toast = {
        id,
        type,
        title,
        description,
        click,
      };

      setMessages((oldMessages) => [...oldMessages, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((oldMessages) =>
      oldMessages.filter((message) => message.id !== id)
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within an ToastProvider");
  }

  return context;
}

export { ToastProvider, useToast };
