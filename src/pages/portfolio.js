import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PortfolioPage = ({ data }) => {
    const postList = data.allMarkdownRemark;

    return (
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
                ]}
            />
            <div className="portfolio">
                <h1>Portfolio</h1>
                {postList.edges.map(({ node }) => (
                    <Link
                        to={node.fields.slug}
                        className="link"
                        key={node.fields.slug}
                    >
                        <div className="post-list">
                            <h1>{node.frontmatter.title}</h1>
                            <span>{node.frontmatter.date}</span>
                            <p>{node.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    );
};

PortfolioPage.propTypes = {
    data: PropTypes.object
};

export default PortfolioPage;

export const listQuery = graphql`
    query ListQuery {
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
                    }
                }
            }
        }
    }
`;
