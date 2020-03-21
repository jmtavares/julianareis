import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Project from "../project/project";

const Title = styled.h1`
  max-width: 1024px;
  margin: 40px auto;

  @media screen and (max-width: 1023px) {
    padding: 0 20px;
  }
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Portfolio = ({ posts, showTitle }) => {
  return (
    <div className="portfolio">
      {showTitle && <Title>Portfolio</Title>}
      <ProjectsList>
        {posts.edges.map(({ node }) => (
          <Project node={node} key={node.fields.slug} />
        ))}
      </ProjectsList>
    </div>
  );
};

Portfolio.propTypes = {
  posts: PropTypes.object,
  showTitle: PropTypes.bool,
};

export default Portfolio;
