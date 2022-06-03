import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode: do not render with bugs
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// report web vitals
reportWebVitals(); // pass console.log to use
