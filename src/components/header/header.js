import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import logo from "../../images/logo.svg";

const HeaderComponent = styled.header`
  display: flex;
  max-width: 1024px;
  height: 100px;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    height: 80px;
    padding: 0 20px;
  }
`;

const LogoContainer = styled.div`
  width: 60px;
  height: 60px;
  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => (
  <HeaderComponent>
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </LogoContainer>
  </HeaderComponent>
);

export default Header;
