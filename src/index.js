import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {combineReducers, legacy_createStore} from 'redux';

import { Provider } from 'react-redux';
import reducer1 from './store/reducer1';
import reducer2 from './store/reducer2';
import { BrowserRouter } from 'react-router-dom';

const store = legacy_createStore(combineReducers({r_produits:reducer1,r_panier:reducer2}) )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

