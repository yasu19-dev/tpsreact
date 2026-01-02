import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import AjouterRecette from './components/AjouterRecette';
import AfficherRecettes from './components/AfficherRecettes';

function App() {
  return (
    <BrowserRouter>
    <div>
      
      <Menu />

      <Routes>
          <Route path='/ajouter' element={<AjouterRecette/>} />
          <Route path='/afficher' element={<AfficherRecettes/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;