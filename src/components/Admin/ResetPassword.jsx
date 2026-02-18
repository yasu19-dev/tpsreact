// components/Admin/ResetPassword.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reinitialiserMotDePasse } from '../../store/appSlice';

export default function ResetPassword() {
  const [login, setLogin] = useState('');
  const [mdp, setMdp] = useState('');
  const [confirmMdp, setConfirmMdp] = useState(''); // Deux zones de texte [cite: 26]
  const dispatch = useDispatch();

  const handleReset = (e) => {
    e.preventDefault();
    if (mdp === confirmMdp) {
      dispatch(reinitialiserMotDePasse({ login, nouveauMdp: mdp })); // Recherche par login et MAJ [cite: 25, 26]
    }
  };

  return (
    <form onSubmit={handleReset}>
      <input type="text" placeholder="Login" onChange={e => setLogin(e.target.value)} />
      <input type="password" placeholder="Nouveau mot de passe" onChange={e => setMdp(e.target.value)} />
      <input type="password" placeholder="Confirmer" onChange={e => setConfirmMdp(e.target.value)} />
      <button type="submit">Réinitialiser</button>
    </form>
  );
}