import { useDispatch, useSelector } from "react-redux";
import { SUPPRIMER_RECETTE } from "../store/actions";

export default function AfficherRecettes(){
    const recettes = useSelector(state => state.recettes);
    const dispatch = useDispatch();

    const handleDelete = (code) => {
        dispatch(SUPPRIMER_RECETTE(code));
    }

    return(
        <div>
            <h2>Lise des recettes</h2>
            {recettes.length === 0 ?(<p>Aucune recette trouvé</p>)
            :(
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Theme</th>
                            <th>Méthode</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recettes.map((recette)=>(
                            <tr key={recette.code}>
                                <td>{recette.code}</td>
                                <td>{recette.nom}</td>
                                <td>{recette.theme}</td>
                                <td>{recette.methode}</td>
                                <td>
                                    <button onClick={()=> handleDelete(recette.code)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}