import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import MatchList from './components/MatchList';
import AddMatchForm from './components/AddMatchForm';
import MatchDetails from './components/MatchDetails';

function App() {
  const initialMatchs = [
  {id: 1, name: 'Maroc vs Argentine', matchDay: '2030-02-15', location: 'Casablanca' },
  {id: 2, name: 'Brésil vs Palestine', matchDay: '2030-02-18', location: 'Rabat' }
];

  const [matchs, setMatchs] = useState(initialMatchs);

  useEffect(function() {
    axios.get('https://api.example.com/matchs')
      .then(function(reponse) {
        setMatchs(reponse.data);
      });
  }, []);


  function ajouterMatch(match) {
    setMatchs([...matchs, match]);
  }

  return (
      <div>
      <nav>
        <Link to="/">Matchs</Link> | <Link to="/add">Ajouter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MatchList matchs={matchs} />} />
        <Route path="/add" element={<AddMatchForm onAdd={ajouterMatch} />} />
        <Route path="/match/:id" element={<MatchDetails matchs={matchs} />} />
      </Routes>
      </div>
   
  );
}

export default App;