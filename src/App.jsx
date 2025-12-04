import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const [estInscrit, setEstInscrit] = useState(false);
  const [infos, setInfos] = useState(null);

  const traitementInscription = (donneesRecues) => {
    setInfos(donneesRecues);
    setEstInscrit(true);
  };

  return (
    <div>
      {estInscrit ? (
        <div className="conteneur">
          <h1>Inscription Réussie</h1>
          <p className="resultat">
            Je suis {infos.nom} né le {infos.date} à {infos.ville} et mes loisirs sont :
          </p>
          <ul>
            {infos.listeLoisirs.map((loisir, index) => (
              <li key={index}>{loisir}</li>
            ))}
          </ul>
        </div>
      ) : (
        <Form validerInscription={traitementInscription} />
      )}
    </div>
  );
}

export default App;