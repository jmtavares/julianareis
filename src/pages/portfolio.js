import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const PortfolioPage = () => (
    <Layout>
        <SEO
            title="Portfolio"
            keywords={[
                "design",
                "sketch",
                "designer",
                "photography",
                "education",
                "experience",
                "portfolio"
            ]} />
        <div className="portfolio">
            <h1>Portfolio</h1>
        </div>
    </Layout>
);

export default PortfolioPage;
