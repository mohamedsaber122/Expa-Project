import React from 'react';
import { Button } from 'react-bootstrap';
import NavBar from '../Landing Page/NavBar';
import './SignIn.css'


const SignIn = () => {
    return(
        <div>
            <NavBar />
            <div className='signup-main'>
            <div className='signup-container'>
                <h2>Sign In</h2>
                <p>Sign in for our organization</p>
                <input type='text'  placeholder='Email'/>
                <input type='password'  placeholder='Password'/>
                
                <Button>Sign in !</Button>
            </div>
            </div>
        </div>
    )
}

export default SignIn;