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
import ChallengeMap from "./pages/Challenge/ChallengeMap";
import Main from "./pages/Main";
import MeasureCompleted from "./pages/Analysis/MeasureCompleted";
import MeasureSelect from "./pages/Analysis/MeasureSelect";
import ChallengeCompleted from "./pages/Challenge/ChallengeCompleted";
import Splash from "./pages/Splash";

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
  const isMainPage =
    location.pathname === "/" || location.pathname === "/home" || location.pathname === "/login";
  const isTabBarPage = location.pathname === "/" || location.pathname === "/login";

  return (
    <div className="App">
      <ResetStyles />
      {!isMainPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Main />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/diary/:id/:date" element={<DiaryDetail />} />
        <Route path="/diary/write/:date" element={<DiaryWrite />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/measure" element={<MeasureSelect />} />
        <Route path="/measure/completed" element={<MeasureCompleted />} />
        {/* <Route path="/challenge" element={<Challenge />} /> */}
        <Route path="/challenge/completed" element={<ChallengeCompleted />} />
        <Route path="/my_journey" element={<MyJourney />} />
        <Route path="/my_journey/completed" element={<CompletedJourney />} />
        <Route path="/my_page" element={<MyPage />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/challenge/:emotion" element={<Challenge />} />
        <Route path="/challenge_map" element={<ChallengeMap />} />
      </Routes>
      {!isTabBarPage && <TabBar />}
    </div>
  );
}
