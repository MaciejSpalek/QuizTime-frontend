import styled, { css } from 'styled-components';
import colors from 'styles/colors';
import { FlexCenter } from 'styles/Mixins';

export const HamburgerLine = css`
    width: 100%;
    height: 4px;
    background-color: ${colors.Gray20};
    position: absolute;
`;

export const StyledButton = styled.button`
    ${FlexCenter};
    cursor: pointer;
    width: auto;
    height: 38px;
    :focus { outline-color: ${colors.Gray40} }
    @media only screen and (min-width: 800px) {
        display: none;
    }
`;

export const StyledOuterBox = styled.span`
    position: relative;
    display: inline-block;
    width: 38px;
    height: 24px;
`;

export const StyledInnerBox = styled.span<{ isActive: boolean }>`
    ${HamburgerLine};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color .2s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: ${({ isActive }) => isActive && 'transparent'}; 

    &::before, &::after {
        ${HamburgerLine};
        content: '';
        left: 0;
        transition: transform .2s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    &::before {
        top: -10px;
        transform: ${({ isActive }) => isActive && `translateY(10px) rotate(45deg)`}; 
    } 
    
    &::after {
        top: 10px;
        transform: ${({ isActive }) => isActive && `translateY(-10px) rotate(-45deg)`}; 
    }
`;