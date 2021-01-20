import { NoQuizzesIcon } from "assets";
import Button from "Components/atoms/Button";
import styled from "styled-components";
import colors from "styles/Colors";
import { scrollBar } from "styles/Mixins";
import PlaceholderTemplate from "templates/PlaceholderTemplate";

export const StyledContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 2*60px);
  padding: 10px;
  background-color: ${colors.Gray120};
`;

export const StyledPlaceholder = styled(PlaceholderTemplate)`
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
  height: 100%;
  list-style: none;

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