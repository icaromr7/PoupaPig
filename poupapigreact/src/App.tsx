import React from "react";
import { Header } from "./components/Header";
import "./styles/index.css";
import { Footer } from "./components/Footer";
import AppRoutes from "./routes/AppRouters";

function App() {
  return (
    // <div className="App">
    //   <Header type="default" />
    //   <Footer />
    // </div>
    <AppRoutes />
  );
}

export default App;
