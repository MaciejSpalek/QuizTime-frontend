import styled from 'styled-components'
import colors from 'styles/colors';
import { FlexCenter } from 'styles/mixins'

export const StyledContainer = styled.div`
  ${FlexCenter};
  flex-direction: column;
  height: 100%;
  background-color: ${colors.Gray100};
`;