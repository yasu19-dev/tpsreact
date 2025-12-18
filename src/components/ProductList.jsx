import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { productsData } from '../data';

const ProductList = () => {
  const dispatch = useDispatch();

  // États pour les filtres
  const [sortOrder, setSortOrder] = useState('default');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // État local pour stocker la quantité sélectionnée pour CHAQUE produit
  const [quantities, setQuantities] = useState({});

  // Fonction pour mettre à jour la quantité d'un produit spécifique
  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: value });
  };

  const handleAddToCart = (product) => {
    // Si l'utilisateur n'a rien mis, on prend 1 par défaut
    const qty = quantities[product.id] || 1;
    
    // ACTION REDUX avec conversion forcée en Nombre
    dispatch(addToCart({ ...product, quantity: Number(qty) }));
    
    alert(`${product.title} ajouté au panier !`);
  };

  // Logique de tri et filtre
  const getFilteredProducts = () => {
    let filtered = [...productsData];

    if (minPrice) filtered = filtered.filter(p => p.price >= Number(minPrice));
    if (maxPrice) filtered = filtered.filter(p => p.price <= Number(maxPrice));

    if (sortOrder === 'asc') filtered.sort((a, b) => a.price - b.price);
    if (sortOrder === 'desc') filtered.sort((a, b) => b.price - a.price);

    return filtered;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* SECTION HERO (IMAGE + TITRE) */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Bienvenue au FULL STACK SHOP</h1>
        <p>Découvrez nos meilleurs mugs pour développeurs.</p>
        <img src="https://via.placeholder.com/800x300" alt="Shop Hero" style={{ width: '100%', borderRadius: '10px' }} />
      </div>

      {/* SECTION FILTRES */}
      <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', marginBottom: '20px', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div>
            <label>Trier par: </label>
            <select onChange={(e) => setSortOrder(e.target.value)} style={{ padding: '5px' }}>
            <option value="default">Par défaut</option>
            <option value="asc">Prix croissant</option>
            <option value="desc">Prix décroissant</option>
            </select>
        </div>
        <div>
            <label>Prix entre: </label>
            <input type="number" placeholder="Min" onChange={(e) => setMinPrice(e.target.value)} style={{ width: '60px', padding: '5px' }} />
            <span> et </span>
            <input type="number" placeholder="Max" onChange={(e) => setMaxPrice(e.target.value)} style={{ width: '60px', padding: '5px' }} />
        </div>
      </div>

      <h2 style={{ color: '#007bff' }}>Liste des produits</h2>

      {/* LISTE PRODUITS */}
      {getFilteredProducts().map((product) => (
        <div key={product.id} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', padding: '15px 0' }}>
          <img src={product.image} alt={product.title} style={{ width: '60px', height: '60px', objectFit: 'contain', marginRight: '20px' }} />
          
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: '0 0 5px 0' }}>{product.title}</h4>
            <span style={{ color: '#666' }}>{product.price} €</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Qte :</span>
            <input 
              type="number" 
              min="1" 
              defaultValue="1"
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              style={{ width: '50px', padding: '5px' }}
            />
            <button 
              onClick={() => handleAddToCart(product)}
              style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;