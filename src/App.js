import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage'; 
import RegisterPage from './components/RegisterPage'; 
import AboutPage from './components/AboutPage';
import NavBar from './components/NavBar'
import CustomersList from './components/CustomersList'
import AddNewClient from './components/AddNewClient'
import ResetPassword from './components/ResetPassword'



function App() {
  return (
    <>
      {
      localStorage.setItem('user', '')}
      {
      localStorage.setItem('log', 'false')}
      
        <Router>
        <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/list" element={<CustomersList />} />
            <Route path="/add-client" element={<AddNewClient />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </Router>
        
        </>

      );
    };
    
export default App;