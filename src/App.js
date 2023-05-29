import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import NavBar from "./components/common/NavBar";
import MyJourney from "./pages/MyJourney";
import Diary from "./pages/Diary";
import DiaryWrite from "./components/views/Diary/DiaryWrite";
import DiaryDetail from "./components/views/Diary/DiaryDetail";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/diary" element={<Diary />} />
          <Route path="/diary/:id" element={<DiaryDetail />} />
          <Route path="/diary/write/:date" element={<DiaryWrite />} />
          <Route path="/my_journey" element={<MyJourney />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
