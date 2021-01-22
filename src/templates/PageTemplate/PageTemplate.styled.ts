import styled from 'styled-components';
import colors from 'styles/Colors';
import { FlexCenter } from 'styles/Mixins';

export const StyledContainer = styled.div`
  position: relative;
  ${FlexCenter};
  flex-direction: column;
  justify-content: flex-start;
  min-height: calc(100vh - 2*60px);
  background-color: ${colors.Gray120};
`;