import styled from 'styled-components';
import colors from 'styles/Colors';
import { FlexColumn } from 'styles/Mixins';

export const StyledFormField = styled.div`
  ${FlexColumn};
  align-items: flex-start;
  width: 100%;
  margin: 10px 0;
  background-color: ${colors.Gray120};
`;