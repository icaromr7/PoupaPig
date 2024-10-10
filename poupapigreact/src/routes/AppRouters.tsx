import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MobileScreenProvider from "./MobileScreenProvider";
import RouteRender from "./RouteRender";
import ScrollToTop from "./ScrollToTop";

//pages
import { Landpage } from "../pages/Landpage";
import { Login } from "../pages/Login";
import { SignIn } from "../pages/SignIn";
import { Home } from "../pages/Home";
import { NewTransaction } from "../pages/NewTransaction";

const AppRoutes: React.FC = () => {
  return (
    <MobileScreenProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/landpage"
            element={
              <RouteRender
                Component={Landpage}
                screenProps={{ nameScreen: "landpage" }}
              />
            }
          />
          ;
          {/* <Route
            path="/404"
            element={
              <RouteRender
                // Component={Error}
                screenProps={{ nameScreen: "404" }}
              />
            }
          />
          ; */}
          <Route
            path="/"
            element={
              <RouteRender
                Component={Login}
                isPrivate
                screenProps={{ nameScreen: "" }}
              />
            }
          />
          ;
          <Route
            path="/login"
            element={
              <RouteRender
                Component={Login}
                isPrivate
                screenProps={{ nameScreen: "login" }}
              />
            }
          />
          ;
          <Route
            path="/sign-in"
            element={
              <RouteRender
                Component={SignIn}
                isPrivate
                screenProps={{ nameScreen: "sign-in" }}
              />
            }
          />
          ;
          <Route
            path="/home"
            element={
              <RouteRender
                Component={Home}
                isPrivate
                screenProps={{ nameScreen: "home" }}
              />
            }
          />
          ;
          <Route
            path="/new-transaction"
            element={
              <RouteRender
                Component={NewTransaction}
                isPrivate
                screenProps={{ nameScreen: "new-transaction" }}
              />
            }
          />
          ;
          {/* <Route
            path="/my-profile"
            element={
              <RouteRender
                // Component={MyProfile}
                isPrivate
                screenProps={{ nameScreen: "my-profile" }}
              />
            }
          />
          ; */}
          {/* <Route
            path="/account-config"
            element={
              <RouteRender
                // Component={AccountConfig}
                isPrivate
                screenProps={{ nameScreen: "account-config" }}
              />
            }
          /> */}
          {/* <Route
            path="/graphs"
            element={
              <RouteRender
                // Component={Graphs}
                isPrivate
                screenProps={{ nameScreen: "graphs" }}
              />
            }
          /> */}
        </Routes>
      </Router>
    </MobileScreenProvider>
  );
};

export default AppRoutes;
