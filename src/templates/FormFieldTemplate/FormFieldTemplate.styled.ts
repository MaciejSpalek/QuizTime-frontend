import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexColumn } from 'styles/mixins';

export const StyledFormField = styled.div`
  ${FlexColumn};
  align-items: flex-start;
  width: 100%;
  margin: 10px 0;
  background-color: ${colors.Gray100};
`;