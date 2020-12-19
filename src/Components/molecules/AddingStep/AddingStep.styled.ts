import styled from "styled-components";
import Button from "Components/atoms/Button";
import colors from "styles/colors";
import { FlexColumn } from "styles/mixins";

export const StyledContainer = styled.div`
  ${FlexColumn};
  height: 100%;
  background-color: ${colors.Gray100};
  overflow: auto;
`;

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  width: 100%;
  background-color: ${colors.Gray100};
`;

export const StyledList = styled.ul`
  display: grid;
  list-style: none;
  grid-gap: 5px 10px;
  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const StyledListItem = styled.li`
  
`;

export const StyledButton = styled(Button)`
  width: 100%;
  align-self: center;
`;
