import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/'/>
          <Route path='/about'/>
          <Route path='/login'/>
          <Route path='/register'/>
          <Route path='/products'/>
          <Route path='/products/:id'/>
          <Route path='/addproduct'/>
          <Route path='/cart'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;