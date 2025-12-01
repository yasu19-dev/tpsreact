import React from 'react';
import Stagiaire from './Stagiaire';

export default function Stagiaires(props) {
  // Style pour le conteneur (flexbox pour aligner les cartes)
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  };

  return (
    <div style={containerStyle}>
      {/* On boucle sur le tableau reçu en props */}
      {props.liste.map((etudiant, index) => (
        <Stagiaire 
          key={index}
          nom={etudiant.nom}
          prenom={etudiant.prenom}
          filiere={etudiant.filiere}
          note={etudiant.note}
        />
      ))}
    </div>
  );
}