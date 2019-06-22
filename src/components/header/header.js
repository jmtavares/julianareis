import React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.svg";
import "./header.less";

const Header = () => (
    <header>
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
        </div>

        <div className="menus">
            <Link to="/" className="link" activeClassName="active">
                Hello
            </Link>

            <Link to="/portfolio/" className="link" activeClassName="active">
                Portfolio
            </Link>

            <Link to="/about/" className="link" activeClassName="active">
                About
            </Link>
        </div>
    </header>
);

export default Header;
