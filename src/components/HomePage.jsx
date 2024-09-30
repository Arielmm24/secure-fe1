import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {useRef, useState} from 'react';
import CustomersList from './CustomersList';
import '../css/HomePage.css';
import '../css/background.css';

export default function BasicButtonGroup() {
  

  const navigate = useNavigate(); // Initialize useNavigate

  // const goToHomePage = () => {
  //   navigate('/'); 
  // };

  const goToLoginPage = () => {
    navigate('/login'); 
  };
  const goToRegisterPage = () => {
    navigate('/register'); 
  };
  const goToAboutPage = () => {
    navigate('/about'); 
  };

  // const goToListPage = () => {
  //   navigate('/list'); 
  // };          

  return ( 
  
    <div className="homepage">
      <div className="overlay"></div>
      <h1 > Ariel's Secures</h1><br></br><br></br>
    <p><ButtonGroup variant="text" size="large" aria-label="Large button group" color="black">
      <Button onClick={goToLoginPage}> Login </Button>
      <Button onClick={goToRegisterPage}> Register </Button>
      <Button onClick={goToAboutPage}> About </Button>
    </ButtonGroup>
    </p>
  <p><ButtonGroup variant="text" size="large" aria-label="Large button group" color="black">
      <Button onClick={goToLoginPage}> ~ </Button>
      <Button onClick={ <CustomersList name={''} ></CustomersList>}>Customers List</Button>
      <Button onClick={goToAboutPage}> ~ </Button>
      </ButtonGroup>  
  </p>
</div>
    
  );
}