import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const ViewPortfolioContainer = styled.div`
    display: flex;
    margin: 50px 0;
    justify-content: center;
`;

const Button = styled.button`
    border: none;
    background-color: #0f7c79;
    color: #ffffff;
    border-radius: 3px;
    font-size: 16px;
    line-height: 20px;
    padding: 10px 26px;
    opacity: 1;
    cursor: pointer;
    outline: none;
    &:hover {
        opacity: 0.8;
    }
`;

const ViewPortfolio = () => (
    <ViewPortfolioContainer>
        <Link to="/portfolio/" className="link">
            <Button type="button">View Portfolio</Button>
        </Link>
    </ViewPortfolioContainer>
);

export default ViewPortfolio;
