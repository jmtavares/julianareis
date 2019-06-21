import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import './index.less';
import Hello from '../components/hello/hello';

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
        <Hello />
    </Layout>
);

export default IndexPage;
