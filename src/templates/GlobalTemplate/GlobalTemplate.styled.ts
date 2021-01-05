import styled from 'styled-components';
import colors from 'styles/Colors';
import { FlexColumn } from 'styles/Mixins';

export const StyledContainer = styled.div`
  ${FlexColumn};
  position: relative;
  height: 100vh;
  background-color: ${colors.Gray100};
  overflow: hidden;
`;