import React, {useState} from 'react';

import {getUsers, getUser} from '../utils/userCrud.js'
import '../css/LoginPage.css';
import '../css/background.css';

export default function ButtonUsage() {

    const [userName, setUser] = useState(' ')
    const [password, setPassword] = useState(' ')

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleClick = async () =>{
        const user = await getUser(userName)
        console.log(user.userName)
    }



  return (
    <div className='background'>
        <h1> Login </h1>
        <div className='textDiv'>
            <form onSubmit={handleSubmit}>
                <br></br>
                <div>
                    <label className='lable'> UserName </label><br></br><br></br>
                    <input type="text" placeholder='Enter User Name ' className='form-control' 
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
            </form>
        </div>
    </div>
  )
}