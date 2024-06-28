// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  font-size: 18px;

  a {
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    transition: background-color 0.3s, color 0.3s;
    display: inline-block;

    &:hover {
      background-color: #555;
      color: #fff;
      border-radius: 4px;
    }

    @media (max-width: 600px) {
      width: 100%;
      text-align: center;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 600px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    transform: rotate(-45deg) translate(-5px, 5px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: rotate(45deg) translate(-5px, -5px);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>Toko Tulus 🍭</Logo>
      <MenuIcon onClick={toggleMenu} className={isOpen ? 'change' : ''}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </MenuIcon>
      <NavList isOpen={isOpen}>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/products">Products</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
        <NavItem><Link to="/cart">Cart</Link></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
