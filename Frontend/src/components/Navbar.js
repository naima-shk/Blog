import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;
  color: palevioletred;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px;
  background: papayawhip;
`;

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/Social">Social</NavLink>
        <NavLink href="mailto:naimashaikh550@gmail.com?subject=Contact Form">
          Contact
        </NavLink>
      </Nav>
    </Container>
  );
};

export default Navbar;
