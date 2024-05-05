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

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/" element={<MainPage />}>
            <Route path="/card/:id" element={<CardPage />} />
            <Route path="/exit" element={<ExitPage authUser={setAuth} />} />
          </Route>
        </Route>

        <Route path="/login" element={<LoginPage authUser={setAuth} />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
