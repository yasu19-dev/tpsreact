import { Link } from "react-router-dom";

export default function MatchList(props){
    const style = {
            border: '1px solid black',
            padding: '15px',
            margin: '10px',
            backgroundColor: 'indigo',
            color: 'white'
        }
    return (
        <div>
            {props.matchs.map((match)=>{
                return (
                    <div key={match.id} style={style}>
                        <h3>Titre : {match.name}</h3>
                        <p>Jour : {match.matchDay}</p>
                        <p>Lieu : {match.location}</p>
                        <Link to={`/match/${match.id}`} style={{ color: 'white' }}>Voir les détails</Link>
                    </div>
                );
            })}
        </div>
    );
}