import './App.css';
import Navbar from './Components/Navbar';
import NavbarPrivate from './Components/NavbarPrivate';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot_password from './pages/Forgot_password'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Friends from './pages/Friends';
import Messages from './pages/Messages';
import Create_Post from './pages/Create_Post';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("false")


  return (
    <>
      <Router>
        
      {isLoggedIn ? (
        <NavbarPrivate setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Navbar/>
      )}
      <Routes>
        <Route path="/home" element={<Home />} />  
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />  
        <Route path="/register" element={<Register />} /> 
        <Route path="/forgot-password" element={<Forgot_password/>} /> 

            {/* after login routes*/}
        <Route path="/dashboard" element={<Dashboard />} /> 
         <Route path="/friends" element={<Friends />} /> 
         <Route path="/messages" element={<Messages/>} /> 
         <Route path="/profile" element={<Profile />} /> 
         <Route path="/create_post" element={<Create_Post />} /> 
         <Route path="/settings" element={<Settings />} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
