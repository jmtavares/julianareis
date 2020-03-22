import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

const ProjectContainer = styled.div`
  height: 400px;
  position: relative;
  &:hover,
  &:active {
    .description {
      opacity: 1;
    }
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1023px) {
    height: 300px;
  }

  @media screen and (max-width: 800px) {
    height: 250px;
  }

  @media screen and (max-width: 320px) {
    height: 200px;
  }
`;

const DescriptionNoImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
  text-transform: uppercase;
  font-weight: 500;
`;

const Description = styled.div`
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
  text-transform: uppercase;
  font-weight: 500;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const Project = ({ node }) => {
  const imgStyle = {
    objectFit: "cover",
    objectPosition: node.frontmatter.imageposition,
  };

  return (
    <ProjectContainer id={node.frontmatter.id}>
      <Link to={node.fields.slug} className="link">
        {node.frontmatter.image ? (
          <Img
            fluid={node.frontmatter.image.childImageSharp.fluid}
            imgStyle={imgStyle}
          />
        ) : (
          <DescriptionNoImage>{node.frontmatter.title}</DescriptionNoImage>
        )}
        <Description className="description">
          {node.frontmatter.title}
        </Description>
      </Link>
    </ProjectContainer>
  );
};

Project.propTypes = {
  node: PropTypes.object,
};

export default Project;
