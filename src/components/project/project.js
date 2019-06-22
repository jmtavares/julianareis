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
        <div className="project">
            <Link to={node.fields.slug} className="link">
                <Img
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    imgStyle={imgStyle}
                />
            </Link>
        </div>
    );
};

Project.propTypes = {
    node: PropTypes.object
};

export default Project;
