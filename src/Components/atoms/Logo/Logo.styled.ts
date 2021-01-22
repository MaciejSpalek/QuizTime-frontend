import styled from "styled-components";
import colors from "styles/Colors";
import { FlexCenter } from "styles/Mixins";
import { Puzzles } from "assets";
import Link from "../Link";

export const StyledWrapper = styled(Link)`
  ${FlexCenter}
  width: auto;
  cursor: pointer;
  :link {
    text-decoration: none;
  }
`;

export const StyledLogo = styled(Puzzles)`
  fill: ${colors.BasicGreen};
  width: 40px;
  height: 40px;
  margin: 5px 5px 0 0;
`;

export const StyledText = styled.span`
  color: ${colors.Gray20};
  font-size: 28px;
  font-weight: bold;
  margin-top: 5px;
`;
