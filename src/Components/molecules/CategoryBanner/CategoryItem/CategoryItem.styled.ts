import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paragraph from "Components/atoms/Paragraph";
import styled from "styled-components";
import colors from "styles/colors";
import { FlexCenter } from "styles/Mixins";

export const StyledContainer = styled.div`
  ${FlexCenter};
  justify-content: flex-start;
  border-radius: 5px;
  background-color: ${colors.Gray100};
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background-color: ${colors.Gray80};
  }
`;
export const StyledIconWrapper = styled.div`
  ${FlexCenter};
  width: 50px;
  height: 50px;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: ${colors.BasicGreen};
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 18px;
  margin-left: 5px;

  @media (min-width: 600px) {
    font-size: 20px;
  }

  @media (min-width: 900px) {
    font-size: 22px;
  }
`;
