import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexCenter, scrollBar } from 'styles/Mixins';

export const StyledContainer = styled.div`
  ${FlexCenter};
  ${scrollBar};
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  top: 60px;
  height: calc(100vh - 60px);
  background-color: ${colors.Gray100};
  overflow-x: hidden;
  overflow-y: auto;
`;