
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export default function ListeStagiaire(){
    const stagiaires = useSelector(state => state.stagiaires);
    const navigate = useNavigate();
    return(
        <div>
            <h1>Liste des Stagiaires</h1>
            {stagiaires.map((stagiaire, index) => (
                <Fragment key={index}>
                <div onClick={() => navigate(`/stagiaire/${index}`)}>
                    <img src={stagiaire.image} alt={`${stagiaire.prenom} ${stagiaire.nom}`} />
                </div>
                 <h2>{stagiaire.prenom} {stagiaire.nom}</h2>
                </Fragment>
            ))}
            
        </div>
    );
}