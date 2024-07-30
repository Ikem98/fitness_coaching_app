import React from 'react';
import Sidebar from './Components/SideBar Section/Sidebar'; 
import Body from './Components/Body Section/Body'; 

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Body />
    </div>
  );
}

export default Dashboard;
// This is the main component that renders the entire dashboard layout, includes the sidebar and the main body content.