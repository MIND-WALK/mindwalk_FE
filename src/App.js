import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import NavBar from "./components/common/NavBar";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <BrowserRouter>
        <NavBar />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
