import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "./project.less";

const Project = ({ node }) => {
    const imgStyle = {
        objectFit: "cover",
        objectPosition: node.frontmatter.imageposition
    };

    return (
        <div className="project" id={node.frontmatter.id}>
            <Link to={node.fields.slug} className="link">
                {node.frontmatter.image ? (
                    <Img
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                        imgStyle={imgStyle}
                    />
                ) : (
                    <div className="description-no-image">
                        {node.frontmatter.title}
                    </div>
                )}
                <div className="description">{node.frontmatter.title}</div>
            </Link>
        </div>
    );
};

Project.propTypes = {
    node: PropTypes.object
};

export default Project;
