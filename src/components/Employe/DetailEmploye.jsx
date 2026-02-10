import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function DetailEmploye() {
    const { nom } = useParams(); // Récupère le paramètre de l'URL
    // Cherche l'employé qui correspond au nom
    const employe = useSelector(state => 
        state.employes.find(e => e.nom === nom)
    );

    if (!employe) return <p>Employé introuvable</p>;

    return (
        <div>
            <img src={employe.image} alt={employe.nom} />
            <h1>{employe.nom} {employe.prenom}</h1>
            <p>Fonction : {employe.fonction}</p>
        </div>
    );
}