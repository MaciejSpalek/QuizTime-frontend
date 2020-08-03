import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  /* margin: 5px 0; */
  
  /* border: 1px solid black */
`;