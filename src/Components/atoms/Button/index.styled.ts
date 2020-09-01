import styled from 'styled-components';

export const StyledButton = styled.button`
    position: relative;
    color: white;
    width: 100%;
    min-height: 38px;
    font-size: 1.2em;
    font-weight: ${({ theme }) => theme.fontWeights.bold};  
    font-size: ${({ theme }) => theme.fontSizes.sm};  
    background-color: ${({ theme }) => theme.colors.grayscale[1]};
    border-radius: .2em;
    border: none;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    cursor: pointer;
`

