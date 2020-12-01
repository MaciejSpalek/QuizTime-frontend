import styled from "styled-components";
import colors from "styles/colors";
import { FlexColumn } from "styles/mixins";

export const StyledSubmitStep = styled.div`
  ${FlexColumn};
  width: 100%;
  height: 100%;
  background-color: ${colors.White};
  overflow-y: scroll;
`;

export const StyledWrapper = styled.div`
  ${FlexColumn};
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
`;

export const StyledHeading = styled.h2`
  color: ${colors.Gray20};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const StyledPlaceholderText = styled.span`
  color: ${colors.Gray20};
  font-size: 30px;
`;
