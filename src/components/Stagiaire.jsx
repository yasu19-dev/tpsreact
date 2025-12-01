import React, { Component } from 'react';

export default class Stagiaire extends Component {
  render() {
    // Récupération des données via les props
    const { nom, prenom, filiere, note } = this.props;

    // Logique conditionnelle pour la couleur
    // Si note >= 10 : vert clair, sinon : rouge clair
    const cardStyle = {
      backgroundColor: note >= 10 ? '#d4edda' : '#f8d7da',
      padding: '15px',
      margin: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      width: '200px',
      textAlign: 'center'
    };

    return (
      <div style={cardStyle}>
        <h3>{nom} {prenom}</h3>
        <p><strong>Filière :</strong> {filiere}</p>
        <p><strong>Note :</strong> {note} / 20</p>
      </div>
    );
  }
}