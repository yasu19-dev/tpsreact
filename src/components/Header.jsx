import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '15px', textAlign: 'center' }}>
      <Link to="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}>ACCUEIL</Link>
      <Link to="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}>PRODUITS</Link>
      <Link to="/cart" style={{ margin: '0 15px', color: 'white', textDecoration: 'none', fontSize: '18px' }}>PANIER</Link>
    </nav>
  );
};

export default Header;