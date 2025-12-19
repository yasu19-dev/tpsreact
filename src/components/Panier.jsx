import { ADD_PANIER } from '../store/actions2';
import { UPDATE_QTE } from '../store/actions1';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 

export default function Panier() {
    const Produits = useSelector(date=>date.r_produits.produit)
    const panier = useSelector(date=>date.r_panier.produit)
        const  [qte,setQte] = useState(0);
        const dispatch=useDispatch();
        const[qteTotal,setQteTotal] = useState(0);
        const [prixTotal,setPrixTotal] = useState(0);
        
            function ajouter(id,price){
                dispatch(ADD_PANIER(id,qte))
                dispatch(UPDATE_QTE(id,qte))
                setQteTotal(qteTotal+qte)
                setPrixTotal(prixTotal+(price*qte))
            }
    return(
         
        <div>
            <h1>Contenue du panier</h1>
            <table>
            {
                panier.map(p=> {
                    const pr= Produits.find(prd=>prd.id===p.id)
                    return(<tr key={p.id}>
                        <td>{pr.title}-  {pr.price} - {pr.stock}</td>
                        <td><img src={pr.image}width={60} height={40} alt="" /></td>
                        <td>Qte :<input type="number" value={p.qte_cmd}/></td>
                        <td><button>Supprimer</button></td>
                        <td><button>Modifier</button></td>
                    </tr>)}
                )
            }
            </table>
            <p>Qte : {qteTotal}</p>
            <p>Prix Total : {prixTotal}</p>
        </div>
    )
}
