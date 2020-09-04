import styled from 'styled-components';

export const StyledButton = styled.button<{isWidthExtend: boolean}>`
    position: relative;
    color: white;
    width: ${({isWidthExtend}) => isWidthExtend ? "100%" : "auto"};
    min-height: 38px;
    font-size: 1.2em;
    font-weight: ${({ theme }) => theme.fontWeights.bold};  
    font-size: ${({ theme }) => theme.fontSizes.sm};  
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: .2em;
    border: none;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    padding: 0 5px;
    cursor: pointer;
`

