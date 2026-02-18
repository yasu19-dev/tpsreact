// components/Menu.jsx
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/appSlice';

export default function Menu() {
  const { currentUser } = useSelector(state => state.app);
  const dispatch = useDispatch();

  if (!currentUser) return <nav>Veuillez vous connecter</nav>;

  return (
    <nav>
      {/* Menu spécifique Administrateur [cite: 16, 17] */}
      {currentUser.role === 'administrateur' && (
        <>
          <button>Gérer les Utilisateurs</button>
          <button>Réinitialiser Mots de Passe</button>
          <button>Modérer les Commentaires par Membre</button>
        </>
      )}
      
      {/* Menu spécifique Modérateur [cite: 16, 17] */}
      {currentUser.role === 'modérateur' && (
        <>
          <button>Commentaires Actifs</button>
          <button>Commentaires Bloqués</button>
        </>
      )}

      {/* Menu spécifique Membre [cite: 16, 17] */}
      {currentUser.role === 'Membre' && (
        <>
          <button>Recherche par Thème</button>
          <button>Recherche Multicritère</button>
        </>
      )}
      <button onClick={() => dispatch(logout())}>Déconnexion</button>
    </nav>
  );
}