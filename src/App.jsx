import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListeStagiaire from './components/Stagiaire/ListStagiaire';
import AddStagiaire from './components/Stagiaire/AddStagiaire';
import DetailStagiaire from './components/Stagiaire/DetailStagiaire';
import Header from './components/Header/Header';

function App() {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListeStagiaire />} />
        <Route path="/add" element={<AddStagiaire />} />
        <Route path="/detail/:nom" element={<DetailStagiaire />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;