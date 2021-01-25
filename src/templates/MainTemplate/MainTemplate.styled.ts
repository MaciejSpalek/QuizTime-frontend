import styled from "styled-components";
import { FlexColumn } from "styles/Mixins";

export const StyledContainer = styled.main`
  ${FlexColumn};
  justify-content: flex-start;
  width: 100%;
  max-width: 900px;
`;
