import React from "react";
export default class Header extends React.Component{
     constructor(props) {
    super(props)
    this.titre="Application mon premier classe composant"
}
render(){ return (
<div>
<h1>{this.titre}</h1>
<hr/>
</div>)
}
}
