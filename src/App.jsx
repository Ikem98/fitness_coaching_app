// src/App.jsx
import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/Login',
    element: <Login />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/Dashboard',
    element: <Dashboard />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/Signup',
    element: <Signup />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
    errorElement: <ErrorBoundary />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
