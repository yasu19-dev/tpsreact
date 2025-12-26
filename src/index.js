import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
// import Articles from './containers/Articles';
import reducer from './store/reducer';
import { BrowserRouter } from 'react-router-dom';
import AppArticles from './containers/AppArticles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(reducer);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <AppArticles />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);