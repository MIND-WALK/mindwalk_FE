import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import MyPage from "./pages/MyPage";
import Faq from "./pages/MyPage/Faq";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/my_page" element={<MyPage />} />
          <Route path="/my_page/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
