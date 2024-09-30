import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from '@mui/material/Button';
import '../css/background.css'
import logo from '../img/logo.webp'

export default function NavBar(){

    const navigate = useNavigate(); // Initialize useNavigate
    const goToHomePage = () => {
      navigate('/'); 
    };
    
    const handleLogout = ()=>{
      localStorage.setItem('log', 'false')
      localStorage.setItem('user', '')
      navigate('/')
    }
    const handleResetPassword = ()=>{
      // localStorage.setItem('log', 'false')
      // localStorage.setItem('user', '')
      navigate('/reset-password')
    }

    const name = localStorage.getItem('user')

    return(
        <div className='div'>
          <img src={logo} width={100} height={'auto'} alt='logo' onClick={goToHomePage} />
          <h1 className='h1'> Ariel's Secures</h1>
          { (name === '') ? (
            <div></div>
          )
           : (
            <div>
                   <h3> Welcome {name}</h3>
                  <Button onClick={handleResetPassword}>Reset Password</Button>
                  <Button onClick={handleLogout}>LogOut</Button>
            </div>
           )}
        </div>
    )
}