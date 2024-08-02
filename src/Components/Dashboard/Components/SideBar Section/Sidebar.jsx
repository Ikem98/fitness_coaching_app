import React, { useState } from 'react';
import './sidebar.css';
import { BiRun, BiMessageSquareDetail, BiCalendarEvent, BiLineChart, BiCog, BiDollarCircle, BiHelpCircle, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { LuLogOut } from 'react-icons/lu';

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  }

  return (
    <div className={`sideBar ${isMinimized ? 'minimized' : ''}`}>
      <div className="toggleButton" onClick={toggleSidebar}>
        {isMinimized ? <BiChevronRight /> : <BiChevronLeft />}
      </div>
      <div className="logoDiv flex">
        {/* <img src={logo} alt="Image Name" /> */}
        <h2>Coach Samuel</h2>
      </div>
      <div className="menuDiv">
        <h3>QUICK MENU</h3>
        <ul>
          <li className="listItem"><a href="#" className='menuLink flex'><BiCalendarEvent className="icon"/><span className="smallText">Clients</span></a></li>
          <li className="listItem"><a href="#" className='menuLink flex'><BiRun className="icon"/><span className="smallText">Programs</span></a></li>
          <li className="listItem"><a href="#" className='menuLink flex'><BiRun className="icon"/><span className="smallText">Workouts</span></a></li>
          <li className="listItem"><a href="#" className='menuLink flex'><BiLineChart className="icon"/><span className="smallText">Reports</span></a></li>
          <li className="listItem"><a href="#" className='menuLink flex'><BiMessageSquareDetail className="icon"/><span className="smallText">Messaging</span></a></li>
          <li className="listItem"><a href="#" className='menuLink flex'><BiCog className="icon"/><span className="smallText">Settings</span></a></li>
          <li className="listItem"><a href="#" className='menuLink flex'><BiDollarCircle className="icon"/><span className="smallText">Billing</span></a></li>
          <li className="listItem"><a href="#" className='menuLink flex'><BiHelpCircle className="icon"/><span className="smallText">Help Center</span></a></li>
          <li className="listItem"><Link to='/Login' href="#" className='menuLink flex'><LuLogOut className="icon"/><span className="smallText">Sign out</span></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
