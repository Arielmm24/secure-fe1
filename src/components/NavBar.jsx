import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/background.css'
import logo from '../img/logo.webp'

export default function NavBar(){

    const navigate = useNavigate(); // Initialize useNavigate
    const goToHomePage = () => {
      navigate('/'); 
    };

    return(
        <div className='div'>
          <img src={logo} width={100} height={'auto'} alt='logo' onClick={goToHomePage} />
        </div>
    )
}