import styled from 'styled-components';
import colors from 'styles/Colors';
import { FlexCenter } from 'styles/Mixins';

export const StyledContainer = styled.div`
  ${FlexCenter};
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  height: calc(100vh - 60px);
  background-color: ${colors.Gray120};
`;