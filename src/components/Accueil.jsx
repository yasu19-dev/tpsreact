import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/sportSlice';

const Accueil = () => {
  const user = useSelector(state => state.data.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Protection de la page
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  // Empêche l'affichage du reste si pas connecté
  if (!user) return null;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenue {user.prenom} {user.nom}</h1>
      <nav>
        <ul style={{ listStyle: 'none' }}>
          <li><Link to="/mes-sports">Sports pratiqués</Link></li>
          <li><Link to="/recherche">Rechercher des sportifs par sport</Link></li>
          <li><button onClick={handleLogout} style={{marginTop: '20px', backgroundColor: 'red', color: 'white'}}>Déconnecter</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Accueil;