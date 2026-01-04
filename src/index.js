import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
// import reducer from './TP_redux_incrementer/reducer'; 
//import reducer from './Tp_redux_crud/reducer';

import reducer from './TP_Redux_filter/Config/reducer';

const store = legacy_createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);