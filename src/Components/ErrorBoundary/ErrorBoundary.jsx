// src/Components/ErrorBoundary/ErrorBoundary.jsx
import React from 'react';

function ErrorBoundary({ error }) {
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorBoundary;
