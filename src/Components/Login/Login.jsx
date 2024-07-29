// src/Components/Login/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div>
      This is the Login Page
      <br/>
      <Link to="/Signup">To Register</Link>
      <br/>
      <Link to="/Dashboard">To Dashboard</Link>
      <br/>
    </div>
  );
}

export default Login;
