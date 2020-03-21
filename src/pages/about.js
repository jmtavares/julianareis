import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import About from "../components/about/about";

const IndexPage = () => (
  <Layout>
    <SEO
      title="About"
      description="About"
      keywords={[
        "cv",
        "photography",
        "education",
        "experience",
        "InDesign",
        "Photoshop",
        "CorelDraw",
        "Illustrator",
      ]}
    />
    <About />
  </Layout>
);

export default IndexPage;
