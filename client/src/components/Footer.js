import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

const Text = styled.span`
  font-size: 15px;
  color: black;
  padding-left: 10px;
`;

const ExternalLink = styled.a`
  text-decoration: underline;
  color: black;
  font-size: 15px;
  padding-left: 10px;
`;

const Navbar = () => {
  return (
    <Footer>
      <Text>&copy; 2019 Built by Naima Shaikh.</Text>
      <Text>
        Check out the code on
        <ExternalLink href="https://github.com/naimiii/Blog">
          Github
        </ExternalLink>
        .
      </Text>
    </Footer>
  );
};

export default Navbar;
