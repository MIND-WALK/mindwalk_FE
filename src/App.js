import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import MyJourney from "./pages/MyJourney";
import NavBar from "./components/common/NavBar";
import MyPage from "./pages/MyPage";
import Faq from "./pages/MyPage/Faq";
import Ask from "./pages/MyPage/Ask";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <>
                <NavBar />
                <Routes>
                  <Route path="/my_journey" element={<MyJourney />} />
                  <Route path="/my_page" element={<MyPage />} />
                  <Route path="/ask" element={<Ask />} />
                  <Route path="/faq" element={<Faq />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
