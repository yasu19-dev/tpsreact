import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

const productsData = [
  {
    id: 1,
    name: "Fancy Product",
    price: "$80.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    hasSale: false,
  },
  {
    id: 2,
    name: "Special Item",
    price: "$18.00",
    oldPrice: "$20.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    hasSale: true,
  },
  {
    id: 3,
    name: "Sale Item",
    price: "$25.00",
    oldPrice: "$50.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    hasSale: true,
  },
  {
    id: 4,
    name: "Popular Item",
    price: "$40.00",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    hasSale: false,
  }
];
// Conteneur pour afficher les cartes en grille (Flexbox)
const ShopContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px;
  background-color: #f8f9fa; /* Couleur de fond légère comme sur le TP */
`;

const Header = styled.header`
  background-color: #212529;
  color: white;
  padding: 50px 0;
  text-align: center;
  margin-bottom: 20px;

  h1 { font-size: 3rem; margin: 0; }
  p { opacity: 0.6; }
`;

function App() {
  return (
    <div>
      <Navbar/>
      <Header>
        <h1>Shop in style</h1>
        <p>With this shop homepage template</p>
      </Header>
      <ShopContainer>
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ShopContainer>
    </div>
  );
}

export default App;