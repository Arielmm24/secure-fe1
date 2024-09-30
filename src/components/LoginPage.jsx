import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import CustomersList from './CustomersList';
import { getUsers, getUser, createUser} from '../utils/userCrud.js'
import { succesToaster, infoToaster} from '../utils/globalStyle.js'
// import { errorToaster, infoToaster, succesToaster } from '../utils/globalStyle.js'
import 'react-toastify/dist/ReactToastify.css';
import '../css/LoginPage.css';
import '../css/background.css';

export default function ButtonUsage() {

    const data = useRef()
    const [userName, setUser] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [isLoggedIn, setIsLoggedIn] = useState('false');   // State to check login status


    const navigate = useNavigate();
 
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
  const goToMyPage = () => {
    navigate('/list'); 
  };

  // const goToListPage = () => {
  //   navigate('/list'); 
  // }; 
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleRegister = () => {
        navigate('/register');
    }

    
    const handleClick = async () =>{
        // console.log(data.current.value , 'is logged')
        const response = await getUser(userName);
        if (response === undefined){
            console.log( `User ${userName} is connected`)
            localStorage.setItem('user', userName)
            setIsLoggedIn(true);   // Update login status
            localStorage.setItem('log', 'true')
            succesToaster(userName)
            navigate('/');  // Redirect to homepage
        } else {
            console.log('not connected')
            infoToaster()
        }
    }

  return (
    <div className='background'>
        { (localStorage.getItem('log') !== 'true') ? (
            <div>
                <h2 > Login </h2>
            <div className='textDiv'>
            <form onSubmit={handleSubmit}>
                <br></br>
                <div>
                    <label className='lable'> UserName </label><br></br><br></br>
                    <input type="text" placeholder='Enter User Name ' className='form-control' ref={data} 
                    onChange={ e => setUser(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label htmlFor="password">Password</label><br></br><br></br>
                    <input type="password" placeholder='Enter Password ' className='form-control' 
                    onChange={ e => setPassword(e.target.value)}/>
                </div>
                <br></br><br></br>
                <button type="button" className="button" onClick={handleClick}><b>Login</b></button>
                <button type="button" className="button" onClick={handleRegister}><b>Register</b></button>
            </form>
            <ToastContainer />
        </div></div>
                    ) : (     
    <div>
        <ButtonGroup variant="text" size="large" aria-label="Large button group" color="black">
            <Button onClick={goToMyPage}>Customers List</Button>
            <Button onClick={goToAboutPage}> About </Button>
            </ButtonGroup>  
    </div>
                    )}
    </div>
    
  )
}