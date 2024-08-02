import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const createUser = () => {
    axios.post('http://localhost:3002/register', {
      Email: email,
      Password: password,
    }).then(() => {
      setMessage('Registration successful!');
      setIsSuccess(true);
    }).catch((error) => {
      console.error(error);
      setMessage('Error occurred during registration.');
      setIsSuccess(false);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage('Email and password cannot be blank.');
      setIsSuccess(false);
      return;
    }

    // Check for existing user via the backend
    axios.post('http://localhost:3002/checkUser', {
      Email: email,
    }).then((response) => {
      if (response.data.exists) {
        setMessage('An account already exists with that email, please sign in.');
        setIsSuccess(false);
      } else {
        createUser();
      }
    }).catch((error) => {
      console.error(error);
      setMessage('Error occurred while checking user.');
      setIsSuccess(false);
    });
  };

  return (
    <div className='signupPage flex'>
      <div className='container flex'>
        <div className="formDiv flex">
          <div className="headerDiv">
            <h3>Create An Account</h3>
          </div>
          <form className='form grid' onSubmit={handleSubmit}>
            <div className={`message ${message ? (isSuccess ? 'successMessage' : 'errorMessage') : ''} showMessage`}>
              {message}
            </div>
            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input 
                  type="email" 
                  id='email' 
                  placeholder='Enter Your Email' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input 
                  type="password" 
                  id='password' 
                  placeholder='Enter Your Password' 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button type='submit' className='btn flex'>
              Register
            </button>
          </form>
          <div className='footerDiv'>
            <span>Already have an account?</span>
            <Link to='/Login'>
              <button className='btn'>Sign In</button>
            </Link>
            <footer className="footer">
              <ul className="footer-links">
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
