import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';  // Corrected path based on your directory structure
import { FaUserShield } from 'react-icons/fa';
// import { MdMarkEmailRead } from 'react-icons/md';
import { BsFillShieldLockFill } from 'react-icons/bs';

const Signup = () => {
  return (
    <div className='signupPage flex'>
      <div className='container flex'>
        <div className="formDiv flex">
          <div className="headerDiv">
            <h3>Create An Account</h3>
          </div>
          <form action="" className='form grid'>
          <span className='showMessage'>Registration Status will go here</span>
            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
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
              Register
            </button>
            
          </form>
          <div className='footerDiv'>
           
            <span>Already have an account?</span>
            <Link to={'/Login'}>
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
