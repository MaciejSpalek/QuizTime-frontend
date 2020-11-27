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
    z-index: 99999999;
`;


export const StyledWindow = styled.div`
    position: relative; 
    ${FlexColumn};
    justify-content: space-between;
    height: 220px;
    width: 280px;
    background-color: ${({theme}) => theme.colors.white};
`;


export const StyledWrapper = styled.div`
    ${FlexCenter};
    padding: 5px;

    :first-of-type {
        flex: 1;
        background-color: ${({theme}) => theme.colors.white};
        border-bottom: 2px solid ${({theme}) => theme.colors.Neutral80};
        justify-content: flex-end;
    };
    
    :nth-of-type(2) {
        flex: 3;
        background-color: ${({theme}) => theme.colors.white};
        padding: 5px 10px;
    };

    :nth-of-type(3) {
        flex: 1;
        justify-content: space-between;
        background-color: ${({theme}) => theme.colors.Neutral80};
        padding: 5px 10px;
    };
`;

export const StyledButton = styled(Button)`
    width: 120px;
`;

export const StyledParagraph = styled(Paragraph)`
    color: ${({theme}) => theme.colors.Neutral20};
    font-size: 20px;
`;

export const StyledIconButton = styled(IconButton)`
    width: 36px;
    height: 36px;
    color: ${({theme}) => theme.colors.Neutral40};
`;