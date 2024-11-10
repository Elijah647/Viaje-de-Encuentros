
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BasicExample from "./components/Nav";
import Landing from "./components/Landing";
import Explore from "./components/Explore";
import About from "./components/About";
import CountryGallery from "./components/CountryGallery";

function App() {
  return (
    <Router>
      <BasicExample /> {/* Always render the navbar */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<><Landing /><Explore /><About /></>} />
          <Route path="/country/:country" element={<CountryGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;