import styled from "styled-components";
import colors from "styles/colors";
import { FlexCenter } from "styles/mixins";

export const StyledContainer = styled.div`
  position: relative;
  width: auto;
  height: auto;
  margin-bottom: 20px;
`;

export const StyledSVG = styled.svg``;

export const StyledCircle = styled.circle<{color: string}>`
  :first-of-type {
    stroke-width: 10;
    stroke-linecap: round;
    stroke: ${({ color }) => color ? color : colors.BasicGreen};
    fill: none;
    transform: rotate(270deg);
    transform-origin: center;
  }

  :nth-of-type(2) {
    stroke-width: 10;
    stroke: ${colors.Gray80};
    fill: none;
  }
`;

export const StyledWrapper = styled.div`
  ${FlexCenter};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ;
  flex-direction: column;
`;

export const StyledText = styled.p`
    font-size: 36px;
  color: ${colors.Gray20};
`;

export const StyledScore = styled.span<{color: string}>`
  font-size: 64px;
  color: ${({ color }) => color ? color : colors.BasicGreen};
`;
