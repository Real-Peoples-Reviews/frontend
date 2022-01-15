import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/Private.js";
import Home from "./components/pages/HomePages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Team from "../src/components/pages/Team";
import Logout from "./components/pages/Logout";
import Features from "./components/pages/HomePages/Features";
import AboutUs from "./components/pages/HomePages/AboutUs";
import Landing from "../src/components/pages/Landing";
import HowItWorks from "./components/pages/HomePages/HowItWorks";
import PrivacyPolicy from "./components/pages/HomePages/Privacy.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/features" element={<Features />} />
        <Route path="/team" element={<Team />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
