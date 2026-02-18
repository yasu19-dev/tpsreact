// components/Admin/GestionUtilisateurs.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modifierRoleUtilisateur, supprimerUtilisateur } from '../../store/appSlice';

export default function GestionUtilisateurs() {
  const utilisateurs = useSelector(state => state.app.utilisateurs);
  const dispatch = useDispatch();
  
  // Logique de navigation 
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentUser = utilisateurs[currentIndex];
  
  const [newRole, setNewRole] = useState('');

  const handleUpdateRole = () => {
    dispatch(modifierRoleUtilisateur({ login: currentUser.login, nouveauRole: newRole })); // Modification de rôle uniquement [cite: 24]
  };

  return (
    <div>
      <h3>Utilisateur Courant : {currentUser.login}</h3>
      <p>Nom: {currentUser.nom}</p>
      <p>Rôle actuel: {currentUser.role}</p>

      {/* Boutons de navigation  */}
      <button onClick={() => setCurrentIndex(0)}>Premier</button>
      <button onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}>Précédent</button>
      <button onClick={() => setCurrentIndex(prev => Math.min(utilisateurs.length - 1, prev + 1))}>Suivant</button>
      <button onClick={() => setCurrentIndex(utilisateurs.length - 1)}>Dernier</button>

      {/* Modification et Suppression [cite: 24] */}
      <select onChange={(e) => setNewRole(e.target.value)}>
        <option value="Membre">Membre</option>
        <option value="modérateur">Modérateur</option>
        <option value="administrateur">Administrateur</option>
      </select>
      <button onClick={handleUpdateRole}>Modifier Rôle</button>
      <button onClick={() => dispatch(supprimerUtilisateur(currentUser.login))}>Supprimer</button>
    </div>
  );
}