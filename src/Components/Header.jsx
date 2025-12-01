import React from "react";
import styled from 'styled-components';


const HeaderContainer = styled.header `
background-color: #212529;
padding: 5rem 0;
text-align: center;
color: white;
`;
const Titre = styled.h1`
font-size: 3.5rem;
font-weight: 700;
margin-bottom: 0.5rem;
`;
const Paragraphe = styled.p`
font-size: 1.25rem;
font-weight: 400;
color: rgba(255, 255, 255, 0, 5);
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Titre>Shop in style</Titre>
            <Paragraphe>With this shop homepage template</Paragraphe>
        </HeaderContainer>
    );
};

export default Header;