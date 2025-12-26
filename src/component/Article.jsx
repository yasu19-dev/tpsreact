import { useDispatch } from "react-redux"
import { DELETE_ARTICLE } from "../store/actions";
import { Link } from "react-router-dom";

export default function Article(props){
    const dispatch= useDispatch();
    function supprimer(){
        dispatch(DELETE_ARTICLE(props.article.id))
    }
    return(
        <div>
            <h1>{props.article.title}</h1>
            <p>{props.article.body}</p>
            <button onClick={supprimer}>Supprimer</button>
            <Link to={'/Update/'+props.article.id} ><button>Modifier</button></Link>
        </div>
    )
}