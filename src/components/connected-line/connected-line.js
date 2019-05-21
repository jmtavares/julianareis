import PropTypes from "prop-types";
import React from "react";
import "./connected-line.less";

const ConnectedLine = ({ options }) => (
    <div className="connected-line">
        {options.map(option => (
            <div className="line">
                <div className="circle" />
                <div className="dates">{option.date}</div>
                <div className="right-section">
                    <div className="title">{option.title}</div>
                    <div className="subtitle">{option.subtitle}</div>
                </div>
            </div>
        ))}
    </div>
);

ConnectedLine.propTypes = {
    options: PropTypes.array
};

export default ConnectedLine;
