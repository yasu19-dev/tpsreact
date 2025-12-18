import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // État local pour gérer les inputs de modification avant validation
  const [editQuantities, setEditQuantities] = useState({});

  const handleLocalChange = (id, value) => {
    setEditQuantities({ ...editQuantities, [id]: value });
  };

  const handleUpdate = (item) => {
    // Si l'utilisateur a changé la valeur dans l'input local, on prend cette valeur, sinon l'ancienne
    const newQty = editQuantities[item.id] ? Number(editQuantities[item.id]) : item.quantity;
    
    dispatch(updateQuantity({ id: item.id, quantity: newQty }));
    alert('Panier mis à jour !');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Contenu du panier</h2>

      {cart.cartItems.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
            <p>Votre panier est vide.</p>
            <Link to="/">Retour aux produits</Link>
        </div>
      ) : (
        <>
          {cart.cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', padding: '15px', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                 <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '15px' }} />
                 <div>
                    <strong>{item.title}</strong>
                    <div style={{ color: '#888', fontSize: '14px' }}>PU: {item.price} €</div>
                 </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <label>Qte : </label>
                <input 
                  type="number" 
                  min="1"
                  defaultValue={item.quantity}
                  onChange={(e) => handleLocalChange(item.id, e.target.value)}
                  style={{ width: '50px', padding: '5px' }}
                />
                
                <button 
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Supprimer
                </button>
                
                <button 
                  onClick={() => handleUpdate(item)}
                  style={{ backgroundColor: '#c82333', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Modifier
                </button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '20px' }}>
            <p><strong>Quantité totale :</strong> {cart.totalQuantity}</p>
            <p><strong>Prix total :</strong> {cart.totalAmount.toFixed(2)} €</p>
            
            <button style={{ backgroundColor: '#a71d2a', color: 'white', border: 'none', padding: '10px 30px', fontSize: '18px', borderRadius: '5px', marginTop: '10px', cursor: 'pointer' }}>
              Commander
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;