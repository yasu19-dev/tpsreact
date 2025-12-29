import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { inscription } from '../redux/sportSlice';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '', prenom: '', ville: 'Tanger', email: '', password: '', confirmPassword: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      alert("Email invalide");
      return;
    }
    // Vérification mot de passe identique
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne sont pas identiques");
      return;
    }

    
    const newUser = {
      nom: formData.nom,
      prenom: formData.prenom,
      ville: formData.ville,
      email: formData.email,
      password: formData.password
    };

    dispatch(inscription(newUser));
    alert("Inscription réussie !");
    navigate('/');
  };

  return (
    <div style={{ border: '2px solid black', padding: '20px', width: '500px', margin: 'auto' }}>
      <h3>Formulaire d'inscription</h3>
      <input name="nom" placeholder="Nom" onChange={handleChange} /><br/><br/>
      <input name="prenom" placeholder="Prénom" onChange={handleChange} /><br/><br/>
      <select name="ville" onChange={handleChange}>
        <option value="Tanger">Tanger</option>
        <option value="Casablanca">Casablanca</option>
        <option value="Rabat">Rabat</option>
      </select><br/><br/>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/><br/>
      <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} /><br/><br/>
      <input type="password" name="confirmPassword" placeholder="Confirmez Mot de passe" onChange={handleChange} /><br/><br/>
      
      <button onClick={handleValidation}>Valider</button>
      <button onClick={() => navigate('/')} style={{marginLeft: '10px'}}>Annuler</button>
    </div>
  );
};

export default Inscription;