import styled from "styled-components";
import colors from "styles/Colors";
import { FlexColumn } from "styles/Mixins";

export const StyledWrapper = styled.div`
  ${FlexColumn};
`;

export const StyledStepWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  background-color: ${colors.Gray120};
`;
