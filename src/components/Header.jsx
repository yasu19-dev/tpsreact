import React from 'react';

export default function Header() {
  // Style simple pour l'en-tête
  const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '15px',
    marginBottom: '20px'
  };

  return (
    <header style={headerStyle}>
      <h1>Gestion des Stagiaires</h1>
    </header>
  );
}