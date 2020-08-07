import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  width: auto;
  height: auto;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;