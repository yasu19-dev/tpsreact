import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the '/client' here
import App from './App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';


// 1. Get the DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: rootReducer,
  devTools: true, // Enable Redux DevTools
});

// 2. Render the App inside it
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);