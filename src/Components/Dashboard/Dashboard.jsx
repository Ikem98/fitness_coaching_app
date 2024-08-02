import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/SideBar Section/Sidebar'; 
import Body from './Components/Body Section/Body'; 
import Workout from './Components/Workouts/workouts';
import '../../App.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="workout" element={<Workout />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
