import styled, { css } from 'styled-components'

export const HamburgerLine = css`
    width: 100%;
    height: 4px;
    background-color: ${({theme}) => theme.colors.grayscale[3]};
    position: absolute;
`

export const StyledButton = styled.button`
    cursor: pointer;
    display: inline-block;
    background-color: transparent;
    border-radius: 50%;
`

export const StyledOuterBox = styled.span`
    width: 38px;
    height: 24px;
    display: inline-block;
    position: relative;

`

export const StyledInnerBox = styled.span`
    ${HamburgerLine};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color .1s .2s ease-in-out;

    &::before, &::after {
        ${HamburgerLine};
        content: '';
        left: 0;
        transition: transform .2s .2s ease-in-out;
    }
    &::before {
        top: -12px;
    } 
    
    &::after {
        top: 12px;
    }
`