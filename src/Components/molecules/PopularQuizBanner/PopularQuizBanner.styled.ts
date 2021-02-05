import styled from "styled-components";
import QuizThumbnail from "../QuizThumbnail";
import colors from "styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twinkleScale } from "styles/Animations";
import { FlexCenter } from "styles/Mixins";

export const StyledContainer = styled.div`
  position: relative;
  ${FlexCenter};
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 2px solid ${colors.Gray80};
`;

export const StyledTopWrapper = styled.div`
  ${FlexCenter};
  justify-content: space-between;
  padding: 10px;
`;

export const StyledBottomWrapper = styled.div`
  ${FlexCenter};
  padding: 10px;
  @media (min-width: 600px) {
    height: 240px;
    align-items: center;
  }
`;

export const StyledHeading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.Gray20};

  @media (min-width: 600px) {
    font-size: 24px;
  }
  @media (min-width: 900px) {
    font-size: 28px;
  }
`;

export const StyledQuizThumbnail = styled(QuizThumbnail)`
  z-index: 1;
  @media (min-width: 600px) {
    width: calc(50% - 5px);
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: ${colors.DarkGreen};
`;

export const StyledCounter = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.White};
  margin-left: 7.5px;
  animation: ${twinkleScale} .5s ease-in;
`;

export const StyledIconWrapper = styled.div`
  ${FlexCenter};
  background-color: ${colors.BasicGreen};
  width: auto;
  height: 50px;
  border-radius: 5px;
  padding: 0 5px;
`;


export const StyledThumbnailWrapper = styled.div`
  ${FlexCenter};
  cursor: pointer;
`;

