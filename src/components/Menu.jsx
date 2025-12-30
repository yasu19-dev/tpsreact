import { Link, useLocation, useNavigate } from 'react-router-dom';

function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  
  
  if (location.pathname === '/') {
    return null;
  }

  
  const pathParts = location.pathname.split('/');
  const clientId = pathParts[2]; 

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
      <Link to={`/historique/${clientId}`} style={{ marginRight: '10px' }}>Historique</Link>
      <Link to={`/chambres/${clientId}`} style={{ marginRight: '10px' }}>Chambres</Link>
      <button onClick={handleLogout}>Déconnexion</button>
    </nav>
  );
}

export default Menu;