import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { supprimerSport, modifierNiveau } from '../redux/sportSlice';

const MesSports = () => {
  const user = useSelector(state => state.data.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Protection de la page
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  
  const userSports = useSelector(state => 
    user ? state.data.sports.filter(s => s.idSportif === user.idSportif) : []
  );

  const handleDelete = (nomSport) => {
    dispatch(supprimerSport({ idSportif: user.idSportif, nomSport }));
  };

  const handleUpdate = (nomSport) => {
    const newLevel = prompt("Entrez le nouveau niveau :");
    if(newLevel) {
        dispatch(modifierNiveau({ idSportif: user.idSportif, nomSport, nouveauNiveau: newLevel }));
    }
  };

  if (!user) return null;

  return (
    <div>
      <h2>Mes Sports</h2>
      <button onClick={() => navigate('/accueil')}>Retour Accueil</button>
      <br/><br/>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Sport</th>
            <th>Niveau</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userSports.map((sport, index) => (
            <tr key={index}>
              <td>{sport.nomSport}</td>
              <td>{sport.niveau}</td>
              <td>
                <button onClick={() => handleUpdate(sport.nomSport)}>Modifier Niveau</button>
                <button onClick={() => handleDelete(sport.nomSport)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MesSports;