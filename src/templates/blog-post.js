import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import './blog-post.less';

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;
    const { title } = post.frontmatter;

    return (
        <Layout>
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
            }
        }
    }
`;
