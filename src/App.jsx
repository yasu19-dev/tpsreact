import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import AddEmploye from './components/Employe/AddEmploye';
import DetailEmploye from './components/Employe/DetailEmploye';
import ListEmploye from './components/Employe/ListeEmploye';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListEmploye />} />
        <Route path="/add" element={<AddEmploye />} />
        <Route path="/:nom" element={<DetailEmploye />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;