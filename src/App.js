import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
