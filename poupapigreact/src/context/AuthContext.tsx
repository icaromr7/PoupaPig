import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Definindo a estrutura do contexto
interface AuthContextType {
  userCode: string | null;
  login: (code: string) => void;
  logout: () => void;
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

  return (
    <AuthContext.Provider value={{ userCode, login, logout }}>
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
