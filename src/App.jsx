import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const handleLogin = (user) => {
    console.log('User logged in:', user);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login onLogin={handleLogin} />,
      errorElement: <ErrorBoundary />
    },
    {
      path: '/login',
      element: <Login onLogin={handleLogin}/>,
      errorElement: <ErrorBoundary />
    },
    {
      path: '/dashboard/*', 
      element: <Dashboard />,
      errorElement: <ErrorBoundary />
    },
    {
      path: '/signup',
      element: <Signup />,
      errorElement: <ErrorBoundary />
    },
    {
      path: '*',
      element: <div>404 Not Found</div>,
      errorElement: <ErrorBoundary />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
