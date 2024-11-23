import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import ErroToast from "../components/ErroToast";
import { Loading } from "../components/Loading";

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
  login: (code: number) => void;
  logout: () => void;
  addToast: (params: ToastInterface) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

// Criando o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provedor do contexto
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userCode, setUserCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Recuperar o código do usuário do localStorage ao inicializar
  useEffect(() => {
    const storedUserCode = localStorage.getItem("userCode");
    if (storedUserCode) {
      setUserCode(storedUserCode);
    }
  }, []);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const login = (code: number) => {
    const codeAsString = String(code);
    setUserCode(codeAsString);
    localStorage.setItem("userCode", codeAsString);
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
    console.log("oi", message);
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
          position: position || "top-right",
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
    <AuthContext.Provider
      value={{ userCode, login, logout, addToast, isLoading, setLoading }}
    >
      {children}
      {isLoading && <Loading />}
      <ToastContainer
        toastStyle={{ padding: "0px" }}
        style={{ width: "380px" }}
      />
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
