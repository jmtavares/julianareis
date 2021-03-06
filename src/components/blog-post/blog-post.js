import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactModal from "react-modal";
import { Swipeable } from "react-swipeable";
import styled from "@emotion/styled";
import Layout from "../layout/layout";
import SEO from "../seo";
import leftArrow from "../../images/left-arrow.svg";
import rightArrow from "../../images/right-arrow.svg";
import cancelImg from "../../images/cancel.svg";

const BlogPostContainer = styled.div`
  h1 {
    max-width: 1024px;
    margin: 40px auto;
  }

  .post {
    width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  img {
    cursor: zoom-in;
  }

  @media screen and (max-width: 1200px) {
    h1 {
      padding: 0 20px;
    }
    .post {
      width: 100%;
      padding: 0 20px;
    }
  }
`;

class BlogPost extends React.PureComponent {
  constructor(props) {
    super(props);
    this.blogPostRef = React.createRef();
    this.images = [];
  }

  state = {
    isOpen: false,
    target: null,
    index: 0,
  };

  componentDidMount() {
    this.images = this.blogPostRef.current.querySelectorAll("picture");
    ReactModal.setAppElement(document.getElementById("___gatsby"));

    document.addEventListener("click", this.handleDocumentClick, false);
    document.addEventListener("keydown", this.handleKeydown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick, false);
    document.removeEventListener("keydown", this.handleKeydown, false);
  }

  handleDocumentClick = (event) => {
    if (
      event.target.nodeName === "IMG" &&
      event.target.classList.contains("gatsby-resp-image-image")
    ) {
      const index = Array.prototype.indexOf.call(
        this.images,
        event.target.parentElement
      );
      this.showImage(index);
    }
  };

  handleKeydown = (event) => {
    const { isOpen } = this.state;
    if (!isOpen) return;

    switch (event.keyCode) {
      case 37:
        this.previousImage();
        break;
      case 39:
        this.nextImage();
        break;
    }
  };

  handleSwipe = (event) => {
    switch (event.dir) {
      case "Left":
        this.nextImage();
        break;
      case "Right":
        this.previousImage();
        break;
    }
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false, target: null, index: 0 });
  };

  previousImage = () => {
    if (this.previousButtonEnabled()) {
      const { index } = this.state;
      this.showImage(index - 1);
    }
  };

  nextImage = () => {
    if (this.nextButtonEnabled()) {
      const { index } = this.state;

      this.showImage(index + 1);
    }
  };

  stripImage = (target) => {
    const pictureElement = target.cloneNode(true);
    const imgElement = pictureElement.querySelector("img");
    imgElement.style = "";
    imgElement.classList.remove("gatsby-resp-image-image");

    return pictureElement;
  };

  showImage(index) {
    const target = this.stripImage(this.images[index]);

    this.setState({ index, target: target.outerHTML, isOpen: true });
  }

  previousButtonEnabled() {
    const { index } = this.state;

    return index > 0;
  }

  nextButtonEnabled() {
    const { index } = this.state;

    return index < this.images.length - 1;
  }

  render() {
    const { data } = this.props;
    const { isOpen, target, index } = this.state;
    const post = data.markdownRemark;
    const { title, description, keywords, id } = post.frontmatter;

    return (
      <Layout>
        <SEO
          title={title.toUpperCase()}
          keywords={keywords.split(",")}
          description={description}
        />
        <BlogPostContainer ref={this.blogPostRef} id={id}>
          <h1>{title}</h1>
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </BlogPostContainer>
        <ReactModal
          isOpen={isOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={this.handleCloseModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.95)",
            },
            content: {
              padding: 0,
              border: "none",
              top: 0,
              bottom: 0,
              overflow: "unset",
              background: "unset",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Swipeable onSwiped={this.handleSwipe} className="swipe-container">
            <div
              className="lightbox"
              dangerouslySetInnerHTML={{ __html: target }}
            />
          </Swipeable>
          <button
            type="button"
            className="modal-btn close-btn"
            onClick={this.handleCloseModal}
          >
            <img src={cancelImg} alt="Close" />
          </button>
          {index > 0 && (
            <button
              type="button"
              className="modal-btn navigation-btn previous"
              onClick={this.previousImage}
            >
              <img src={leftArrow} alt="Previous" />
            </button>
          )}
          {index < this.images.length - 1 && (
            <button
              type="button"
              className="modal-btn navigation-btn next"
              onClick={this.nextImage}
            >
              <img src={rightArrow} alt="Next" />
            </button>
          )}
        </ReactModal>
      </Layout>
    );
  }
}

BlogPost.propTypes = {
  data: PropTypes.object,
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
        id
      }
    }
  }
`;
