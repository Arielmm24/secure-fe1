import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { succesToaster, infoToaster} from '../utils/globalStyle.js'
import { createUser } from '../utils/userCrud'
import '../css/LoginPage.css';
import '../css/background.css';

export default function Register() {

    const navigate = useNavigate()
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')

    const handleRegister = async ()=>{
        try {
            console.log('props : ' , userName, ' ' ,password,' ' , email, ' ', phone)
            const response = await createUser(userName,password,email,phone)
            if(response){
                console.log('New User Created , name:',userName)
                succesToaster(`New User Created as ${userName}`)
                navigate('/')
                return(
                    <Snackbar
                        open={true}
                        autoHideDuration={6000}
                        onClose={false}
                        message="Note archived"
                        action={''}
/>
                )
            } else {
                infoToaster('Cannot Create New User')
            }
        } catch (error){
            console.log('error', error)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <div className='background'>
        <div>
                <h2> Register </h2>
        <div className='textDiv'>
        <form onSubmit={handleSubmit}>
            <br></br>
                <div>
                    <label className='lable'>UserName</label><br></br><br></br>
                    <input type="text" placeholder='Enter User Name ' className='form-control'
                    onChange={ e => setUserName(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label htmlFor="password">Password</label><br></br><br></br>
                    <input type="password" placeholder='Enter Password ' className='form-control'
                    onChange={ e => setPassword(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label htmlFor="email">Email</label><br></br><br></br>
                    <input type="email" placeholder='Enter Email ' className='form-control'
                    onChange={ e => setEmail(e.target.value)}/>
                </div>
                <br></br>
                <div>
                    <label htmlFor="Phone">Phone Number</label><br></br><br></br>
                    <input type="phone" placeholder='Enter Phone Number ' className='form-control' 
                    onChange={ e => setPhone(e.target.value)}/>
                </div>
                <br></br><br></br>
                <button type="button" className="button" onClick={handleRegister}><b>Register</b></button>
            </form>
        </div>
    </div></div>
  )
}