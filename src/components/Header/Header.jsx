import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <nav>
                <Link to="/">Liste des Stagiaires</Link>
                <Link to="/add">Ajouter un Stagiaire</Link>
            </nav>
        </header>
    );
}