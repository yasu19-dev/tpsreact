import React from "react";
import "./Stagiaire.css";

export default function Stagiaire(props){
    return(
        <div className="stagiaire">
            <img src={props.image} alt={`${props.prenom} ${props.nom}`} />
            <h2>{props.prenom}</h2>
        </div>
    );
}