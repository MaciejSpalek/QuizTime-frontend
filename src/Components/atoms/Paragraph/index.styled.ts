import styled from 'styled-components';


export const StyledParagraph = styled.p<{isBold: boolean}>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({theme}) => theme.colors.grayscale[4]};
  font-weight: ${({ theme, isBold }) => isBold ? theme.fontWeights.bold : theme.fontWeights.light};
    line-height: 1.5;
`;