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
import { Profile } from "../pages/Profile";
import { ConfigAccount } from "../pages/ConfigAccount";
import PrivateRoute from "./PrivateRoute";

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
              <PrivateRoute>
                <RouteRender
                  Component={Home}
                  isPrivate
                  screenProps={{ nameScreen: "home" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/new-transaction"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={NewTransaction}
                  isPrivate
                  screenProps={{ nameScreen: "new-transaction" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/investment-goal-form"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={InvestmentGoalForm}
                  isPrivate
                  screenProps={{ nameScreen: "investment-goal-form" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/investment-goal-detail"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={InvestmentGoalDetail}
                  isPrivate
                  screenProps={{ nameScreen: "investment-goal-detail" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/investment-goal-list"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={InvestmentGoalList}
                  isPrivate
                  screenProps={{ nameScreen: "investment-goal-list" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/input-output-form"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={InputOutputForm}
                  isPrivate
                  screenProps={{ nameScreen: "input-output-form" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/input-output-detail"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={InputOutputDetail}
                  isPrivate
                  screenProps={{ nameScreen: "input-output-detail" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/input-output-list"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={InputOutputList}
                  isPrivate
                  screenProps={{ nameScreen: "input-output-list" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/category-form"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={CategoryForm}
                  isPrivate
                  screenProps={{ nameScreen: "category-form" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/category-detail"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={CategoryDetail}
                  isPrivate
                  screenProps={{ nameScreen: "category-detail" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/category-list"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={CategoryList}
                  isPrivate
                  screenProps={{ nameScreen: "category-list" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={Profile}
                  isPrivate
                  screenProps={{ nameScreen: "profile" }}
                />
              </PrivateRoute>
            }
          />
          ;
          <Route
            path="/config-account"
            element={
              <PrivateRoute>
                <RouteRender
                  Component={ConfigAccount}
                  isPrivate
                  screenProps={{ nameScreen: "config-account" }}
                />
              </PrivateRoute>
            }
          />
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
