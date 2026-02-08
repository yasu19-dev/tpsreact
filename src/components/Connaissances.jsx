function Connaissances(props) {
  return (
    <fieldset>
      <legend>Connaissances</legend>
      Semestre: 
      <select name="semestre" onChange={props.fctChange}>
        <option value="S1">S1</option>
        <option value="S2">S2</option>
      </select><br/>
      HTML <input type="checkbox" name="html" onChange={props.fctChange} />
      CSS <input type="checkbox" name="css" onChange={props.fctChange} />
    </fieldset>
  );
}
export default Connaissances;