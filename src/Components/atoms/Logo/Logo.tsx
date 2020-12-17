import React from 'react';
import { StyledLogo, StyledWrapper } from './Logo.styled';

const Logo = ()=> {
    return (
        <StyledWrapper>
            <StyledLogo icon={['far', 'lightbulb']} />
        </StyledWrapper>
    );
};

export default Logo;
