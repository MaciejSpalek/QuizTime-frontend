import styled from 'styled-components';


export const StyledParagraph = styled.p<{isBold: boolean; textAlign: string}>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({theme}) => theme.colors.grayscale[2]};
  text-align: ${({textAlign}) => textAlign};
  font-weight: ${({ theme, isBold }) => isBold ? theme.fontWeights.bold : theme.fontWeights.light};
  line-height: 1.5;
`