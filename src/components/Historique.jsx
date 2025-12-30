import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation } from '../redux/hotelSlice';

function Historique() {
  const { idClient } = useParams();
  const dispatch = useDispatch();
  
  
  const reservations = useSelector(state => state.hotel.reservations);
  const chambres = useSelector(state => state.hotel.chambres);

  
  const mesReservations = reservations.filter(r => r.id_client === parseInt(idClient));

  const handleDelete = (idRes) => {
    dispatch(deleteReservation(idRes)); // Action supprimer [cite: 50]
  };

  // Calcul montant total
  const total = mesReservations.reduce((acc, curr) => {
    const chambre = chambres.find(c => c.num === curr.num_chambre);
    return acc + (chambre ? chambre.prix * curr.nombre_jour : 0);
  }, 0);

  return (
    <div>
      <h2>Historique des réservations</h2>
      <ul>
        {mesReservations.map(res => (
          <li key={res.id_res}>
             Chambre: {res.num_chambre} | Date: {res.date_reservation} | Jours: {res.nombre_jour}
             <button onClick={() => handleDelete(res.id_res)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <h3>Montant Total: {total} DH</h3>
    </div>
  );
}

export default Historique;