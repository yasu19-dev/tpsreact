import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
// Assure-toi que cette importation est correcte (voir note plus bas)
import { UPDATE_ARTICLE } from "../store/actions"; 
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateArticle (){
    
    const dispatch = useDispatch();
    const {id} = useParams(); // Ici 'id' est un String ("11")

    const articles = useSelector(data => data.articles);
    
    // IMPORTANT : Convertir id en nombre pour la recherche
    // Si l'article n'est pas trouvé (ex: rechargement de page), on gère l'erreur
    const article = articles.find(art => art.id === +id); 

    // Sécurité : Si pas d'article trouvé (ex: url invalide), on évite le crash
    const [title, setTitle] = useState(article ? article.title : "");
    const [body, setBody] = useState(article ? article.body : "");

    const navigate = useNavigate()

    function modifier(e){
        e.preventDefault();
        
        // On crée l'objet mis à jour
        const updatedData = {
            id: +id, // Conversion en nombre très importante !
            title: title,
            body: body
        };

        // Si UPDATE_ARTICLE est un Action Creator (une fonction)
        // Vérifie qu'elle retourne bien : { type: 'UPDATE_ARTICLE', payload: updatedData }
        dispatch(UPDATE_ARTICLE(updatedData));
        
        navigate('/');
    }
    
    if (!article) return <p>Article non trouvé</p>; // Gestion du cas d'erreur

    return (
        <form onSubmit={modifier}>
            <input type="text" id='title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
            <input type="text" id='body' onChange={(e)=>setBody(e.target.value)} value={body}/>
            <input type="submit" value='Update Article' />
        </form>
    )
}