import styled from "styled-components";
import colors from "styles/colors";
import { FlexCenter } from "styles/mixins";
import { Puzzles } from "assets";

export const StyledWrapper = styled.h1`
  ${FlexCenter}
  width: auto;
`;

export const StyledLogo = styled(Puzzles)`
  fill: ${colors.BasicGreen};
  width: 48px;
  margin: 5px 5px 0 0;
`;

export const StyledText = styled.span`
  color: ${colors.Gray20};
  font-size: 28px;
  font-weight: bold;
  margin-top: 5px;
`;
