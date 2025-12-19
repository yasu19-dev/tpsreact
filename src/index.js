import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { combineReducers,legacy_createStore } from 'redux';
import reducer1 from './store/reducer1';
import reducer2 from './store/reducer2';


const store= legacy_createStore(combineReducers({r_produits:reducer1,r_panier:reducer2}))
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);