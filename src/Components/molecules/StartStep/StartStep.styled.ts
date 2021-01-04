import colors from "styles/Colors";
import styled from "styled-components";
import Button from "Components/atoms/Button";
import PageTemplate from "templates/PageTemplate";
import Paragraph from "Components/atoms/Paragraph";
import { AbbreviateText, FlexCenter } from "styles/Mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledPageTemplate = styled(PageTemplate)`
  justify-content: flex-start;
  overflow: auto;
`;

export const StyledWrapper = styled.div`
  ${FlexCenter};
  justify-content: space-evenly;
  flex-direction: column;
  padding: 5px 10px;

  :first-of-type {
    justify-content: space-between;
    flex-direction: row;
    background-color: ${colors.Gray60};
    flex-basis: 60px;
  }
  :nth-of-type(2) {
    flex: 6;
    justify-content: center;
  }
  :nth-of-type(3) {
    flex: 1;
    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export const StyledIconWrapper = styled.div`
  ${FlexCenter};
  background-color: ${colors.Gray20};
  width: 50px;
  height: 50px;
  border-radius: 5px;
  padding: 0 5px;
  :nth-of-type(2) {
    width: auto;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: ${colors.Gray80};
`;

export const StyledCounter = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.White};
  margin-left: 5px;
`;

export const StyledTitle = styled.span`
  ${AbbreviateText};
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  color: ${colors.BasicGreen};
`;

export const StyledAuthor = styled(Paragraph)`
  font-size: 18px;
  color: ${colors.Gray20};
`;

export const StyledButton = styled(Button)`
  width: 100%;
  @media (min-width: 600px) {
    width: 180px;
    margin: 5px;
  }
`;
