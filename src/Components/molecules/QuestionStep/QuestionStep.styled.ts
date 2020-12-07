import styled from "styled-components";
import colors from "styles/colors";
import { FlexCenter, FlexColumn } from "styles/mixins";

export const StyledContainer = styled.div`
  ${FlexColumn};
  justify-content: flex-start;
  height: calc(100vh - 2 * 60px);
  padding-top: 20px;
  overflow: auto;
  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

export const StyledQuestionWrapper = styled.div`
  position: relative;
  ${FlexCenter};
  justify-content: flex-start;
  width: 100%;
  min-height: 100px;
  border: 2px solid ${colors.Gray80};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 10px;
  padding: 0 18px;
`;

export const StyledLegend = styled.span`
  position: absolute;
  top: -16px;
  left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.Gray20};
  background-color: ${colors.White};
  padding: 0 10px;
`;

export const StyledContent = styled.span`
  color: ${colors.Gray40};
  font-size: 16px;
`;

export const StyledAnswersList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  list-style: none;
`;

export const StyledListItem = styled.li`
  width: 100%;
  height: 65px;  
`;
