import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './workouts.css';

const Workout = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const workoutData = {
      workoutName,
      description,
      duration,
      difficulty
    };

    axios.post('http://localhost:3002/createWorkout', workoutData)
      .then(response => {
        setMessage('Workout created successfully!');
        // Clear the form
        setWorkoutName('');
        setDescription('');
        setDuration('');
        setDifficulty('');
      })
      .catch(error => {
        console.error('Error creating workout:', error);
        setMessage(`Error creating workout: ${error.response?.data?.error || error.message}`);
      });
  };

  const handleClear = () => {
    // Clears the form fields
    setWorkoutName('');
    setDescription('');
    setDuration('');
    setDifficulty('');
    setMessage('Form cleared');
  };

  const handleCancel = () => {
    // Goes back to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="workoutContainer">
      <h1>Create Workout</h1>
      <form className="workoutForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="workoutName">Workout Name</label>
          <input
            type="text"
            id="workoutName"
            placeholder="Enter workout name"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Enter workout description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="formGroup">
          <label htmlFor="duration">Duration (Minutes)</label>
          <input
            type="text"
            id="duration"
            placeholder="Enter duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label>Difficulty Level</label>
          <div className="difficultyButtons">
            <button
              type="button"
              onClick={() => setDifficulty('Beginner')}
              className={difficulty === 'Beginner' ? 'selected' : ''}
            >
              Beginner
            </button>
            <button
              type="button"
              onClick={() => setDifficulty('Intermediate')}
              className={difficulty === 'Intermediate' ? 'selected' : ''}
            >
              Intermediate
            </button>
            <button
              type="button"
              onClick={() => setDifficulty('Advanced')}
              className={difficulty === 'Advanced' ? 'selected' : ''}
            >
              Advanced
            </button>
          </div>
        </div>
        <div className="buttonGroup">
          <button type="button" className="cancelButton" onClick={handleCancel}>Cancel</button>
          <button type="button" className="clearButton" onClick={handleClear}>Clear</button>
          <button type="submit" className="createButton">Create Workout</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Workout;
