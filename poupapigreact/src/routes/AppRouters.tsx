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
import { InvestmentGoalForm } from "../pages/InvestmentGoalForm";
import { InvestmentGoalDetail } from "../pages/InvestmentGoalDetail";
import { InvestmentGoalList } from "../pages/InvestmentGoalList";
import { InputOutputForm } from "../pages/InputOutputForm";
import { InputOutputDetail } from "../pages/InputOutpuDetail";
import { InputOutputList } from "../pages/InputOutputList";
import { CategoryList } from "../pages/CategoryList";
import { CategoryDetail } from "../pages/CategoryDetail";
import { CategoryForm } from "../pages/CategoryForm";

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
          <Route
            path="/investment-goal-form"
            element={
              <RouteRender
                Component={InvestmentGoalForm}
                isPrivate
                screenProps={{ nameScreen: "investment-goal-form" }}
              />
            }
          />
          ;
          <Route
            path="/investment-goal-detail"
            element={
              <RouteRender
                Component={InvestmentGoalDetail}
                isPrivate
                screenProps={{ nameScreen: "investment-goal-detail" }}
              />
            }
          />
          ;
          <Route
            path="/investment-goal-list"
            element={
              <RouteRender
                Component={InvestmentGoalList}
                isPrivate
                screenProps={{ nameScreen: "investment-goal-list" }}
              />
            }
          />
          ;
          <Route
            path="/input-output-form"
            element={
              <RouteRender
                Component={InputOutputForm}
                isPrivate
                screenProps={{ nameScreen: "input-output-form" }}
              />
            }
          />
          ;
          <Route
            path="/input-output-detail"
            element={
              <RouteRender
                Component={InputOutputDetail}
                isPrivate
                screenProps={{ nameScreen: "input-output-detail" }}
              />
            }
          />
          ;
          <Route
            path="/input-output-list"
            element={
              <RouteRender
                Component={InputOutputList}
                isPrivate
                screenProps={{ nameScreen: "input-output-list" }}
              />
            }
          />
          ;
          <Route
            path="/category-form"
            element={
              <RouteRender
                Component={CategoryForm}
                isPrivate
                screenProps={{ nameScreen: "category-form" }}
              />
            }
          />
          ;
          <Route
            path="/category-detail"
            element={
              <RouteRender
                Component={CategoryDetail}
                isPrivate
                screenProps={{ nameScreen: "category-detail" }}
              />
            }
          />
          ;
          <Route
            path="/category-list"
            element={
              <RouteRender
                Component={CategoryList}
                isPrivate
                screenProps={{ nameScreen: "category-list" }}
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
