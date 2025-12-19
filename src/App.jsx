import { Route, Routes } from "react-router-dom";
import Produits from "./components/Produits";
import Panier from "./components/Panier";
function App() {
  return (
<div className="App">
  <Routes>
    <Route path='/' element={<Produits/>}></Route>
    <Route path='/panier' element={<Panier/>}></Route>
  </Routes>
</div>
  );
}

export default App;