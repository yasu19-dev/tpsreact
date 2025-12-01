import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  width: 250px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden; /* Pour que l'image respecte les bords arrondis */
  margin: 15px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-family: sans-serif;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: #dee2e6;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

const PriceContainer = styled.div`
  margin-bottom: 10px;
`;

const CurrentPrice = styled.span`
  font-weight: bold;
  color: #333;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  margin-right: 8px;
  font-size: 0.9rem;
`;

const ActionButton = styled.button`
  background-color: transparent;
  color: #333;
  border: 1px solid #333;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

const SaleBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: black;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;


const ProductCard = ({ product }) => {
  return (
    <CardContainer>

      {product.hasSale && <SaleBadge>Sale</SaleBadge>}
      
      <ProductImage src={product.image} alt={product.name} />
      
      <ContentWrapper>
        <ProductName>{product.name}</ProductName>
        <PriceContainer>
          {product.oldPrice && <OldPrice>{product.oldPrice}</OldPrice>}
          <CurrentPrice>{product.price}</CurrentPrice>
        </PriceContainer>
        
        <ActionButton>Add to cart</ActionButton>
      </ContentWrapper>
    </CardContainer>
  );
};

export default ProductCard;