import Paragraph from "Components/atoms/Paragraph";
import styled from "styled-components";
import colors from "styles/colors";
import { FlexCenter } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFooter = styled.footer`
  ${FlexCenter};
  max-width: 900px;
  justify-content: space-between;
  min-height: 60px;
  background-color: ${colors.Gray120};
  border-top: 2px solid ${colors.Gray80};
  padding: 0 10px;
`;

export const StyledWrapper = styled.div`
  ${FlexCenter};
  width: auto;
`;

export const StyledAnchor = styled.a`
  ${FlexCenter};
  :focus > svg {
    color: ${colors.Black};
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: ${colors.Gray20};
  margin-left: 5px;
  transition: 0.3s ease-in-out;
  :hover {
    color: ${colors.Black};
  }
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${colors.Gray20};
  font-weight: normal;
`;
