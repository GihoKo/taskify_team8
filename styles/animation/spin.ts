import { css, keyframes } from 'styled-components';

const spinKeyframes = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const dashKeyframes = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const spin = css`
  animation: ${spinKeyframes} 2s linear infinite;
`;

const dash = css`
  animation: ${dashKeyframes} 1.5s ease-in-out infinite;
`;

export { spin, dash };
