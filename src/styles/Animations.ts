import { keyframes } from "styled-components";

export const twinkleScale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
`;

export const increaseScale = keyframes` 
  from {
    transform: scale(0);
  } to {
    transform: scale(1);
  }
`;

export const increaseOpacity = keyframes` 
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;


