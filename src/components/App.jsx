import React, { useState } from 'react'
import ChercheBar from './components/ChercheBar';
import ResultatList from './components/ResultatList';
const list=[
    {nom:"banane",type:"fruit"},
    {nom:"orange",type:"fruit"},
    {nom:"pomme",type:"fruit"},
    {nom:"raisins",type:"fruit"},
    {nom:"kiwi",type:"fruit"},
    {nom:"tomate",type:"legume"},
    {nom:"carotte",type:"legume"},
    {nom:"pomme de terre",type:"legume"},
        {nom:"navet",type:"legume"},
    {nom:"poivron",type:"legume"}
]
    export default function App() {
        const [type,setType]=useState('')
        const [resultas,setResultas]=useState([])
        function onChercheSubmitApp(type){
        setType(type)
        setResultas(list.filter((item)=>item.type.toUpperCase()==type))
}
return (
    <div className='App'>
    <h1>Composant App</h1>
<ChercheBar onChercheSubmit={onChercheSubmitApp}/>
<div>
<p>le type:<span style={{color:"rgb(36,44,33)",fontWeight:"bold"}}>{type}</span></p>
</div>
<ResultatList resultats={resultas}/>
</div>
);
}