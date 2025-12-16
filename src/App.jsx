import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Produit from './components/Produit';

function App() {
  const products = [
    {
      id: 1,
      title: 'PC Portable Gamer HP VICTUS',
      price: '7490 DH',
      thumbnail : 'HP16D0195NF.jpg'
    },
    {
      id: 2,
      title: 'PC Portable Gamer HP VICTUS',
      price: '2190 DH',
      thumbnail : 'HP14424U3EA.jpg'
    },
    {
      id: 3,
      title: 'Pc Portable Chromebook Acer',
      price: '3640 DH',
      thumbnail: 'NXATHEF002.jpg'
    },
    {
      id: 4,
      title: 'PC Portable - HUAWEI',
      price: '1270 DH',
      thumbnail: 'HUA6901443442959.jpg'
    },
  ];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products products={products} />} />
        <Route path="/product/:id" element={<Produit products={products} />} />
      </Routes>
    </div>
  );
}

export default App;