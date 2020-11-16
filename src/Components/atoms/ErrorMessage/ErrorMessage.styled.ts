import styled from 'styled-components';


export const StyledErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({theme}) => theme.colors.red};
  line-height: 2;
`