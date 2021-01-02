import React from 'react';
import { StyledLogo, StyledText, StyledWrapper } from './Logo.styled';

const Logo = () => {
    return (
        <StyledWrapper>
            <StyledLogo />
            <StyledText> QuizTime </StyledText>
        </StyledWrapper>
    );
};

export default Logo;
