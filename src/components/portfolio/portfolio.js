import React from "react";
import PropTypes from "prop-types";
import Project from "../project/project";
import "./portfolio.less";

const Portfolio = ({ posts, showTitle }) => {
    return (
        <div className="portfolio">
            {showTitle && <h1>Portfolio</h1>}
            <div className="projects-list">
                {posts.edges.map(({ node }) => (
                    <Project node={node} key={node.fields.slug} />
                ))}
            </div>
        </div>
    );
};

Portfolio.propTypes = {
    posts: PropTypes.object,
    showTitle: PropTypes.bool
};

export default Portfolio;
