import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage'; 
import RegisterPage from './components/RegisterPage'; 
import AboutPage from './components/AboutPage';
import NavBar from './components/NavBar'



function App() {
  return (
    <>

        <Router>
        <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
        
        </>

      );
    };
    
export default App;