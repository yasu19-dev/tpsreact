import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Stagiaires from './Stagiaires';

export default class Accueil extends Component {
  constructor(props) {
    super(props);
    // Définition des données dans le state (ou simplement en variable)
    this.state = {
      stagiaires: [
        { nom: 'Dupont', prenom: 'Jean', filiere: 'DEVOWFS', note: 12 },
        { nom: 'Durand', prenom: 'Marie', filiere: 'DEVOAM', note: 8 },
        { nom: 'Martin', prenom: 'Paul', filiere: 'DEVOFS', note: 15 },
        { nom: 'Bernard', prenom: 'Lucie', filiere: 'DEVOWFS', note: 7 }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        
        {/* On passe la liste des stagiaires au composant Stagiaires */}
        <main style={{ minHeight: '70vh' }}>
            <Stagiaires liste={this.state.stagiaires} />
        </main>

        <Footer />
      </div>
    );
  }
}