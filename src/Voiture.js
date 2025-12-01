// Fichier: src/Voiture.js
import React from 'react';

function Voiture() {
  
  const myVoiture = {
    matricule: '19873X9',
    marque: 'Toyota',
    chevaux: 8
  };

 
  return (
    <div>
     
      <h1 style={{ color: 'green' }}>Information voiture</h1>
      
      <h3>
        voiture matricule: 
        <span style={{ color: 'red' }}> {myVoiture.matricule}</span>
      </h3>
      
      <h3>
        marque: {myVoiture.marque} nombre de chevaux: {myVoiture.chevaux}
      </h3>
    </div>
  );
}

export default Voiture;