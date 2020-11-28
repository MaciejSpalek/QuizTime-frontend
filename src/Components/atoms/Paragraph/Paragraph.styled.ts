import styled from 'styled-components';


export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({theme}) => theme.colors.grayscale[2]};
  text-align: center;
  font-weight: ${({ theme}) => theme.fontWeights.bold};
  line-height: 1.5;
`;