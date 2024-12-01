import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const userCode = localStorage.getItem("userCode"); // Verifica se há userCode no localStorage

  if (!userCode) {
    // Se não tiver o userCode, redireciona para a página de login
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
