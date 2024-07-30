import React from 'react';
import './top.css';
import { BiSearchAlt } from 'react-icons/bi';
// import img from '../../../Assets/coach.png';  // Adjust the path as needed

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection">
        <div className="title">
          <h1>Welcome to Your Fitness Dashboard.</h1>
          <p>Hello Samuel, ready for another productive day?</p>
        </div>
        <div className="searchBar">
          <input type="text" placeholder='Search Dashboard'/>
          <BiSearchAlt />
        </div>
        {/* <img src={img} alt="Coach" /> */}
      </div>
    </div>
  );
}

export default Top;
