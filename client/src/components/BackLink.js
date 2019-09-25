import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const BackLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  color: black;
`;

const Back = styled.div`
  text-decoration: none;
  color: black;
  padding: 10px;
  background: papayawhip;
`;

const BackLink = ({ history }) => {
  return (
    <BackLinkContainer>
      <Back onClick={() => history.goBack()}>
        <i className="material-icons">keyboard_backspace</i>
      </Back>
    </BackLinkContainer>
  );
};

export default withRouter(BackLink);
