// import Form from "./components/Form"
 import { useDispatch, useSelector } from "react-redux";

function App() {
  const num= useSelector(data=> data.num);
  const dispatch = useDispatch();
  return(
    <div className="App">
        {/* <h1>Formulaire d'inscription</h1>
        <Form/> */}
        <p>{num}</p>
        <button onClick={()=> dispatch({type:'Incrementer'})}>Incrementer</button>
        <button onClick={()=> dispatch({type:'Decrementer'})}>Decrementer</button>
        <button onClick={()=> dispatch({type:'Reset'})}>Reset</button>
        
        
    </div>
  )
}
export default App;