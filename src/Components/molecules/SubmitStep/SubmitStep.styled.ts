import Placeholder from 'templates/PlaceholderTemplate';
import styled from "styled-components";
import colors from "styles/Colors";
import { NoQuestionsIcon } from "assets";
import { 
  FlexColumn, 
  FlexCenter, 
  scrollBar 
} from "styles/Mixins";

export const StyledSubmitStep = styled.div`
  ${FlexColumn};
  height: 100%;
  background-color: ${colors.Gray120};
`;

export const StyledMainWrapper = styled.div`
  ${FlexColumn};
`;

export const StyledTopWrapper = styled.div`
  ${FlexCenter};
  height: 50px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-gap: 10px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledHeading = styled.h2`
  color: ${colors.Gray20};
  font-size: 22px;
  font-weight: bold;
`;


export const StyledPlaceholder = styled(Placeholder)`
  justify-content: flex-start;
 
  @media (max-width: 900px) and (min-height: 560px) {
    justify-content: center;
  }

  @media (min-width: 900px) and (min-height: 720px) {
    justify-content: center;
  }
`;


export const StyledText = styled.span`
  color: ${colors.Gray20};
  font-size: 30px;
`;


export const StyledPhoto = styled(NoQuestionsIcon)`
  width: 300px;
  height: 300px;
  min-width: 300px;
  min-height: 300px;
  @media (min-width: 900px) {
    width: 450px;
    height: 450px;
    min-width: 450px;
    min-height: 450px;
  }
`;

