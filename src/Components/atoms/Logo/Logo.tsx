import React from 'react';
import { routes } from 'routes';
import { StyledLogo, StyledText, StyledWrapper } from './Logo.styled';

const Logo = () => {
    return (
        <StyledWrapper to={routes.home}>
            <StyledLogo />
            <StyledText> QuizTime </StyledText>
        </StyledWrapper>
    );
};

export default Logo;
