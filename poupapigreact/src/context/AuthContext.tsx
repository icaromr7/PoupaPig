import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { toast, ToastContainer } from "react-toastify";
import ErroToast from "../components/ErroToast";

interface ToastInterface {
  title?: string;
  position?:
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  message: string;
  autoClose?: number;
  type?: "info" | "success" | "warning" | "error" | "default";
  closeOnClick?: boolean;
  onClose?: () => void;
}

// Definindo a estrutura do contexto
interface AuthContextType {
  userCode: string | null;
  login: (code: string) => void;
  logout: () => void;
  addToast: (params: ToastInterface) => void;
}

// Criando o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provedor do contexto
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userCode, setUserCode] = useState<string | null>(null);

  // Recuperar o código do usuário do localStorage ao inicializar
  useEffect(() => {
    const storedUserCode = localStorage.getItem("userCode");
    if (storedUserCode) {
      setUserCode(storedUserCode);
    }
  }, []);

  const login = (code: string) => {
    setUserCode(code);
    localStorage.setItem("userCode", code); // Armazenar o código no localStorage
  };

  const logout = () => {
    setUserCode(null);
    localStorage.removeItem("userCode"); // Remover o código do localStorage
  };

  const addToast = ({
    type,
    position,
    message,
    title,
    autoClose,
    onClose,
    closeOnClick,
  }: ToastInterface) => {
    if (message) {
      toast(
        <ErroToast
          title={title}
          message={message}
          closeToast={onClose}
          type={type}
        />,
        {
          type: type || "error",
          position: "top-right",
          autoClose: autoClose || 3000,
          closeOnClick: closeOnClick || true,
          icon: false,
          closeButton: <></>,
          bodyStyle: { padding: "0px" },
        }
      );
    }
  };

  return (
    <AuthContext.Provider value={{ userCode, login, logout, addToast }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
