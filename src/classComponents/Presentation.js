import React from 'react'
export default class Presentation extends React.Component{
     constructor(props) {
    super(props) 
    this.nom='SAOUSAOU'; this.prenom="Zaid"
}
render(){ return (
<div >
<h2>Salut {this.nom} {this.prenom} </h2>
</div>
)
}
}
