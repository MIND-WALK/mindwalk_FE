import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import MyJourney from "./pages/MyJourney";
import NavBar from "./components/common/NavBar";
import CompletedJourney from "./pages/CompletedJourney";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/my_journey" element={<MyJourney />} />
          <Route path="/my_journey/completed" element={<CompletedJourney />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
