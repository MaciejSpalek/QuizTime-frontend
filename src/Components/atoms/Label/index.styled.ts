import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  width: auto;
  height: auto;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.8;
`;