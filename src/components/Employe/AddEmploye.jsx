import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AddEmploye() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [fonction, setFonction] = useState('');
    const [image, setImage] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = () => {
        const newEmp = { nom, prenom, fonction, image };
        dispatch({ type: 'ADD_EMPLOYE', payload: newEmp });
        navigate('/'); // Redirection vers l'accueil après ajout
    };

    return (
        <div>
            <input placeholder="Lien image" onChange={e => setImage(e.target.value)} />
            <input placeholder="Nom" onChange={e => setNom(e.target.value)} />
            <input placeholder="Prénom" onChange={e => setPrenom(e.target.value)} />
            <input placeholder="Fonction" onChange={e => setFonction(e.target.value)} />
            <button onClick={handleAdd}>Ajouter</button>
        </div>
    );
}