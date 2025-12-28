import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Recherche = () => {
  const [searchSport, setSearchSport] = useState('');
  const [resultats, setResultats] = useState([]);
  
  const allSports = useSelector(state => state.data.sports);
  const allSportifs = useSelector(state => state.data.sportifs);
  const user = useSelector(state => state.data.currentUser); // Nécessaire pour la vérification
  
  const navigate = useNavigate();

  // Protection de la page
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSearch = () => {
    const sportsFound = allSports.filter(s => s.nomSport.toLowerCase() === searchSport.toLowerCase());
    const sportifsFound = sportsFound.map(s => {
      const infoUser = allSportifs.find(u => u.idSportif === s.idSportif);
      return { ...infoUser, niveau: s.niveau };
    });
    setResultats(sportifsFound);
  };

  if (!user) return null;

  return (
    <div>
      <h2>Recherche par Sport</h2>
      <button onClick={() => navigate('/accueil')}>Retour Accueil</button>
      <br/><br/>
      <input 
        type="text" 
        placeholder="Entrez un sport (ex: Football)" 
        value={searchSport} 
        onChange={(e) => setSearchSport(e.target.value)} 
      />
      <button onClick={handleSearch}>Rechercher</button>

      <ul>
        {resultats.map((res, index) => (
            <li key={index}>
                {res.nom} {res.prenom} - {res.ville} ({res.email}) - Niveau: {res.niveau}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Recherche;