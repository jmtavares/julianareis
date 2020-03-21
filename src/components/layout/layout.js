import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/core";
import Header from "../header/header";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Global
          styles={css`
            html {
              box-sizing: border-box;
              overflow-y: unset;
              font-family: "Nunito", "Open Sans", Helvetica, Arial, sans-serif;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            }

            body {
              color: hsla(0, 0%, 0%, 0.8);
              font-weight: normal;
              word-wrap: break-word;
              margin: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              overflow-y: scroll;
              &.ReactModal__Body--open {
                position: fixed;
                overflow-y: hidden;
                background-color: #000000;
              }
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              text-transform: uppercase;
              color: hsla(0, 0%, 0%, 0.8);
              font-weight: normal;
            }

            ul {
              list-style: none;
              margin: 0;
              padding: 0;
            }

            .ReactModal__Overlay {
              opacity: 0;
            }

            .ReactModal__Overlay--after-open {
              opacity: 1;
            }

            .ReactModal__Overlay--before-close {
              opacity: 0;
            }

            .modal-btn {
              position: fixed;
              height: 40px;
              width: 40px;
              cursor: pointer;
              border: none;
              outline: none;
              opacity: 0.8;
              background-color: transparent;
              padding: 0;
              margin: 0;
              &:hover {
                opacity: 1;
              }
              img {
                pointer-events: none;
              }
            }

            .close-btn {
              right: 20px;
              top: 20px;
              img {
                width: 25px;
                height: 25px;
              }
            }

            .navigation-btn {
              top: 50%;
              &.next {
                right: 20px;
              }
              &.previous {
                left: 20px;
              }
              img {
                width: 30px;
                height: 30px;
              }
            }

            @media screen and (max-width: 800px) {
              .navigation-btn {
                display: none;
              }
              .close-btn {
                right: 10px;
                top: 10px;
              }
            }

            .lightbox {
              img {
                display: block;
                width: unset !important;
                height: unset !important;
                max-height: 100vh;
                max-width: 100vw;
                margin: 0 auto;
                pointer-events: none;
              }
            }

            .swipe-container {
              width: 100vw;
            }
          `}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
