import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';

// Conteneur principal de la page
const MainContainer = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

// Section grille des produits
const Section = styled.section`
  padding: 3rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

// Utilisation de CSS Grid pour la mise en page responsive
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Mobile: 1 colonne */
  gap: 1.5rem;
  
  /* Tablette: 2 colonnes */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Desktop moyen: 3 colonnes */
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  /* Grand écran: 4 colonnes (comme sur l'image source) */
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Navigation simplifiée (Styled)
const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #f8f9fa;
    align-items: center;
`;

function App() {
  const products = [
    { id: 1, title: "Fancy Product", price: "$40.00 - $80.00", isSale: false },
    { id: 2, title: "Special Item", price: "$18.00", oldPrice: "$20.00", isSale: true },
    { id: 3, title: "Sale Item", price: "$25.00", oldPrice: "$50.00", isSale: true },
    { id: 4, title: "Popular Item", price: "$40.00", isSale: false },
    // On peut dupliquer pour remplir la grille
    { id: 5, title: "Sale Item", price: "$25.00", oldPrice: "$50.00", isSale: true },
    { id: 6, title: "Fancy Product", price: "$120.00 - $280.00", isSale: false },
    { id: 7, title: "Special Item", price: "$18.00", oldPrice: "$20.00", isSale: true },
    { id: 8, title: "Popular Item", price: "$40.00", isSale: false },
  ];

  return (
    <MainContainer>
      {/* Navigation Rapide */}
      <Navbar>
          <div style={{fontWeight: 'bold'}}>Start Bootstrap</div>
          <button style={{padding: '0.5rem 1rem', border: '1px solid black', borderRadius: '5px', background: 'transparent'}}>
             Cart 🛒 <span style={{background: 'black', color: 'white', borderRadius: '50%', padding: '0 5px'}}>0</span>
          </button>
      </Navbar>

      <Header />
      
      <Section>
        <Container>
          <Grid>
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                isSale={product.isSale}
              />
            ))}
          </Grid>
        </Container>
      </Section>
      
      {/* Footer Rapide */}
      <footer style={{background: '#212529', color: 'white', padding: '3rem 0', textAlign: 'center'}}>
        Copyright © Your Website 2022
      </footer>

    </MainContainer>
  );
}

export default App;