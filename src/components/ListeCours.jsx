import React from 'react';
import { useSelector } from 'react-redux';

function ListeCours() {
  // On récupère le tableau 'courses' depuis l'état global du reducer [cite: 108]
  const courses = useSelector(function(state) {
    return state.courses;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Cours Disponibles</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {courses.map(function(item) {
          return (
            <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
              <h4>{item.nom}</h4> [cite: 119, 125]
              <p><strong>Formateur :</strong> {item.formateur}</p> [cite: 121, 127]
              <p><strong>Durée :</strong> {item.duree} mois</p> [cite: 120, 126]
              <button>Voir les détails</button> [cite: 97]
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListeCours;