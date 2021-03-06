import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import resume from "../assets/Resume/Naima-Shaikh-CV.pdf";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const PageLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px;
  font-size: 18px;
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 10px;
  font-size: 18px;
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <PageLink to="/about">About</PageLink>
        <PageLink to="/blog">Blog</PageLink>
        <ExternalLink href="https://github.com/naima-shk">Github</ExternalLink>
        <ExternalLink href="https://twitter.com/NaimaShaykh">
          Twitter
        </ExternalLink>
        <ExternalLink href="mailto:naimashaikh550@gmail.com?subject=Contact Form">
          Contact
        </ExternalLink>
        <ExternalLink href={resume}>Resume</ExternalLink>
      </Nav>
    </Container>
  );
};

export default Navbar;
