import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import PageTransition from 'gatsby-plugin-page-transitions';
import Header from "../header/header";
import "./layout.less";

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
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <PageTransition defaultStyle={{
                    transition: `opacity ${1000}ms ease-in-out`,
                    opacity: 0,
                  }}
                  transitionStyles={{
                    entering: { opacity: 1 },
                    entered:  { opacity: 1 },
                    exiting:  { opacity: 0 },
                    exited:  { opacity: 0 },
                  }}>
                    <div>
                        <main>{children}</main>
                    </div>
                </PageTransition>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
