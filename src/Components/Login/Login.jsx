import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../App.css';  // Corrected path based on your directory structure
// import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';

const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        <div className="formDiv flex">
          <div className="headerDiv">
            <h3>Login as a Coach</h3>
          </div>
          <form action="" className='form grid'>
            <span className='showMessage'>Login Status will go here</span>
            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className="input flex">
                <MdMarkEmailRead className='icon'/>
                <input type="email" id='email' placeholder='Enter Your Email'/>
              </div>
            </div>
            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Enter Your Password'/>
              </div>
            </div>
            <button type='submit' className='btn flex'>
             <span>Login</span> 
            </button>
            <a href='/dashboard'> Dashboard</a>
            <div className='forgotPassword'>
              Forgot Your Password?<br/>
              <Link to='/forgot-password'>Click Here</Link>
            </div>
          </form>
          <div className='footerDiv'>
            <span>Don't have an account?</span>
            <Link to={'/Signup'}>
              <button className='btn'>Sign Up</button>
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

export default Login;
