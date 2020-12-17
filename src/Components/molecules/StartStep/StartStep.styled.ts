import styled, { keyframes } from "styled-components";
import PageTemplate from "templates/PageTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexCenter } from "styles/mixins";
import Button from "Components/atoms/Button";
import colors from "styles/colors";
import Paragraph from "Components/atoms/Paragraph";

const twinkle = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.025);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledIconWrapper = styled.div<{ secondary: string }>`
  ${FlexCenter};
  background-color: ${({ secondary }) => secondary};
  width: 50px;
  height: 50px;
  border-radius: 5px;
  padding: 0 5px;
  :nth-of-type(2) {
    width: auto;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)<{ primary: string }>`
  font-size: 35px;
  color: ${({ primary }) => primary};
`;

export const StyledCounter = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: ${colors.White};
  margin-left: 5px;
`;


export const StyledPageTemplate = styled(PageTemplate)`
  justify-content: flex-start;
  overflow: auto;
`;

export const StyledWrapper = styled.div<{ primary: string }>`
  ${FlexCenter};
  justify-content: space-evenly;
  flex-direction: column;
  padding: 5px 10px;

  :first-of-type {
    justify-content: space-between;
    flex-direction: row;
    flex: 1;
    background-color: ${({ primary }) => primary};
  }
  :nth-of-type(2) {
    flex: 6;
    justify-content: center;
  }
  :nth-of-type(3) {
    flex: 1;
  }
`;

export const StyledTitle = styled.span<{ secondary: string }>`
  font-size: 36px;
  font-weight: bold;
  color: ${({ secondary }) => secondary};
`;


export const StyledAuthor = styled(Paragraph)`
  font-size: 18px;
  color: ${colors.Gray20};
`;

export const StyledButton = styled(Button)<{primary: string}>`
  width: 100%;
  background-color: ${({primary}) => primary};
  :first-of-type {
    /* animation: ${twinkle} 1s 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite; */
  }
`;
