import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const [estConnecte, setEstConnecte] = useState(false);
  const [nomUtilisateur, setNomUtilisateur] = useState('');

  const gererConnexion = (nom) => {
    setNomUtilisateur(nom);
    setEstConnecte(true);
  };

  return (
    <div>
      {estConnecte ? (
        <div className="conteneur ecran-accueil">
          <h1>Accueil</h1>
          <p>Bonjour {nomUtilisateur}</p>
        </div>
      ) : (
        <Form verificationConnexion={gererConnexion} />
      )}
    </div>
  );
}

export default App;