import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, clearfilterAction, deleteUserAction, filterUserAction, updateUserAction } from "./TP_Redux_filter/Config/actions";
// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const dispatch = useDispatch();

  const villes = useSelector(data=>data.villes);
  const users = useSelector(data=>data.users);
  const usersFilter = useSelector(data=>data.usersFilter);
  const listeUsersmap = usersFilter ? usersFilter : users;

  const indexUser = users.length;

  const [id, setId] = useState('');
  const [nom,setNom] = useState('');
  const [prenom,setPrenom] = useState('');
  const [ville, setVille] = useState(1);
  const [villeFiltre, setVilleFiltre] = useState('');

  

  const handleEnregister= () =>{
    dispatch(addUserAction({
      id:indexUser+1,
      nom:nom,
      prenom:prenom,
      ville:ville
    }));
    handleClear();
  }
  const handleClear = ()=>{
    setNom('');
    setPrenom('');
    setVille(1)
  }
  const handleRemplirForm = (id)=>{
    const user = users.find((u)=> u.id === parseInt(id));
    setId(id)
    setNom(user.nom);
    setPrenom(user.prenom);
    setVille(user.ville)
  }

  const handleModifier = ()=>{
    dispatch(updateUserAction({
      id:id,
      nom:nom,
      prenom:prenom,
      ville:ville
    }));
    handleClear();
    setId('');
  }

  const handleDelete = (id) =>{
    dispatch(deleteUserAction(id))
  }

  const handleFilter = ()=>{
    dispatch(filterUserAction(villeFiltre))
  }

  const handleFilterClear = ()=>{
    dispatch(clearfilterAction(villeFiltre))
  }

  

  return(
    <div className="App">
      <h1>CRUD REACT-REDUX EX 2</h1>
      <div>
        <label>Nom</label>
        <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/><br />
        <label>Prenom</label>
        <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)} /><br />
        <label>Ville</label>
        <select value={ville} onChange={(e)=>setVille(e.target.value)}>
            {villes.map((ville, index)=><option key={index} value={ville.id}>{ville.nom}</option>)}
        </select><br />

        {id? <button onClick={()=> handleModifier()}>Modifier</button>
        :<button onClick={()=> handleEnregister()}>Enregistrer</button> }

        <button onClick={()=> handleClear()}>Clear</button>
      </div>

      <div>
        <label>Filtrer par ville</label>
        <select value={villeFiltre} onChange={(e)=>setVilleFiltre(e.target.value)}>
            {villes.map((ville, index)=><option key={index} value={ville.id}>{ville.nom}</option>)}
        </select>

        <button onClick={()=> handleFilter()}>Filtrer</button>
        <button onClick={()=> handleFilterClear()}>Clear</button>
      </div>
      
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Ville</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listeUsersmap.map((user,index)=>{
            const ville = villes.find((v)=>v.id === parseInt(user.ville))
            return(
              <tr key={index}>
            <td>{user.id}</td>
            <td>{user.nom}</td>
            <td>{user.prenom}</td>
            <td>{ville.nom}</td>
            <td>
              <button onClick={()=> handleRemplirForm(user.id)}>Modifier</button>
              <button onClick={()=> handleDelete(user.id)}>Supprimer</button>
            </td>
          </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  )
}
export default App;