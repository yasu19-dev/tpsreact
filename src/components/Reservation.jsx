import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { addReservation } from '../redux/hotelSlice';

function Reservation() {
  const { idClient, idChambre } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const reservations = useSelector(state => state.hotel.reservations);

  const [dateRes, setDateRes] = useState('');
  const [nbJours, setNbJours] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const lastReservation = reservations[reservations.length - 1];
    const newId = lastReservation ? lastReservation.id_res + 1 : 1;
 

    const newReservation = {
      id_res: newId,
      id_client: parseInt(idClient),
      num_chambre: parseInt(idChambre),
      date_reservation: dateRes,
      nombre_jour: parseInt(nbJours)
    };

    dispatch(addReservation(newReservation));
    navigate(`/historique/${idClient}`);
  };

  return (
    <div>
      <h2>Réserver la chambre {idChambre}</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" value={dateRes} onChange={e => setDateRes(e.target.value)} required />
        <br />
        <label>Jours:</label>
        <input type="number" min="1" value={nbJours} onChange={e => setNbJours(e.target.value)} required />
        <br />
        <button type="submit">Confirmer</button>
      </form>
    </div>
  );
}

export default Reservation;