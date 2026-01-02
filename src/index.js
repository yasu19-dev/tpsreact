import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const store = legacy_createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);