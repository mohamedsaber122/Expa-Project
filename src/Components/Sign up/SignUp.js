import React from 'react';
import { Button } from 'react-bootstrap';
import NavBar from '../Landing Page/NavBar';
import './SignUp.css'


const SignUp = () => {
    return(
        <div>
            <NavBar />
            <div className='signup-main'>
            <div className='signup-container'>
                <h2>Sign Up</h2>
                <p>Sign up for our organization</p>
                <input type='text'  placeholder='Email'/>
                <input type='password'  placeholder='Password'/>
                <input type='text' placeholder='Phone number' />
                <input type='text' placeholder='Country' />
               <div style={{width: '25%',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                 <input style={{width : '7%', height: '100%' }} type='checkbox' /> 
                <small>By clicking you agree to terms and conditions</small>
               </div>
                <Button>Signup !</Button>
            </div>
            </div>
        </div>
    )
}

export default SignUp;