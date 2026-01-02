import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AJOUTER_RECETTE, MODIFIER_RECETTE } from "../store/actions";

export default function AjouterRecette (){
    const dispatch = useDispatch();

    const themes = useSelector(state => state.themes);
    const recettes = useSelector(state => state.recettes);

    const [nom, setNom] = useState('');
    const [theme, setTheme] = useState('');
    const [temps, setTemps] = useState('');
    const [methode, setMethode] = useState('');
    const [description, setDescription]= useState('');

    const handleThemeChange = (e) => {
        const nomTheme = e.target.value;
        setTheme(nomTheme);

        const descriptionTheme = themes.find(t => t.nom === nomTheme);
        setDescription(descriptionTheme ? descriptionTheme.description : '')
    }

    const handleCreer = (e) => {
        e.preventDefault();

        const recetteExiste = recettes.find(recette => recette.nom === nom);

       
        if (recetteExiste) {
            const recetteModifie = {
                code: recetteExiste.code,
                nom: nom,
                theme: theme,
                temps: temps,
                methode: methode
        };
            dispatch(MODIFIER_RECETTE(recetteModifie));
        } else {
            const nouveauCode = recettes.length > 0
                ? recettes[recettes.length - 1].code +1
                :1;

            const nouvelleRecette = {
                code: nouveauCode, 
                nom: nom,
                theme: theme,
                temps: temps,
                methode: methode
            };
            dispatch(AJOUTER_RECETTE(nouvelleRecette));
        }
    }

    return(
        <Fragment>
            <div>
                <h2>Créer Recette</h2>
                <form>
                    <div>
                        <label>Nom de la recette</label>
                        <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} required/>
                    </div>

                    <div>
                        <label>Theme</label>
                        <select value={theme} onChange={handleThemeChange}>
                            <option value="">Choisir un theme</option>
                            {themes.map((t, index)=>(
                                <option key={index} value={t.nom}>{t.nom}</option>
                            ))}
                        </select>
                        <p  style={{fontStyle: 'italic', color: 'violet'}}>{description}</p>
                    </div>

                    <div>
                        <label>Temps de préparation</label>
                        <input type="text" value={temps} onChange={(e)=> setTemps(e.target.value)} />
                    </div>

                    <div>
                        <label>Méthode de préparation :</label>
                        <textarea value={methode} onChange={(e) => setMethode(e.target.value)}></textarea>
                    </div>

                    <button onClick={handleCreer}>Créer</button>

                </form>
            </div>
        </Fragment>
    )

    
    

}