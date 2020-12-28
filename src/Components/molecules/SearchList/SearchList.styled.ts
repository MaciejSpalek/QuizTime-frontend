import styled from "styled-components";
import colors from "styles/Colors";


export const StyledContainer = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  max-height: 200px;
  width: 100%;
  z-index: 999;
  border-radius: 5px;
  box-shadow: 0 0 5px 0.1px ${colors.TransparentBlack};
`;


export const StyledList = styled.ul`
  display: grid;
  max-height: 200px;
  width: 100%;
  background-color: ${colors.White};
  margin: 0;   
  list-style: none;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledListItem = styled.li`
  width: 100%;
  background-color: ${colors.White};
  padding: 5px;
`;

export const StyledGradient = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  min-height: 100%;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    ${colors.TransparentWhite},
    ${colors.White},
    ${colors.White}
  );
`;
