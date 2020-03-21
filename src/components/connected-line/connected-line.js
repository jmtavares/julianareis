import PropTypes from "prop-types";
import React from "react";
import "./connected-line.less";

const ConnectedLine = ({ options }) => (
  <div className="connected-line">
    {options.map((option, index) => (
      <div className={`line i${index}`} key={index}>
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
  options: PropTypes.array,
};

ConnectedLine.defaultProps = {
  options: [],
};

export default ConnectedLine;
