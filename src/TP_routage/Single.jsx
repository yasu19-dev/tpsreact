import { Link, useParams } from "react-router-dom"

function Single(props){
    const {id} = useParams();
    const product = props.produits.find((p) => p.id === parseInt(id));
    return(
        <div className="col">
              <div className="card shadow-sm"> 
                    <img  className="bd-placeholder-img card-img-top" src={`pictures/${product.thumbnail}`} alt=''/>
                <div className="card-body">
                  <p className="card-title">{product.title}</p>
                  <p className="card-text">{product.price}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link tp={'/'}>Aller vers la page d'acceuil</Link>
                    </div>
              </div>
            </div> 
          </div>
        </div>
    )
}

export default Single
