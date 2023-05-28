import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyles from "./styles/ResetStyles";
import MyJourney from "./pages/MyJourney";
import NavBar from "./components/common/NavBar";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/my_journey" element={<MyJourney />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
