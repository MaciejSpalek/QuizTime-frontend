import styled from "styled-components";
import colors from "styles/colors";

export const StyledList = styled.ul`
  position: absolute;
  top: 60px;
  left: 0;
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  background-color: ${colors.White};
  list-style: none;
  padding: 10px;
  margin: auto 0 ;
  overflow: auto;
  
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  /* @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  } */
`;

export const StyledListItem = styled.li`
  width: 100%;
  height: 140px;
`;
