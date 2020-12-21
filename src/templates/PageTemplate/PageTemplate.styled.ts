import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexCenter } from 'styles/mixins';

export const StyledContainer = styled.div`
  position: relative;
  ${FlexCenter};
  flex-direction: column;
  justify-content: flex-start;
  height: calc(100vh - 60px);
  background-color: ${colors.Gray100}
`;