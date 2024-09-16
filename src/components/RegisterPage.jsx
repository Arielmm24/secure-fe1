import * as React from 'react';
import '../css/LoginPage.css';
import '../css/background.css';

export default function Register() {
  return (
    <div className='background'>
                <h1> Register </h1>
        <div className='textDiv'>
            <form action="">
            <br></br>
                <div>
                    <label className='lable'>UserName</label><br></br><br></br>
                    <input type="text" placeholder='Enter User Name ' className='form-control' />
                </div>
                <br></br>
                <div>
                    <label htmlFor="password">Password</label><br></br><br></br>
                    <input type="password" placeholder='Enter Password ' className='form-control' />
                </div>
                <br></br>
                <div>
                    <label htmlFor="email">Email</label><br></br><br></br>
                    <input type="email" placeholder='Enter Email ' className='form-control' />
                </div>
                <br></br>
                <div>
                    <label htmlFor="Phone">Password</label><br></br><br></br>
                    <input type="phone" placeholder='Enter Phone Number ' className='form-control' />
                </div>
                <br></br><br></br>
                <button type="button" className="button"><b>Login</b></button>
            </form>
        </div>
    </div>
  )
}