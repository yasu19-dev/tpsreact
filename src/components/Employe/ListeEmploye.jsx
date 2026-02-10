import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './ListEmploye.module.css';

export default function ListEmploye() {
    const employes = useSelector(state => state.employes);
    const navigate = useNavigate();

    return (
        <div className={style.container}>
            {employes.map((emp, index) => (
                <div key={index} onClick={() => navigate(`/${emp.nom}`)}>
                    {/* On réutilise le composant créé en Q7 ou on affiche directement */}
                    <img src={emp.image} alt={emp.nom} />
                    <h3>{emp.nom}</h3>
                    <h4>{emp.prenom}</h4>
                </div>
            ))}
        </div>
    );
}