import React from 'react';
import styled from 'styled-components';


const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px; 
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  font-family: sans-serif;
`;
const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px; 
`;

const Brand = styled.a`
  font-size: 1.25rem;
  font-weight: bold;
  color: #212529;
  text-decoration: none;
  cursor: pointer;
`;

const MenuLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;

  li a {
    text-decoration: none;
    color: #555; 
    font-weight: 500;
    transition: color 0.2s;
  }
`;

const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: white;
  border: 1px solid #212529;
  border-radius: 4px;
  padding: 8px 15px;
  cursor: pointer;
  font-weight: 500;
  }
`;

const Badge = styled.span`
  background-color: #212529;
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 0.8rem;
  
`;

const Navbar = () => {
  return (
    <NavContainer>
      <LeftSection>
        <Brand href="#">Start Bootstrap</Brand>
        <MenuLinks>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Shop ▼</a></li>
        </MenuLinks>
      </LeftSection>
      <CartButton>
        <span>🛒</span>
        Cart
        <Badge>0</Badge>
      </CartButton>
    </NavContainer>
  );
};
export default Navbar;