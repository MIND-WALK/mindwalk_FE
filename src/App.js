import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import Reward from "./pages/Reward";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <BrowserRouter>
        <Routes>
          {/*    <Route path="/" element={<Home />} /> */}
          <Route path="/reward" element={<Reward />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
