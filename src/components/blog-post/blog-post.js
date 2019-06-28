import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactModal from "react-modal";
import Layout from "../layout/layout";
import SEO from "../seo";
import "./blog-post.less";
import "./modal.less";
import leftArrow from "../../images/left-arrow.svg";
import rightArrow from "../../images/right-arrow.svg";
import cancelImg from "../../images/cancel.svg";

class BlogPost extends React.PureComponent {
    constructor(props) {
        super(props);
        this.blogPostRef = React.createRef();
        this.images = [];
    }

    state = {
        isOpen: false,
        target: null,
        index: 0
    };

    componentDidMount() {
        this.images = this.blogPostRef.current.querySelectorAll("img");
        ReactModal.setAppElement(document.getElementById("___gatsby"));

        document.addEventListener("click", this.handleDocumentClick, false);
        document.addEventListener("keydown", this.handleKeydown, false);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleDocumentClick, false);
        document.removeEventListener("keydown", this.handleKeydown, false);
    }

    handleDocumentClick = event => {
        if (event.target.nodeName === "IMG") {
            const index = Array.prototype.indexOf.call(
                this.images,
                event.target
            );
            this.showImage(index);
        }
    };

    handleKeydown = event => {
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

    stripImage = target => {
        const imgElement = target.cloneNode(true);
        imgElement.style = "";
        imgElement.classList.remove("gatsby-resp-image-image");

        return imgElement;
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
        const { title, description, keywords } = post.frontmatter;

        return (
            <Layout>
                <SEO
                    title={title.toUpperCase()}
                    keywords={keywords.split(",")}
                    description={description}
                />
                <div className="blog-post" ref={this.blogPostRef}>
                    <h1>{title}</h1>
                    <div
                        className="post"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </div>
                <ReactModal
                    isOpen={isOpen}
                    shouldCloseOnOverlayClick={false}
                    onRequestClose={this.handleCloseModal}
                    style={{
                        overlay: {
                            backgroundColor: "rgba(0, 0, 0, 0.95)"
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
                            alignItems: "center"
                        }
                    }}
                >
                    <div
                        className="lightbox"
                        dangerouslySetInnerHTML={{ __html: target }}
                    />
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
