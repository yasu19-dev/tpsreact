import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function Chambres() {
  const { idClient } = useParams();
  const chambres = useSelector(state => state.hotel.chambres);
  const [filterType, setFilterType] = useState('tous');

 
  const types = ['tous', ...new Set(chambres.map(c => c.type))];

  const filteredChambres = filterType === 'tous' 
    ? chambres 
    : chambres.filter(c => c.type === filterType);

  return (
    <div>
      <h2>Liste des Chambres</h2>
      <label>Filtrer par type: </label>
      <select onChange={(e) => setFilterType(e.target.value)}>
        {types.map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {filteredChambres.map(chambre => (
          <div key={chambre.num} style={{ border: '1px solid black', padding: '10px' }}>
            <p>Numéro: {chambre.num}</p>
            <p>Type: {chambre.type}</p>
            <p>Prix: {chambre.prix}</p>
          
            <Link to={`/reservation/${idClient}/${chambre.num}`}>Réserver</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chambres;