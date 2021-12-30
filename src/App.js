import React from "react";
import './App.css';
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/Private.js";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";


const StyledBody = styled.div``;

function App() { localStorage.setItem ("token", "1245644")
  return (

    <div className="App">
      <StyledBody className="App">
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route
						path='/dashboard'
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
        </Routes>
      </StyledBody>
    </div>
  );
}

export default App;
