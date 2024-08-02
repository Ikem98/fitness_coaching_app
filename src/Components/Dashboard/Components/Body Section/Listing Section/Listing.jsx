import React, { useState, useEffect } from 'react';
import './listing.css';
import axios from 'axios';

const Listing = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Fetches workouts 
    axios.get('http://localhost:3002/getWorkouts')
      .then(response => {
        console.log(response.data); // Logs the response  to your console
        setWorkouts(response.data);
      })
      .catch(error => {
        console.error('Error fetching workouts:', error);
      });
  }, []);

  return (
    <div className='listingSection'>
      <h1>Current Workout Programs</h1>
      <div className="items">
        {workouts.length === 0 ? (
          <p>No workouts available. Please create a workout to see it here.</p>
        ) : (
          workouts.map(workout => (
            <div className="item" key={workout.id}>
              <h2>{workout.name}</h2>
              <p>{workout.description}</p>
              <p><strong>Duration:</strong> {workout.duration} minutes</p>
              <p><strong>Difficulty:</strong> {workout.difficulty}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Listing;
