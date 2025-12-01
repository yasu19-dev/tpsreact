import React from 'react';
import styled from 'styled-components';

// --- STYLES ---
const Card = styled.div`
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  overflow: hidden;
  position: relative; /* Pour positionner le badge */
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  background-color: #dee2e6; /* Gris placeholder */
`;

const Badge = styled.div`
  background-color: #212529;
  color: white;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  z-index: 1;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  text-align: center;
  flex-grow: 1; /* Pousse le footer vers le bas */
`;

const ProductTitle = styled.h5`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const PriceContainer = styled.div`
  margin-bottom: 1rem;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #6c757d;
  margin-right: 0.5rem;
`;

const CardFooter = styled.div`
  padding: 1.5rem;
  background-color: transparent;
  border-top: none;
  text-align: center;
  margin-top: auto; /* S'assure que le bouton est toujours en bas */
`;

const Button = styled.button`
  background-color: transparent;
  color: #212529;
  border: 1px solid #212529;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #212529;
    color: white;
  }
`;

// --- COMPOSANT ---
const ProductCard = ({ title, price, oldPrice, isSale }) => {
    return (
        <Card>
            {/* Affichage conditionnel du badge */}
            {isSale && <Badge>Sale</Badge>}
            
            <ProductImage src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Produit" />
            
            <CardBody>
                <ProductTitle>{title}</ProductTitle>
                
                {/* Notation des étoiles (Optionnel, simplifié ici) */}
                {title === "Special Item" || title === "Popular Item" ? (
                   <div style={{color: "#ffc107", marginBottom: "0.5rem"}}>★★★★★</div> 
                ) : null}

                <PriceContainer>
                    {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
                    {price}
                </PriceContainer>
            </CardBody>

            <CardFooter>
                <Button>{title === "Fancy Product" ? "View options" : "Add to cart"}</Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;