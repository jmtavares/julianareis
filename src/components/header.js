import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => <header style={{}} />;

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
