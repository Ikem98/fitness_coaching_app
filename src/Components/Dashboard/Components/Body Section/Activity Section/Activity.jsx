import React from 'react';
import './activity.css';
// import user1 from '../../../Assets/client1.png'; // Adjust the path as needed

const Activity = () => {
  return (
    <div className='activitySection'>
      <h1>Recent Client Activity</h1>
      <div className="activities">
        <div className="activity">
          {/* <img src={user1} alt="Client" /> */}
          <p>Client completed the daily workout.</p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
