import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import About from "../components/about/about";

const IndexPage = () => (
    <Layout>
        <SEO
            title="Juliana Reis"
            keywords={[
                "design",
                "sketch",
                "cv",
                "designer",
                "photography",
                "education",
                "experience",
                "web",
                "react"
            ]}
        />
        <About />
    </Layout>
);

export default IndexPage;
