import styled from 'styled-components';


export const StyledParagraph = styled.p<{isBold: boolean; textAlign: string, isMessage: boolean}>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({theme, isMessage}) => isMessage ? theme.colors.grayscale[2] : theme.colors.red};
  text-align: ${({textAlign}) => textAlign};
  font-weight: ${({ theme, isBold }) => isBold ? theme.fontWeights.bold : theme.fontWeights.light};
    line-height: 1.5;
`