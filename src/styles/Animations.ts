import { keyframes } from "styled-components";

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
