import "./App.css";

import { GlobalStyle } from "./Global.styled";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CardPage from "./pages/CardPage";
import PrivateRoute from "./PrivateRoute";
import { useState } from "react";
import { AppRoutes } from "./AppRoutes ";

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={AppRoutes.Main} element={<MainPage />}>
            <Route path={`${AppRoutes.Card}/:id`} element={<CardPage />} />
            <Route path={AppRoutes.Exit} element={<ExitPage authUser={setAuth} />} />
          </Route>
        </Route>

        <Route path={AppRoutes.Login} element={<LoginPage authUser={setAuth} />} />
        <Route path={AppRoutes.Register} element={<RegistrationPage />} />
        <Route path={AppRoutes.NotFound} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
