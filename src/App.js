import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import MyJourney from "./pages/MyJourney";
import NavBar from "./components/common/NavBar";
import CompletedJourney from "./pages/CompletedJourney";
import MyPage from "./pages/MyPage";
import Faq from "./pages/MyPage/Faq";
import Ask from "./pages/MyPage/Ask";
import Analysis from "./pages/Analysis";
import TabBar from "./components/common/TabBar/index";
import Challenge from "./pages/Challenge";
import ChallengeSelected from "./pages/Challenge/ChallengeSelected";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/challenge/selected" element={<ChallengeSelected />} />
          <Route path="/my_journey" element={<MyJourney />} />
          <Route path="/my_journey/completed" element={<CompletedJourney />} />
          <Route path="/my_page" element={<MyPage />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <TabBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
