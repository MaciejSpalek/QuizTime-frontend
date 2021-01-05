import styled from "styled-components";
import colors from "styles/Colors";
import { FlexCenter } from "styles/Mixins";
import { Puzzles } from "assets";

export const StyledWrapper = styled.div`
  ${FlexCenter}
  width: auto;
  height: auto;
  cursor: pointer;
`;

export const StyledLogo = styled(Puzzles)`
  fill: ${colors.BasicGreen};
  width: 40px;
  margin: 5px 5px 0 0;
`;

export const StyledText = styled.span`
  color: ${colors.Gray20};
  font-size: 28px;
  font-weight: bold;
  margin-top: 5px;
`;
