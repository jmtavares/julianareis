import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Hello from "../components/hello/hello";
import Portfolio from "../components/portfolio/portfolio";
import ViewPortfolio from "../components/view-portfolio/view-portfolio";

const IndexPage = ({ data }) => {
    const posts = data.allMarkdownRemark;

    return (
        <Layout>
            <SEO
                title="Juliana Reis"
                keywords={[]}
            />
            <Hello />
            <Portfolio posts={posts} showTitle={false} />
            <ViewPortfolio />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.object
};

export default IndexPage;

export const IndexQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 4
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM Do YYYY")
                        title
                        imageposition
                        image {
                            childImageSharp {
                                resize(width: 1500, height: 1500) {
                                    src
                                }
                                fluid(maxWidth: 786, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
