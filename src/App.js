import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/Private.js";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import Register from './components/pages/Register';


function App() {
  return (
      <div className="App">
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard'element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
  );
}

export default App;
