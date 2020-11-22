import styled, { keyframes } from 'styled-components'
import { FlexCenter, FlexColumn } from 'theme/Mixins'
import Button from 'Components/atoms/Button';
import Paragraph from 'Components/atoms/Paragraph';
import IconButton from 'Components/atoms/IconButton';

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

export const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    ${FlexCenter};
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.transparentBlack};
    animation: ${fadeInAnimation} .3s ease-in both;
    z-index: 999;
`;


export const StyledWindow = styled.div`
    position: relative; 
    ${FlexColumn};
    justify-content: space-evenly;
    height: 180px;
    width: 280px;
    border-radius: 5px;
    padding-top: 20px;
    background-color: ${({theme}) => theme.colors.white};
`;


export const StyledButtonWrapper = styled.div`
    ${FlexCenter};
    justify-content: space-evenly;
`;

export const StyledButton = styled(Button)`
    width: 120px;
`;

export const StyledParagraph = styled(Paragraph)`
    color: ${({theme}) => theme.colors.Neutral20};
    font-size: 24px;
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 36px;
    height: 36px;
    color: ${({theme}) => theme.colors.Neutral40};
    border-radius: 50%;
`;