import React from 'react';
import './listing.css';
// import workoutImg from '../../../Assets/workout1.png';  // Adjust the path as needed

const Listing = () => {
  return (
    <div className='listingSection'>
      <h1>Current Workout Programs</h1>
      <div className="items">
        <div className="item">
          {/* <img src={workoutImg} alt="Workout Program" /> */}
          <p>High Intensity Strength Training</p>
        </div>
      </div>
    </div>
  );
}

export default Listing;
