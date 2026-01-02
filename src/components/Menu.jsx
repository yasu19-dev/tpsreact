import { Link } from "react-router-dom";

export default function Menu (){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to='/ajouter'>Ajouter Recette</Link></li>
                    <li><Link to='/afficher'>Afficher Recette</Link></li>
                </ul>
            </nav>
        </div>
    )
}

