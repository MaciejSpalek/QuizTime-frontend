import { NoQuizzesIcon } from "assets";
import Button from "Components/atoms/Button";
import styled from "styled-components";
import colors from "styles/colors";
import Placeholder from "templates/UniversalTemplate";
import { FlexCenter, scrollBar } from "styles/Mixins";

export const StyledContainer = styled.div`
  ${FlexCenter};
  flex-direction: column;
  justify-content: flex-start;
  min-height: calc(100vh - 2*60px);
  padding: 10px;
  background-color: ${colors.Gray120};
`;

export const StyledPlaceholder = styled(Placeholder)`
  justify-content: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  ${scrollBar};
 
  @media (max-width: 900px) and (min-height: 500px) {
    justify-content: center;
  }

  @media (min-width: 900px) and (min-height: 650px) {
    justify-content: center;
  }
`;


export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  width: 100%;
  list-style: none;
  margin: 0;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledListItem = styled.li`
  width: 100%;
  max-height: 140px;
  cursor: pointer;
`;

export const StyledPhoto = styled(NoQuizzesIcon)`
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

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export const StyledHeading = styled.h2`
  align-self: flex-start;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.Gray20};
  margin-bottom: 10px;
  @media (min-width: 600px) {
    font-size: 24px;
  }
  @media (min-width: 900px) {
    font-size: 28px;
  }
`;

export const StyledStrong = styled.strong`
  color: ${colors.BasicGreen};
`;