import styled from 'styled-components';

export const StyledButton = styled.button`
    position: relative;
    color: white;
    min-height: 45px;
    font-size: 24px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};  
    font-size: ${({ theme }) => theme.fontSizes.sm};  
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 5px;
    border: none;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    padding: 0 5px;
    margin: 5px 0;
    cursor: pointer;
`

