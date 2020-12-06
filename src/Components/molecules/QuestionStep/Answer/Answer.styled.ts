import Paragraph from "Components/atoms/Paragraph";
import styled from "styled-components";
import colors from "styles/colors";
import { FlexCenter } from "styles/mixins";

export const StyledAnswer = styled.div`
  position: relative;
  ${FlexCenter};
  justify-content: flex-start;
  align-self: center;
  width: 100%;
  min-height: 65px;
  /* margin-bottom: 10px; */
  padding: 0 18px;
`;

export const StyledLegend = styled.span`
  position: absolute;
  top: -12px;
  left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.Gray20};
  background-color: ${colors.White};
  padding: 0 10px;
`;

export const StyledContent = styled.span`
  color: ${colors.Gray40};
  font-weight: normal;
  font-size: 16px;
`;
