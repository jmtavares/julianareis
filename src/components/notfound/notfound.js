import React from "react";
import styled from "@emotion/styled";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NotFoundPage = () => (
  <NotFoundContainer>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </NotFoundContainer>
);

export default NotFoundPage;
