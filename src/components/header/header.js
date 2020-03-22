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
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    height: 60px;
    padding: 0 20px;
  }
`;

const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
  &:hover {
    opacity: 0.8;
  }
`;

const Menus = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  color: #222;
  text-decoration: none;
  padding: 10px 5px;
  border-left: 5px solid transparent;
  font-size: 15px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: #0f7c79;
    height: 2px;
    transition-property: "left, right";
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover,
  &:focus,
  &:active,
  &.active {
    &::before {
      left: 0;
      right: 0;
    }
  }
`;

const Header = () => (
  <HeaderComponent>
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </LogoContainer>

    <Menus>
      <StyledLink to="/" activeClassName="active">
        Hello
      </StyledLink>

      <StyledLink to="/portfolio/" activeClassName="active">
        Portfolio
      </StyledLink>

      <StyledLink to="/about/" activeClassName="active">
        About
      </StyledLink>
    </Menus>
  </HeaderComponent>
);

export default Header;
