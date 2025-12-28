import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../redux/sportSlice';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sportifs = useSelector(state => state.data.sportifs);

  const handleLogin = () => {
    const user = sportifs.find(u => u.email === email);

    if (!user) {
      alert("Email inconnu, redirection vers l'inscription.");
      navigate('/inscription');
    } else if (user.password === password) {
      dispatch(login(user));
      navigate('/accueil');
    } else {
      alert("Mot de passe incorrect");
    }
  };

  return (
    <div style={{ border: '1px solid black', padding: '20px', width: '400px', margin: 'auto' }}>
      <h3>Authentification</h3>
      <div style={{ marginBottom: '10px' }}>
        <label>Email : </label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Mot de passe : </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Valider</button>
      <br />
      <Link to="/inscription">S'inscrire</Link>
    </div>
  );
};

export default Auth;