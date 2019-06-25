import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Portfolio from "../components/portfolio/portfolio";

const PortfolioPage = ({ data }) => {
    const posts = data.allMarkdownRemark;

    return (
        <Layout>
            <SEO
                title="Portfolio"
                keywords={["projects"]}
            />
            <Portfolio posts={posts} showTitle />
        </Layout>
    );
};

PortfolioPage.propTypes = {
    data: PropTypes.object
};

export default PortfolioPage;

export const PortfolioQuery = graphql`
    query PortfolioQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
