import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Inscription from './components/Inscription';
import Accueil from './components/Accueil';
import MesSports from './components/MesSports';
import Recherche from './components/Recherche';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/mes-sports" element={<MesSports />} />
        <Route path="/recherche" element={<Recherche />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;