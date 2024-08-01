import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import userData from '../../csv/userData.csv';
import parseCSV from '../../utils/dataParser';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    parseCSV(userData, (data) => {
      setUsers(data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      if (typeof onLogin === 'function') {
        onLogin(user);
        navigate(`/${user.role}/dashboard`);
      } else {
        console.error('onLogin is not a function:', onLogin);
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        <div className="formDiv flex">
          <div className="headerDiv">
            <h3>Login</h3>
          </div>
          <form className='form grid' onSubmit={handleSubmit}>
            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className="input flex">
                <MdMarkEmailRead className='icon'/>
                <input 
                  type="email" 
                  id='email' 
                  placeholder='Enter Your Email' 
                  value={email} 
                  onChange={(event) => setEmail(event.target.value)}
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
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type='submit' className='btn flex'>
              <span>Login</span> 
            </button>
            <div className='forgotPassword'>
              Forgot Your Password?<br/>
              <Link to='/forgot-password'>Click Here</Link>
            </div>
          </form>
          <div className='footerDiv'>
            <span>Don't have an account?</span>
            <Link to='/Signup'>
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
