import React from "react";
import { Link } from "gatsby";
import "./view-portfolio.less";

const ViewPortfolio = () => (
    <div className="view-portfolio">
        <Link to="/portfolio/" className="link">
            <button type="button">View Portfolio</button>
        </Link>
    </div>
);

export default ViewPortfolio;
