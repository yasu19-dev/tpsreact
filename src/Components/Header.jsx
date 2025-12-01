import React from 'react';
import styled from 'styled-components';


const HeaderContainer = styled.header`
  background-color: #212529;
  padding: 5rem 0;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5); /* Couleur gris clair */
`;


const Header = () => {
    return (
        <HeaderContainer>
            <Title>Shop in style</Title>
            <Subtitle>With this shop hompeage template</Subtitle>
        </HeaderContainer>
    );
};

export default Header;