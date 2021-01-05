import styled from 'styled-components'
import colors from 'styles/Colors';
import { FlexCenter } from 'styles/Mixins'

export const StyledContainer = styled.div`
  ${FlexCenter};
  flex-direction: column;
  height: 100%;
  background-color: ${colors.Gray120};
`;