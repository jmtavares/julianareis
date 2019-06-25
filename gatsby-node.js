/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/components/blog-post/blog-post.js`);
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                {
                    allMarkdownRemark(
                        sort: { order: DESC, fields: [frontmatter___date] }
                        limit: 1000
                    ) {
                        edges {
                            node {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                }
                            }
                        }
                    }
                }
            `).then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    return reject(result.errors);
                }
                const blogTemplate = path.resolve(
                    "./src/components/blog-post/blog-post.js"
                );

                // Create blog posts pages.
                const posts = result.data.allMarkdownRemark.edges;

                posts.forEach((post, index) => {
                    const previous = index === posts.length - 1 ? null : posts[index + 1].node
                    const next = index === 0 ? null : posts[index - 1].node
                    createPage({
                        path: post.node.fields.slug,
                        component: blogTemplate,
                        context: {
                            slug: post.node.fields.slug,
                            previous,
                            next,
                        } // additional data can be passed via context
                    });
                });
            })
        );
    });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};
