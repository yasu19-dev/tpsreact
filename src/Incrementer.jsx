import React from 'react'
export default class Incrementer extends React.Component
{ 
   constructor(){
   super()
   this.state={nbr:0}
   }

   incrementer(){
this.setState({nbr:this.state.nbr+1})
}
  decrementer(){

this.setState({nbr:this.state.nbr-1})

}

render(){ return(<div>
<h2>{this.state.nbr}</h2>
<button onClick={()=>this.incrementer()} >Incrementer</button>
<button onClick={()=>this.decrementer()} >Decrementer</button>

</div>)
}
}