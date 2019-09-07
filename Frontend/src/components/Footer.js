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
`;

const ExternalLink = styled.a`
  text-decoration: underline;
  padding-left: 10px;
  color: black;
  font-size: 15px;
`;

const Navbar = () => {
  return (
    <Footer>
      <Text>&copy; 2019 Built by Naima Shaikh. Check out the code on</Text>
      <ExternalLink href="https://github.com/naimiii/Blog">Github</ExternalLink>.
    </Footer>
  );
};

export default Navbar;
