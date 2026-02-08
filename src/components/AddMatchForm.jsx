import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AddMatchForm({onAdd}){
    const [nom, setNom] = useState('');
    const [jour, setJour] = useState('');
    const [lieu, setLieu] = useState('');
    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault();
        const newMatch = {
            id:Date.now(),
            name: nom,
            matchDay: jour,
            location: lieu
        }
        onAdd(newMatch); 
        navigate('/')
    }
    return(
        <form onSubmit={handleSubmit}>
            Nom Match :<input type="text" name="name" value={nom} onChange={(e)=>setNom(e.target.value)} />
            Jour Match : <input type="date" name="jour" value={jour} onChange={(e)=>setJour(e.target.value)}/>
            Lieu Match : <input type="text" name='lieu' value={lieu} onChange={(e)=>setLieu(e.target.value)}/>
            <button type='submit'>Ajouter</button>
        </form>
    )
}