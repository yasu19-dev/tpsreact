import { Fragment, useState } from "react"

export default function Form(){
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [password,setPassword] = useState('');
    const [dateN,setDateN] = useState('');
    const [ville,setVille] = useState('Tanger');
    const [genre,setGenre] = useState('');
    const [loisirs,setLoisirs] = useState([]);
    const [photo, setPhoto] = useState(null);

    // État pour stocker les données une fois le formulaire soumis
  const [submittedData, setSubmittedData] = useState(null);

    function handleLoisirs(e) {
    const value = e.target.value;
    if (e.target.checked) {
      // Ajout : on crée un nouveau tableau avec l'ancienne valeur + la nouvelle
      setLoisirs([...loisirs, value]);
    } else {
      // Suppression
      setLoisirs(loisirs.filter((item) => item !== value));
    }
  }

  function handleFileChange(e) {
    // On récupère le premier fichier sélectionné
    setPhoto(e.target.files[0]);
  }

    function handleSubmit(e){e.preventDefault();
        setSubmittedData({
            nom,
            prenom,
            password,
            dateN,
            ville,
            genre,
            loisirs,
            photo,
        });
    };


    return(
        <Fragment>
        <form onSubmit={handleSubmit}>
            <p>
            <label>Nom: </label>
            <input type="text" name="nom" id="nom" onChange={(e)=>setNom(e.target.value)} />
            </p>
            <p>
            <label>Prenom: </label>
            <input type="text" name="Prenom" id="Prenom" onChange={(e)=>setPrenom(e.target.value)}  />
            </p>
            <p>
            <label>Password: </label>
            <input type="password" name="mdp" id="mdp" onChange={(e)=>setPassword(e.target.value)}  />
            </p>
            <p>
            <label>Date de Naissance: </label>
            <input type="date" name="dateN" id="dateN"  onChange={(e)=>setDateN(e.target.value)} />
            </p>
            <p>
            <label>Ville: </label>
            <select name="Ville" id="Ville" onChange={(e)=>setVille(e.target.value)} >
                <option value="">Choisir une ville</option>
                <option value="Tanger">Tanger</option>
                <option value="Kenitra">Kenitra</option>
                <option value="Casa">Casablanca</option>
            </select>
            </p>
            <p>
                <label >Genre: </label>
                <input type="radio" name="genre" id="genre" value='homme' onChange={(e)=>setGenre(e.target.value)} />Homme
                <input type="radio" name="genre" id="genre" value='femme'onChange={(e)=>setGenre(e.target.value)} />Femme
            </p>
            <p>
                <label>Loisirs: </label>
                <input type="checkbox" name="loisirs" id="" value='Sport' onChange={handleLoisirs}/>Sport
                <input type="checkbox" name="loisirs" id="" value='Musique' onChange={handleLoisirs}/>Musique
                <input type="checkbox" name="loisirs" id="" value='Lecture' onChange={handleLoisirs}/>Lecture
            </p>
            <div>
          <label>Photo de profil: </label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input type="submit" value="S'inscrire" />
        </div>
        </form>
        {/* 4. Affichage conditionnel : Seulement si submittedData existe */}
      {submittedData && (
        <div>
          <h2>Resultat:</h2>
          <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Password</th>
                <th>Date</th>
                <th>Ville</th>
                <th>Genre</th>
                <th>Loisirs</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.nom}</td>
                <td>{submittedData.prenom}</td>
                <td>{submittedData.password}</td>
                <td>{submittedData.dateN}</td>
                <td>{submittedData.ville}</td>
                <td>{submittedData.genre}</td>
                {/* On utilise join pour afficher le tableau proprement */}
                <td>{submittedData.loisirs.join(", ")}</td>
                {/* On affiche le nom du fichier s'il existe */}
                <td>{submittedData.photo ? submittedData.photo.name : "Aucune"}</td>
              </tr>
            </tbody>
          </table>
          
          {/* Bonus: Si tu veux afficher l'image elle-même */}
          {submittedData.photo && (
             <div style={{marginTop: '10px'}}>
                <p>Aperçu de la photo :</p>
                <img 
                    src={URL.createObjectURL(submittedData.photo)} 
                    alt="Profil" 
                    width="100" 
                />
             </div>
          )}
        </div>
      )}
        </Fragment>
    )

}