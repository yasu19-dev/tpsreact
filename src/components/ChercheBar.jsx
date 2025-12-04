import React, { useState } from "react";
export default function ChercheBar(props) {
const [term,setTerm]=useState('')
function onChercheSubmitBar(event){
event.preventDefault()
props.onChercheSubmit(term)
}
return (
<div className="Child">
<form onSubmit={(event)=>onChercheSubmitBar(event)}>
<h2>composant ChercheBar</h2>
<div>
<label>Entrer le mot clé de recherche:</label>
<input type="text" value={term}
onChange={(event)=>setTerm(event.target.value.toUpperCase())} />
</div>
<button type="submit">chercher</button>
</form>
</div>
);
}