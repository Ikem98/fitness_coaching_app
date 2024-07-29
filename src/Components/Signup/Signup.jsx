// src/Components/Signup/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div>
      This is Registration page
      <br/>
      <Link to="/Login">To Login</Link>
      <br/>
      <button>To Register</button>
    </div>
  );
}

export default Signup;
