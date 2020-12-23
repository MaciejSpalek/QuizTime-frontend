import styled from "styled-components";
import colors from "styles/Colors";
import Paragraph from "Components/atoms/Paragraph";
import { FlexCenter } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledContainer = styled.div`
  ${FlexCenter};
  background-color: ${colors.White};
  margin: 5px 0;
`;

export const StyledIcon = styled(FontAwesomeIcon)<{color: string}>`
  font-size: 24px;
  color: ${({ color }) => color};
`;

export const StyledIconWrapper = styled.div<{color: string}>`
  ${FlexCenter};
  background-color: ${({ color }) => color};
  width: 35px;
  height: 35px;
  border-radius: 5px;
  margin-right: 5px;
`;

export const StyledTitle = styled.span`
  font-size: 20px;
  color: ${colors.Gray20};
`;
