import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/Private.js";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/HomePages/Home";
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Team from "../src/components/pages/Team";
import Logout from "./components/pages/Logout";
import Landing from "../src/components/pages/Landing";
import Features from "../src/components/pages/HomePages/Features";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/logout' element={<Logout />} />
        <Route path="/" element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/features' element={<Features/>} />
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
        />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;