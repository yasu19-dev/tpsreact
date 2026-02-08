import React, { useState } from 'react';
import Dpersonnels from './components/Dpersonnels';
import Coordonnees from './components/Coordonnees';
import Connaissances from './components/Connaissances';

function App() {
  const [formulaire, setFormulaire] = useState({});
  const [affichage, setAffichage] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormulaire({
      ...formulaire,
      [name]: type === 'checkbox' ? checked : value
    });
  }

  function handleAjouter() {
    setAffichage(true);
  }

  return (
    <div>
      <Dpersonnels fctChange={handleChange} />
      <Coordonnees fctChange={handleChange} />
      <Connaissances fctChange={handleChange} />
      
      <button onClick={handleAjouter}>Envoyer</button>

      {affichage && (
        <div style={{ marginTop: '20px', border: '1px solid black' }}>
          <h3>Récapitulatif :</h3>
          <p>Nom Complet : {formulaire.nom} {formulaire.prenom}</p>
          <p>Email : {formulaire.email}</p>
          <p>Semestre : {formulaire.semestre}</p>
          <p>Connaissances : {formulaire.html ? "HTML " : ""}{formulaire.css ? "CSS" : ""}</p>
        </div>
      )}
    </div>
  );
}

export default App;