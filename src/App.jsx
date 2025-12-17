import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './containers/Articles';
import UpdateArticle from './components/UpdateArticle';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Gestion des Articles</h1>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/update/:id" element={<UpdateArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;