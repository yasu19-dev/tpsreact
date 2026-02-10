import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DetailStagiaire(){
    const {nom} = useParams();
    const stagiaire = useSelector(state =>
         state.stagiaires.find(s => s.nom === nom));

    if (!stagiaire) return <p>Stagiaire non trouvé</p>;
    return(
        <div>
            <h1>Détail du Stagiaire</h1>
            {stagiaire && (
                <div>
                    <p>Nom: {stagiaire.nom}</p>
                    <p>Prénom: {stagiaire.prenom}</p>
                    <img src={stagiaire.image} alt={`${stagiaire.prenom} ${stagiaire.nom}`} />
                </div>
            )}
        </div>
    );
}