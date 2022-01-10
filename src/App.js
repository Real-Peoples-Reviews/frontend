import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/Private.js";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/HomePages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Team from "../src/components/pages/Team";
import Logout from "./components/pages/Logout";
import Features from "./components/pages/HomePages/Features";
import AboutUs from "./components/pages/HomePages/AboutUs";
// import Landing from "../src/components/pages/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="features" element={<Features />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="howitworks" element={<AboutUs />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/team" element={<Team />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
