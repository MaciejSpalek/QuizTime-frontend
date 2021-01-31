import styled from 'styled-components';
import colors from 'styles/colors';
import { FlexCenter } from 'styles/Mixins';
import Button from 'Components/atoms/Button';

export const StyledContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    ${FlexCenter}
    justify-content: space-between;
    background-color: ${colors.TransparentBlack};
    height: auto;
    z-index: 999999;
    padding: 10px;
`;

export const StyledTextWrapper = styled.div`
    ${FlexCenter}
    width: auto;
`;

export const StyledParagraph = styled.p`
    color: ${colors.Gray120};
    font-size: 12px;
    margin: 0;
    margin-right: 5px;
    text-align: center;
`;

export const StyledButton = styled(Button)`
    min-width: 100px;
    margin-left: 10px;
`;

export const StyledLink = styled.a`
    min-width: 100px;
    margin-left: 5px;
    font-weight: bold;
    color: ${colors.BasicGreen};
`;

