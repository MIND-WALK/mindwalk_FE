import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
