import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import "./blog-post.less";

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;
    const { title, description, keywords } = post.frontmatter;

    return (
        <Layout>
            <SEO
                title={title}
                keywords={keywords.split(",")}
                description={description}
            />
            <div className="blog-post">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    );
};

BlogPost.propTypes = {
    data: PropTypes.object
};

export default BlogPost;

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                description
                keywords
            }
        }
    }
`;
