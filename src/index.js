import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import MyErrorBoundary from './MyErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyErrorBoundary>
        <App />
    </MyErrorBoundary>
  </React.StrictMode>
);
