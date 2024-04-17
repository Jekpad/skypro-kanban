// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopNewCard from "./components/Popups/PopNewCard";
import PopUser from "./components/Popups/PopUser";
import PopBrowse from "./components/Popups/PopBrowse";

function App() {
  return (
    <>
      <div className="wrapper">
        <PopUser />
        <PopNewCard />
        <PopBrowse />

        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
