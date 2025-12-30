// import Form from "./components/Form"

import { Routes, Route } from "react-router-dom";
import Products from "./TP_routage/Products";
import Single from "./TP_routage/Single";


function App() {
  const produits = [
    {
      id: 1,
      title: 'PC Portable Gamer HP VICTUS',
      price: '7490 DH',
      thumbnail : 'HP16D0195NF.jpg'
    },
    {
      id: 2,
      title: 'PC Portable Gamer HP VICTUS',
      price: '2190 DH',
      thumbnail : 'HP14424U3EA.jpg'
    },
    {
      id: 3,
      title: 'Pc Portable Chromebook Acer',
      price: '3640 DH',
      thumbnail: 'NXATHEF002.jpg'
    },
    {
      id: 4,
      title: 'PC Portable - HUAWEI',
      price: '1270 DH',
      thumbnail: 'HUA6901443442959.jpg'
    },
    ];
 
  return(
    <div className="App">
        {/* <h1>Formulaire d'inscription</h1>
        <Form/> */}
        <Routes>
          <Route path="/" element={<Products produits={produits}/>}/>
          <Route path="/product/:id" element={<Single produits={produits}/>}/>
        
        </Routes>
        
        
    </div>
  )
}

export default App