import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import Login from "./pages/Login/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResetStyles />
        <Routes>
          {/*    <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
