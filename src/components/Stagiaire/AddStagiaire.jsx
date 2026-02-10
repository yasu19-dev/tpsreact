import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddStagiaire(){
        const [image, setImage] = useState("");
        const [prenom, setPrenom] = useState("");
        const [nom, setNom] = useState("");
        const [filiere, setFiliere] = useState("");

        
        const dispatch = useDispatch();
        const navigate = useNavigate();

        function handleAdd(){
            const newStagiaire = { image, prenom, nom, filiere };
            dispatch({ type: 'ADD_STAGIAIRE', payload: newStagiaire });
            navigate("/");
        }

        return(
            <div>
                <h1>Ajouter un Stagiaire</h1>
                <input type="text" placeholder="Saisir le lien de l'image" onChange={(e)=>setImage(e.target.value)}/>
                <input type="text" placeholder="Saisir le prénom" onChange={(e)=>setPrenom(e.target.value)}/>
                <input type="text" placeholder="Saisir le nom" onChange={(e)=>setNom(e.target.value)}/>
                <input type="text" placeholder="Saisir la filière" onChange={(e)=>setFiliere(e.target.value)}/>
                <button onClick={handleAdd}>Ajouter</button>
            </div>
        );
}