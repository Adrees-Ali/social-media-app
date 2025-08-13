import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot_password from './pages/Forgot_password'

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />  
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />  
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} /> 
      </Routes>
      <Routes>
        <Route path="/forgot-password" element={< Forgot_password/>} />  
      </Routes>
    </Router>
    </>
  );
}

export default App;
