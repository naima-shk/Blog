import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: black;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px;
  background: papayawhip;
`;

const BackLink = () => {
  return (
    <BackLinkContainer>
      <NavLink to="/">Back to Home page!</NavLink>
    </BackLinkContainer>
  );
};

export default BackLink;
