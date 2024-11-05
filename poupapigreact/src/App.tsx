import React from "react";
import { Header } from "./components/Header";
import "./styles/index.css";
import { Footer } from "./components/Footer";
import AppRoutes from "./routes/AppRouters";
import { HeaderProvider } from "./context/HeaderContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    // <div className="App">
    //   <Header type="default" />
    //   <Footer />
    // </div>
    <AuthProvider>
      <HeaderProvider>
        <AppRoutes />
      </HeaderProvider>
    </AuthProvider>
  );
}

export default App;
