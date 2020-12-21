import styled from "styled-components";
import colors from "styles/colors";
import { FlexColumn, FlexCenter } from "styles/Mixins";

export const StyledSubmitStep = styled.div`
  ${FlexColumn};
  width: 100%;
  height: 100%;
  background-color: ${colors.Gray100};
  overflow: auto;
`;

export const StyledMainWrapper = styled.div`
  ${FlexColumn};
`;

export const StyledTopWrapper = styled.div`
  ${FlexCenter};
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-gap: 10px;
  list-style: none;
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledHeading = styled.h2`
  color: ${colors.Gray20};
  font-size: 22px;
  font-weight: bold;
`;

export const StyledPlaceholderText = styled.span`
  color: ${colors.Gray20};
  font-size: 30px;
`;
