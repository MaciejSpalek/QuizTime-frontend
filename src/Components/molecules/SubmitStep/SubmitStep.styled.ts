import styled from "styled-components";
import { FlexColumn } from "theme/Mixins";

export const StyledSubmitStep = styled.div`
  ${FlexColumn};
  width: 100%;
  height: 100%;
  background-color: white;
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
  color: ${({ theme }) => theme.colors.Neutral20};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const StyledPlaceholderText = styled.span`
  color: ${({ theme }) => theme.colors.Neutral20};
  font-size: 30px;
`;
