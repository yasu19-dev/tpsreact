import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifierDureeAction } from './actions'; // Import de l'action séparée

function ModifierDuree() {
  const [id, setId] = useState('');
  const [nouvelleDuree, setNouvelleDuree] = useState('');
  const dispatch = useDispatch();

  function confirmerModification() {
    if (id && nouvelleDuree) {
      // On déclenche l'action pour mettre à jour le store 
      dispatch(modifierDureeAction(id, nouvelleDuree));
      alert("La durée a été mise à jour !");
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  }

  return (
    <div style={{ border: '1px dashed blue', padding: '20px', margin: '20px' }}>
      <h3>Modifier la durée d'un cours</h3>
      <div>
        ID du cours : 
        <input 
          type="number" 
          value={id} 
          onChange={function(e) { setId(e.target.value); }} 
        />
      </div>
      <br />
      <div>
        Nouvelle durée : 
        <input 
          type="number" 
          value={nouvelleDuree} 
          onChange={function(e) { setNouvelleDuree(e.target.value); }} 
        />
      </div>
      <br />
      <button onClick={confirmerModification}>Mettre à jour</button>
    </div>
  );
}

export default ModifierDuree;