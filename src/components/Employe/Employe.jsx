// Components/Employe/Employe.jsx
import React from 'react';
import style from './Employe.module.css';

export default function Employe(props) {
    return (
        <div className={style.card}>
            {/* L'image doit être cliquable selon la Q8, mais la logique est souvent dans la liste */}
            <img src={props.data.image} alt={props.data.nom} className={style.img} />
            <h2>{props.data.nom}</h2>
        </div>
    );
}