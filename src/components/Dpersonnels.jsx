function Dpersonnels(props) {
  return (
    <fieldset>
      <legend>Vos données personnelles</legend>
      Nom: <input type="text" name="nom" onChange={props.fctChange} /><br/>
      Prenom: <input type="text" name="prenom" onChange={props.fctChange} /><br/>
      Lieu de naissance: 
      <input type="radio" name="lieu" value="Seine-Saint-Denis" onChange={props.fctChange} /> Seine-Saint-Denis
      <input type="radio" name="lieu" value="Reste du monde" onChange={props.fctChange} /> Reste du monde
    </fieldset>
  );
}

export default Dpersonnels;