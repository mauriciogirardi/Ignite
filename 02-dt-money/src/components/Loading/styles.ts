import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0%,100%{
    stroke-dashoffset: 188;
  }
  50% {
    stroke-dashoffset: 0;
  }
  51% {
    stroke-dashoffset: 378;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    position: relative;
    width: 80px;
    height: 80px;
    animation: ${rotate} 2s linear infinite;

    circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke-width: 5;
      stroke: var(--green);
      stroke-linecap: round;
      transform: translate(5px, 5px);
      stroke-dasharray: 189;
      stroke-dashoffset: 189;
      animation: ${animate} 4s linear infinite;
    }
  }
`;
