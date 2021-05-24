import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Grow = keyframes`
0% {
  height: 0;
}

100% {
  height: 90px;
}
`;

const Fade = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

const ConnectedLineContainer = styled.div`
  margin-bottom: 40px;

  .line {
    position: relative;
    height: 90px;
    font-size: 14px;
    opacity: 0;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 100px;
      width: 2px;
      background: #0f7c79;
      z-index: -1;
      height: 90px;
    }
    &.i0 {
      animation: ${Fade} 2s;
      animation-fill-mode: forwards;
      &::before {
        height: 0;
        background: linear-gradient(to bottom, transparent 20%, #0f7c79 75%);
        animation: ${Grow} 3s;
        animation-fill-mode: forwards;
      }
    }

    &.i1 {
      animation: ${Fade} 2s 2s;
      animation-fill-mode: forwards;
      &::before {
        height: 0;
        animation: ${Grow} 3s 2s;
        animation-fill-mode: forwards;
      }
    }

    &.i2 {
      animation: ${Fade} 2s 4s;
      animation-fill-mode: forwards;
      &::before {
        height: 0;
        animation: ${Grow} 3s 4s;
        animation-fill-mode: forwards;
      }
    }

    &.i3 {
      animation: ${Fade} 2s 6s;
      animation-fill-mode: forwards;
      &::before {
        height: 0;
        animation: ${Grow} 3s 6s;
        animation-fill-mode: forwards;
      }
    }

    &.i4 {
      animation: ${Fade} 2s 8s;
      animation-fill-mode: forwards;
      &::before {
        height: 0;
        animation: ${Grow} 3s 8s;
        animation-fill-mode: forwards;
      }
    }

    &.i5 {
      animation: ${Fade} 2s 10s;
      animation-fill-mode: forwards;
      &::before {
        height: 0;
        animation: ${Grow} 3s 10s;
        animation-fill-mode: forwards;
      }
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  bottom: 0;
  left: 96px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: #0f7c79;
`;

const Dates = styled.div`
  position: absolute;
  left: 0;
  bottom: -5px;
  font-size: 15px;
  width: 90px;
  text-align: right;
`;

const RightSection = styled.div`
  position: absolute;
  left: 120px;
  bottom: -23px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 500;
  color: #0f7c79;
`;

const ConnectedLine = ({ options }) => (
  <ConnectedLineContainer>
    {options.map((option, index) => (
      <div className={`line i${index}`} key={index}>
        <Circle />
        <Dates>{option.date}</Dates>
        <RightSection>
          <Title>{option.title}</Title>
          <div>{option.subtitle}</div>
        </RightSection>
      </div>
    ))}
  </ConnectedLineContainer>
);

ConnectedLine.propTypes = {
  options: PropTypes.array,
};

ConnectedLine.defaultProps = {
  options: [],
};

export default ConnectedLine;
