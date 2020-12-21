import styled from "styled-components";
import colors from "styles/colors";

export const StyledContainer = styled.div`
  position: absolute;
  top: 60px;
  height: calc(100vh - 2*60px);
  width: 100%;
  padding: 10px;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  width: 100%;
  max-height: 100%;
  background-color: ${colors.Gray100};
  list-style: none;
  overflow: auto;
  
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledListItem = styled.li`
  width: 100%;
  max-height: 140px;
  cursor: pointer;
`;
