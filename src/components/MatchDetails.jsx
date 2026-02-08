import { useParams } from "react-router-dom";

export default function MatchDetails(props){
    const {id} = useParams();
    const match = props.matchs.find((item)=>{
        return item.id === parseInt(id);
    });
   

    return(
        <div>
            <h2>Détails du match</h2>
            <h3>Titre : {match.name}</h3>
            <p>Jour : {match.matchDay}</p>
            <p>Lieu : {match.location}</p>
        </div>
    )
}