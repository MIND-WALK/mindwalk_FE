import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import NavBar from "./components/common/NavBar";
import MyJourney from "./pages/MyJourney";
import Diary from "./pages/Diary";
import DiaryWrite from "./components/views/Diary/DiaryWrite";
import DiaryDetail from "./components/views/Diary/DiaryDetail";
import CompletedJourney from "./pages/CompletedJourney";
import MyPage from "./pages/MyPage";
import Faq from "./pages/MyPage/Faq";
import Ask from "./pages/MyPage/Ask";
import Login from "./pages/Login";
import Analysis from "./pages/Analysis";
import TabBar from "./components/common/TabBar/index";
import Challenge from "./pages/Challenge";
import ChallengeSelected from "./pages/Challenge/ChallengeSelected";
import Main from "./pages/Main";
import MeasureCompleted from "./pages/Analysis/MeasureCompleted";
import MeasureSelect from "./pages/Analysis/MeasureSelect";
// import Slide from "./components/views/Splash/Slide";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;

function AppContent() {
  const location = useLocation();
  const isMainPage = location.pathname === "/" || "/home";
  const isSplash = location.pathname === "/";

  return (
    <div className="App">
      <ResetStyles />
      {!isMainPage && <NavBar />}
      <Routes>
        {/* <Route path="/" element={<Slide />} /> */}
        <Route path="/home" element={<Main />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/diary/:id" element={<DiaryDetail />} />
        <Route path="/diary/write/:date" element={<DiaryWrite />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/measure" element={<MeasureSelect />} />
        <Route path="/measure/completed" element={<MeasureCompleted />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/challenge/selected" element={<ChallengeSelected />} />
        <Route path="/my_journey" element={<MyJourney />} />
        <Route path="/my_journey/completed" element={<CompletedJourney />} />
        <Route path="/my_page" element={<MyPage />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      {!isSplash && <TabBar />}
    </div>
  );
}
