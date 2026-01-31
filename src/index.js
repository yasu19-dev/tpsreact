import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the '/client' here
import App from './App';
import './styles/index.scss';

// 1. Get the DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Render the App inside it
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);