import styled from "styled-components";
import colors from "styles/Colors";
import { FlexCenter } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  ${FlexCenter};
  justify-content: flex-start;
  background-color: ${colors.White};
`;

export const StyledIconWrapper = styled.div<{color: string}>`
  ${FlexCenter};
  background-color: ${({ color }) => color};
  width: 35px;
  height: 35px;
  border-radius: 5px;
  margin-right: 5px;
`;

export const StyledIcon = styled(FontAwesomeIcon)<{color: string}>`
  font-size: 24px;
  color: ${({ color }) => color};
`;

export const StyledTitle = styled.span`
  font-size: 20px;
  color: ${colors.Gray20};
`;
