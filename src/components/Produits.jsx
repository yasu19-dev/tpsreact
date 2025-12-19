import { useSelector } from "react-redux"


export default function Produits(){
  const produits = useSelector(data=>data.r_produits.produits);
  console.log("Contenu de produits:", produits);
  return(
    <div>
      <h1>Liste des produits</h1>
      <table>
        {
          produits.map(p=> 
            <tr key={p.id}>
              <td>{p.title} - {p.price} - {p.qte_stock}</td>
              <td><img src={p.image} alt="imageProduit" /></td>
              <td>Qte: <input type="number"  /></td>
              <td><button>Ajouter au panier</button></td>
            </tr>
          )
        }
      </table>
    </div>
  )
}