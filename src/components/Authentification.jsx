import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Authentification() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const clients = useSelector(state => state.hotel.clients);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Vérification des identifiants
    const client = clients.find(c => c.login === login && c.password === password);

    if (client) {
      navigate(`/chambres/${client.id}`);
    } else {
      setError("Login ou mot de passe incorrect"); 
    }
  };

  return (
    <div>
      <h2>Authentification</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Login" value={login} onChange={e => setLogin(e.target.value)} required />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <br />
        <button type="submit">Se connecter</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}

export default Authentification;