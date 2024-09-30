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
    const [currentPassword, setCurrPassword] = useState(' ')
    const [newPassword, setNewPassword] = useState('');   


    const navigate = useNavigate();
 
    const goToHomePage = () => {
    navigate('/'); 
  };

    const handleSubmit = (event) => {
        event.preventDefault();
    }
   

    
    const handleClick = async () =>{
        // console.log(data.current.value , 'is logged')
        // const response = await getUser(userName);
        // if (response === undefined){
        //     console.log( `User ${userName} is connected`)
        //     localStorage.setItem('user', userName)
        //     localStorage.setItem('log', 'true')
        //     succesToaster(userName)
        //     navigate('/');  // Redirect to homepage
        // } else {
        //     console.log('not connected')
        //     infoToaster()
        // }
    }

  return (
    <div className='background'>
            <div>
                <h2 > Reset Password </h2>
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
                    <label htmlFor="password"> Current Password</label><br></br><br></br>
                    <input type="password" placeholder='Enter Previus Password ' className='form-control' 
                    onChange={ e => setCurrPassword(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label htmlFor="password">New Password</label><br></br><br></br>
                    <input type="password" placeholder='Enter New Password ' className='form-control' 
                    onChange={ e => setNewPassword(e.target.value)}/>
                </div>
                <br></br><br></br>
                <button type="button" className="button" onClick={handleClick}><b>Confirm</b></button>
            </form>
            <ToastContainer />
        </div></div>
    </div>
    
  )
}