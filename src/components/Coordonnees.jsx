function Coordonnees(props) {
  return (
    <fieldset>
      <legend>Adresse postale</legend>
      Email: <input type="email" name="email" onChange={props.fctChange} /><br/>
      Telephone: <input type="text" name="tel" onChange={props.fctChange} />
    </fieldset>
  );
}
export default Coordonnees;