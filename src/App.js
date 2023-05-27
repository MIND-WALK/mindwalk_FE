import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/my_page" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
