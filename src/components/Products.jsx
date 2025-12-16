import Product from './Product';
function Products(props) {
  return (
    <main className="container">
      <h1>Ordinateurs portables</h1>
      <div className="row mb-2">
        {props.products.map((product) => (
          <Product key={product.id} id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} />
        ))}
      </div>
    </main>
  )
}
export default Products;